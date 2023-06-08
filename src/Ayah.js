const Ayah = (props) => {
    if (props.page[props.index][1].includes("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ")) {
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
                return <span>{letterstogether} (<span className="text-3xl max-lg:text-lg">1</span>)</span>;
            }
        }
        return (
            <>
                <hr className="headAyahTop"/>
                <div className="flex justify-center">
                    <p className=" font-semibold text-5xl max-lg:text-2xl">❁ {entryArray.join(" ")} ❁</p>
                </div>
                <hr className="headAyahBottom"/>
                <span>{generateFirstAyah()}</span>
            </>
        )
    }
    return (
        // <p className="ayah p-90 tracking-wide leading-loose">({props.number}) {props.page[props.index][1]}</p>
        <span>{props.page[props.index][1]} (<span className="text-3xl max-lg:text-lg">{props.number}</span>) </span>
    );
}
export default Ayah;