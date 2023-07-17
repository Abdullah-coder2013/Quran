const Ayah = (props) => {
    
    if (props.page[props.index][1].includes("بِسۡمِ اللهِ الرَّحۡمٰنِ الرَّحِيۡمِ")) {
        const entryString = "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ";
        const entryArray = entryString.split(" ");
        const letter = entryArray.splice(3 + 1, entryArray.length - (3 + 1) );
        if (letter[0] === "ٱلرَّحِيمِ") {
            entryArray.push(letter);
        }
        const letterstogether = letter.join(" ");
        const generateFirstAyah = () => {
            if (letterstogether === "") {
                return "";
            }
            else {
                return <> <span>{letterstogether} </span> <span dangerouslySetInnerHTML={{__html: "<span>&#62720;</span>"}}></span> </>;
            }
        }
        return (
            <>
                <hr className="headAyahTop" />
                <div className="flex justify-center">
                    <p className="font-bold text-5xl max-lg:text-2xl surah">❁ {props.page[props.index][2]} ❁</p>
                </div>
                <hr className="headAyahTop headAyahBottom"/>
                <div className="flex justify-center">
                    <p className=" font-semibold text-5xl max-lg:text-2xl">❁ {entryArray.join(" ")} ۝ ❁</p>
                </div>
                <hr className="headAyahBottom"/>
                <span>{generateFirstAyah()}</span>
            </>
        )
    }
    else if (props.page[props.index][0] === 1) {
        return(
        <>
                <hr className="headAyahTop" />
                <div className="flex justify-center">
                    <p className="font-bold text-5xl max-lg:text-2xl surah">❁ {props.page[props.index][2]} ❁</p>
                </div>
                <hr className="headAyahTop headAyahBottom"/>
                <div className="flex justify-center">
                    <p className=" font-semibold text-5xl max-lg:text-2xl">❁ بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ۝ ❁</p>
                </div>
                <hr className="headAyahBottom"/>
                <span className="tran">{props.page[props.index][1]} </span>
                <span className="tran" dangerouslySetInnerHTML={{__html: `<span>&#${62719 + 1};</span>`}}></span>
        </>)
    }
    return (
        <>
        <span className="tran"> {props.page[props.index][1]} </span>
        <span className="tran" dangerouslySetInnerHTML={{__html: `<span>&#${62719 + props.number};</span>`}}></span>
        </>
    );
}
export default Ayah;