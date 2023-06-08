import Ayah from "./Ayah";
import Cover from "./Cover";
function Page(props) {
    if (props.pg < -1 || props.pg > 603) {
        return (
            <div>
                <p>Some Error occured!</p>
            </div>
        )
    }
    else if (props.pg === -1) {
        return (
            <div>
                <Cover />
            </div>
        )
    }
    const page = require("./models/page-" + props.pg);
    let arrayayahs = [];
    const generateAyahs = () => {
        return page.map((item, index) => {
            arrayayahs.push(<Ayah page={page} index={index} number={page[index][0]}/>);
            return null;
        });
    }
    generateAyahs();
    const displayayahs = () => {
        return arrayayahs;
    }
    // const ayahs = page.map((item) => {
    //     return <Ayah page={page} index={item} />;
    // });
   
    return (
        <div className="ayahs transition ease-in-out duration-300 ayah p-90 wideletters leading-loose">
            {displayayahs()}
        </div>
    )
}
export default Page;