 -------------
# Property proposal for textove.com
- source: textove.com 
- subject item: Q79621029
- number of records: ~ 60,000 artists, >100,000 songs
- examples
   - Krisko (Q19705949) [https://textove.com/krisko-beats krisko-beats] 
   - Fengi (Q78786447) [https://textove.com/fengi fengi] 
   - "Well paid" (Q39059477) [https://textove.com/100-kila-well-paid-tekst 100-kila-well-paid-tekst]
   - Beyonce (Q36153) [https://textove.com/beyonce beyonce], [https://textove.com/beyonce-knowles beyonce-knowles]
   - "Single Ladies (Put a Ring on It)" (Q147409) [https://textove.com/beyonce-single-ladies-tekst beyonce-single-ladies-tekst]

Created two property proposals:
- https://www.wikidata.org/wiki/Wikidata:Property_proposal/textove.com_Song_ID - song
- https://www.wikidata.org/wiki/Wikidata:Property_proposal/textove.com - artist
 
 -------
 
# Semantic representation

 ## Structure of artist 
- prefLabel
- altLabels: Real Name + all alternative names
- Description: //Krisko is bulgarian hip-hop artist and producer.
- P31 (inst of): Q5 (human) OR Q2088357 (musical ensemble)
- P106 (Occupation)
- P136 (Genre)
- P463(member of) - ако има как лесно
- P27 (country of citizenship) Q219 (BG)
-  Discogs ArtistID (P1953):
   - Discogs link: https://www.discogs.com/artist/4773109-Krisko (извличам от линк на страницата)
- P973 (Described at) Websites: krisko.bg, Facebook, instagram.com (separate by spaces)
- P6251 catchphrase


##Structure of Label
- Label
- Discogs label ID (P1955) 

 ## Structure of a song 
based on [WikiProject_Music#Track_properties](https://www.wikidata.org/wiki/Wikidata:WikiProject_Music#Track_properties)
- Label (BG)
- P31 Q7366
# wrong: - P361 (part of) /link to release
- 
- P175 (performer) /link to artist
- P175 (performer) (qualifier) P3831 (object has role) Q1399352 (featuring)
- P495 (country of origin) Q219
- P407 (language of work or name) Q7918
- P577 (publication date)
- P2047 (duration)
- Discogs track ID (P6079)
- P1651 (YouTube video ID) -- only the ID

 ## Structure of a release
 based on [WikiProject_Music#Release_properties](https://www.wikidata.org/wiki/Wikidata:WikiProject_Music#Release_properties)
- Label (BG)
- P31 (instance of): Q2031291 (release)
- P136 (genre) and Style
- Discogs release ID (P2206)
- P264 (record label)
- P495 (country of origin) Q219
- P407 (language of work or name) Q7918
- P577 (publication date) 
- tracklist (P658) - link to songs; (qualifier) P1545 (series ordinal)


 ## Style (musical) mapping 
- conscious hip hop (Q141459)
- rap music (Q62019146)
- pop-rap (Q2572585)
- hip hop music (Q11401)
- gangsta rap (Q753679)
