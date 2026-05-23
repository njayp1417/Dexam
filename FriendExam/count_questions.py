import json, os, glob

for f in sorted(glob.glob("extracted/*_questions.json")):
    data = json.load(open(f, encoding="utf-8"))
    course = os.path.basename(f).split("_questions.json")[0].split("_")[0]
    print(f"{course}: {len(data)} questions")
