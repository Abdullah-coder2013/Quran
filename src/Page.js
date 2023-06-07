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
    const generateAyahs = () => {
        return page.map((item, index) => {
            return <Ayah page={page} index={index} number={page[index][0]}/>;
        });
    }
    // const ayahs = page.map((item) => {
    //     return <Ayah page={page} index={item} />;
    // });
   
    return (
        <div className="transition ease-in-out duration-300 ayah p-90 tracking-wide leading-loose">
            {generateAyahs()}
        </div>
    )
}
export default Page;