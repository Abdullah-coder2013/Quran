import subprocess

# For loop to download audio files from url with subprocess and curl.

for i in range(113):
    if i < 10-1:
        url = f"https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/00{i+1}.mp3"
    elif i < 100-1 and i >= 10-1:
        url = f"https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/0{i+1}.mp3"
    elif i < 1000-1 and i >= 100-1:
        url = f"https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/{i+1}.mp3"
    print(f"Done {i+1}")
    subprocess.call(["curl", url, "--output", f"audio{i+1}.mp3"])