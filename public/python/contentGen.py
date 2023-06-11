import json
totalcontent = []
for i in range(604):
    with open(f"models/page-{i}.json", encoding="utf-8") as f:
        page = json.load(f)
        print(page)
        content = []
        for item in page:
            if "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ" in item[1] or item[1] == "﻿بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ":
                with open(f"contents.json", mode="w", encoding="utf-8") as s:
                    totalcontent.append([item[2], item[3]])



with open("contents.json", mode="w", encoding="utf-8") as s:
    json.dump(totalcontent, s, ensure_ascii=False, indent=4)
    
