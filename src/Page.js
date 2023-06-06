import Ayah from "./Ayah";
import Cover from "./Cover";
function Page(props) {
    if (props.pg < -1 || props.pg > 603) {
        return (
            <div>
                <p>Empty Page Input / Page doesn't exist in book</p>
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