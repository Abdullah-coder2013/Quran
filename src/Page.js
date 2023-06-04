import Ayah from "./Ayah";
function Page(props) {
    const page = require("./models/page-" + props.pg);
    const generateAyahs = () => {
        return page.map((item, index) => {
            return <><p>{page[index][0]}</p><Ayah page={page} index={index} /></>;
        });
    }
    // const ayahs = page.map((item) => {
    //     return <Ayah page={page} index={item} />;
    // });
   
    return (
        <div>
            {generateAyahs()}
        </div>
    )
}
export default Page;