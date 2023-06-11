import Content from "./content";
const TableOfContents = (props) => {
    const tableOfContents = require("./contents.json");
    const genContent = () => {
        return tableOfContents.map((item, index) => {
            return <Content contents={item} index={index} setPg={props.setPg}/>
        })
    }
    return (
        <>
            <h1 className="pb-5 font-bold contents">Table Of Contents</h1>
            <ol className="surah w-full transition ease-in-out duration-300 ayah p-90 wideletters leading-loose">
                {genContent()}
            </ol>
        </>
    )
}
export default TableOfContents;