import requests
import json

totalayahs = []

for i in range(604):
    url = f"https://api.quran.com/api/v4/quran/verses/indopak?page_number={i+1}"
    response = requests.get(url)
    data = response.json()
    pageayahs = []
    ayahs = []
    for ayah in data["verses"]:
        metaDataSurah = ayah["verse_key"].split(":")
        print(metaDataSurah)
        with open("./json.json", "r") as p:
            d = json.load(p)
            print(d)
            ayahs.append([int(metaDataSurah[1]), ayah["text_indopak"], d["surahs"][int(metaDataSurah[0])-1]["name"], i+1])
        pageayahs.append(ayahs)

        for ayah in pageayahs:
            with open(f"models/page-{i+1}.json", mode="w", encoding="utf-8") as f:
                json.dump(ayah, f, ensure_ascii=False, indent=4)
