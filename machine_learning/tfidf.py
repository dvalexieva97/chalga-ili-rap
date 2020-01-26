import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn import svm

def load_and_parse_data():
    chalga_lyrics = pd.read_json('a.json')
    rap_lyrics = pd.read_json('b.json')

    chalga_lyrics["type"] = 0
    rap_lyrics["type"] = 1


    data = pd.concat([chalga_lyrics, rap_lyrics])
    data = data.sample(frac=1)

    print(data.head())
    return data

def train_and_test_model(data):
    vectorizer = TfidfVectorizer()
    data_bow = vectorizer.fit_transform(data["lyrics"])
    
    KK = [10, 100, 200, 300, 350]

    for K in KK:
        data_bow_train = data_bow[:K]
        data_target_train = data[:K]
        data_bow_test = data_bow[K:]
        data_target_test = data[K:]

        # Logistic
        print('Logistic regression')
        clf = LogisticRegression(random_state=0).fit(data_bow_train, data_target_train["type"])
        print(clf.score(data_bow_test, data_target_test["type"]))

        #SVM
        print('Support Vector Machines')
        clf = svm.SVC()
        clf.fit(data_bow_train, data_target_train["type"])
        print(clf.score(data_bow_test, data_target_test["type"]))

data = load_and_parse_data()
train_and_test_model(data)

