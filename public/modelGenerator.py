import requests
import json

totalayahs = []

for i in range(604):
    url = f"https://api.alquran.cloud/v1/page/{i + 1}/quran-uthmani"
    response = requests.get(url)
    data = response.json()
    pageayahs = []
    ayahs = []
    for ayah in data["data"]["ayahs"]:
        ayahs.append([ayah["numberInSurah"],ayah["text"]])
    pageayahs.append(ayahs)
    # for ayah in pageayahs:
    #     totalayahs.append(ayah)
    print(pageayahs)
    for ayah in pageayahs:
        with open(f"src/models/page-{i}.json", "w", encoding="utf-8") as f:
            json.dump(ayah, f, ensure_ascii=False, indent=4)
    
    
