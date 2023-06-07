const Ayah = (props) => {
    console.log(props.index)
    return (
        // <p className="ayah p-90 tracking-wide leading-loose">({props.number}) {props.page[props.index][1]}</p>
        `${props.page[props.index][1]} (${props.number}) `
    );
}
export default Ayah;