# IMPORTANT! This File could be brocken and send lot of incorrect data to the server #
# Use CareFULLY!

import requests
import json

totalayahs = []

for i in range(10):
    url = f"https://api.alquran.cloud/v1/page/{i + 1}/indopak"
    response = requests.get(url)
    data = response.json()
    pageayahs = []
    ayahs = []
    for ayah in data["data"]["ayahs"]:
        ayahs.append([ayah["numberInSurah"],ayah["text"],ayah["surah"]["name"]])
    pageayahs.append(ayahs)
    # for ayah in pageayahs:
    #     totalayahs.append(ayah)
    print(pageayahs)
    for ayah in pageayahs:
        with open(f"models/page-{i}.json", mode="w", encoding="utf-8") as f:
            json.dump(ayah, f, ensure_ascii=False, indent=4)
    
    
