# This Python file uses the following encoding: utf-8
import json
import urllib.request
import urllib.parse
import csv
import discogs_client

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
            song = (i["artist"], i["title"], i["released"], 'planeta', 'pop-folk')
            wr.writerow(song)

def download_album_dataset():
    albums = [
        { "url" : 'https://api.discogs.com/releases/12192823', "artist": "NDOE", "released": "24 Feb 2018", "album_name": "Хиляди Белези"},
        { "url" : 'https://api.discogs.com/releases/12192668', "artist": "So Called Crew", "released": "26 Jan 2018", "album_name" : "Вода и Вино" },
        { "url" : 'https://api.discogs.com/releases/7641358', "artist" : "100 Кила", "released" : "01 Apr 2013", "album_name" : "Zla10" },
        { "url" : 'https://api.discogs.com/releases/7863031', "artist" : "Krisko", "released" : "04 Dec 2012", "album_name" : "Krisko Beats EP" },
        # { "url" : 'https://api.discogs.com/releases/13733336', "artist" : "Ицо Хазарта", "released" : "02 May 2019", "album_name" : "Неправилен рап" }
    ]
    
    album_songs = []
    for album in albums:
        album_url = album["url"]
        f = urllib.request.urlopen(album_url)
        json_resp = f.read().decode('utf-8')
        data = json.loads(json_resp)
        for i in (data["videos"] + data["tracklist"]):
            i["artist"] = album["artist"]
            i["released_formatted"] = album["released"]
            i["album_name"] = album["album_name"]
            album_songs.append(i) 

    with open('new_album.json', 'w', encoding="utf-8") as outfile:
        print(json.dump(album_songs, outfile, ensure_ascii=False))

def parse_album_dataset(filename):
    parsed_songs = []
    with open(filename, encoding="utf-8") as json_file:
        data = json.load(json_file)
        print(len(data))
        wr = csv.writer(open('final_album.csv', 'w'), quoting=csv.QUOTE_ALL)
        wr.writerow(('artist', 'album_name', 'title', 'released', 'uri', 'description', 'duration', 'label', 'genre'))
        for i in data:
            if not i.get('uri'):
                i['uri'] = ''
            if not i.get('description'):
                i['description'] = ''
            song = (i['artist'], i['album_name'], i['title'], i['released_formatted'], i['uri'], i['description'], i['duration'], 'facing the sun', 'hip-nop')
            wr.writerow(song)


def artists_dataset_from_label(label_name):
    d = discogs_client.Client('ExampleApplication/0.1', user_token="xOocILWvxqXCaDxPlsPZWIjzWPazATYBOlwEWrQK")
    artists_list = []
    results = d.search(label_name, type='label')
    for i in range(results[0].releases.count):
        artist_dict={}
        artist = results[0].releases[i].artists[0]
        artist_dict['prefLabel'] = artist.name
        artist_dict['Real Name'] = artist.real_name if artist.real_name is not None else ""
        artist_dict['Description'] = artist.profile.strip() if artist.profile is not None else ""
        artist_dict['Sites'] = artist.urls if artist.urls is not None else ""
        artist_dict['altLabels'] = artist.name_variations if artist.name_variations is not None else ""
        artist_dict['url'] = artist.url
        artists_list.append(artist_dict)
    with open('artists_from_label.json', 'w', encoding="utf-8") as outfile:
        json.dump(artists_list, outfile, indent=2, ensure_ascii=False)

def parse_artists_dataset(filename):
    parsed_artists = []
    with open(filename) as json_file:
        data = json.load(json_file)
        with open('artists.csv', 'w', encoding="utf-8") as outfile:
            wr = csv.writer(outfile, quoting=csv.QUOTE_ALL)
            wr.writerow(('prefLabel', 'Real Name', 'Description', 'Sites', 'altLabels', 'url'))
            for i in data:
                if len(i['altLabels']) > 1:
                    alt_labels = ','.join(map(str, i['altLabels']))
                else:
                    alt_labels = ''.join(map(str, i['altLabels']))
                if len(i['Sites']) > 1:
                    sites = ' '.join(map(str, i['Sites']))
                else:
                    sites = ''.join(map(str, i['Sites']))
                artist = (i["prefLabel"], i["Real Name"], i["Description"], sites, alt_labels, i['url'])
                wr.writerow(artist)



# download_album_dataset()
# parse_dataset('all_songs.json')
# parse_album_dataset('new_album.json')
# artists_dataset_from_label('Facing The Sun')
parse_artists_dataset('artists_from_label.json')
