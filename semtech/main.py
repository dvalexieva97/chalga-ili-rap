import json
import urllib.request
import urllib.parse
import csv

"""
Note: the dataset should be present. If for some reason it isn't you can run download_dataset
to recreate it. Since it will be piped to STDOUT you should  pipe it to a file

Note2: there is no error handling, good luck
"""

def download_dataset():
    songs = []

    for i in range(1, 8):
        url = 'https://api.discogs.com/labels/207112/releases?page=' + str(i) + '&per_page=100'
        f = urllib.request.urlopen(url)
        json_resp = f.read().decode('utf-8')
        data = json.loads(json_resp)
        for i in data["releases"]:
            # print(i["artist"])
            songs.append(i) 


    print(json.dumps(songs))

def parse_dataset(filename):
    parsed_songs = []
    with open(filename) as json_file:
        data = json.load(json_file)
        print(len(data))
        wr = csv.writer(open('final.csv', 'w', encoding="utf-8"), quoting=csv.QUOTE_ALL)
        wr.writerow(('artist', 'title', 'year', 'label', 'genre'))
        for i in data:
            # song = {"artist": i["artist"], "title": i["title"], "year": i["year"]}
            song = (i["artist"], i["title"], i["year"], 'planeta', 'pop-folk')
            wr.writerow(song)

def download_album_dataset():
    albums = [
        { "url" : 'https://api.discogs.com/releases/12192823', "artist": "NDOE", "year": 2018, "album_name": "Хиляди Белези"},
        { "url" : 'https://api.discogs.com/releases/12192668', "artist": "So Called Crew", "year": 2018, "album_name" : "Вода и Вино" },
        { "url" : 'https://api.discogs.com/releases/7641358', "artist" : "100 Кила", "year" : 2013, "album_name" : "Zla10" },
        { "url" : 'https://api.discogs.com/releases/7863031', "artist" : "Krisko", "year" : 2012, "album_name" : "Krisko Beats EP" },
        # { "url" : 'https://api.discogs.com/releases/13733336', "artist" : "Ицо Хазарта", "year" : 2019, "album_name" : "Неправилен рап" } -- Needs aproval as of now, can't download
    ]
    
    album_songs = []
    for album in albums:
        album_url = album["url"]
        f = urllib.request.urlopen(album_url)
        json_resp = f.read().decode('utf-8')
        data = json.loads(json_resp)
        for i in data["videos"]:
            i["artist"] = album["artist"]
            i["year"] = album["year"]
            i["album_name"] = album["album_name"]
            album_songs.append(i) 
        
    print(json.dumps(album_songs))

def parse_album_dataset(filename):
    parsed_songs = []
    with open(filename, encoding="utf-8") as json_file:
        data = json.load(json_file)
        print(len(data))
        wr = csv.writer(open('final_album.csv', 'w'), quoting=csv.QUOTE_ALL)
        wr.writerow(('artist', 'album_name', 'title', 'year', 'uri', 'description', 'duration', 'label', 'genre'))
        for i in data:
            song = (i['artist'], i['album_name'], i['title'], i['year'], i['uri'], i['description'], i['duration'], 'facing the sun', 'hip-nop')
            wr.writerow(song)

parse_dataset('all_songs.json')
# parse_album_dataset('all_album_songs.json')
# download_album_dataset()
