const Ayah = (props) => {
    if (props.page[props.index][1].includes("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ")) {
        return (
            <>
            <hr className="bg-slate-900"/>
            <p className="font-extrabold text-6xl">{props.page[props.index][1]} ({props.number})</p>
            <hr/>
            </>
        )
    }
    return (
        // <p className="ayah p-90 tracking-wide leading-loose">({props.number}) {props.page[props.index][1]}</p>
        <span>{props.page[props.index][1]} ({props.number})</span>
    );
}
export default Ayah;