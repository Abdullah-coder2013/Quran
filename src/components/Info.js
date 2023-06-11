const Info = () => {
    return (
        <div className="surah flex flex-wrap max-xl:text-lg w-full transition ease-in-out duration-300 ayah p-90 wideletters leading-loose">
            <h1 className="ayahs">ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُهُ!</h1>
            <p className="text-3xl"> Welcome to this Website! <br/>
                Here, You can read the Quran pagewise and surahwise!<br/>
                In the search box if you type the page number and <strong>press enter</strong>,<br/>
                the page will be displayed.
                Else if you type 0 and press enter, the table of contents will be displayed.<br/>
                And if you type -1 the cover Page will be displayed.<br/>
            </p>
        </div>
    )
}
export default Info;