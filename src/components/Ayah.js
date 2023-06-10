const Ayah = (props) => {
    
    if (props.page[props.index][1].includes("بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ")) {
        let entryString = props.page[props.index][1];
        let entryArray = entryString.split(" ");
        let letter = entryArray.splice(3 + 1, entryArray.length - (3 + 1) );
        if (letter[0] === "ٱلرَّحِيمِ") {
            entryArray.push(letter);
        }
        let letterstogether = letter.join(" ");
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
                    <p className="font-bold text-5xl max-lg:text-2xl">❁ {props.page[props.index][2]} ❁</p>
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
    return (
        <>
        <span> {props.page[props.index][1]} </span>
        <span dangerouslySetInnerHTML={{__html: `<span>&#${62719 + props.number};</span>`}}></span>
        </>
    );
}
export default Ayah;