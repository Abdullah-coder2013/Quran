import requests
import json

totalayahs = []

for i in range(604):
    url = f"https://api.alquran.cloud/v1/page/{i+1}/indopak"
    response = requests.get(url)
    data = response.json()
    pageayahs = []
    ayahs = []
    for ayah in data["data"]["ayahs"]:
        ayahs.append([ayah["numberInSurah"],ayah["text"],ayah["surah"]["name"],ayah["page"]])
    pageayahs.append(ayahs)
    
    print(pageayahs)
    for ayah in pageayahs:
        with open(f"models/page-{i}.json", mode="w", encoding="utf-8") as f:
            json.dump(ayah, f, ensure_ascii=False, indent=4)
    
    
