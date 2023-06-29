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
            <h1 className="p-5 font-bold contents text-center">Table Of Contents</h1>
            <div className="surah flex flex-wrap max-xl:text-lg w-full transition ease-in-out duration-300 ayah p-90 wideletters leading-loose">
                {genContent()}
            </div>
        </>
    )
}
export default TableOfContents;