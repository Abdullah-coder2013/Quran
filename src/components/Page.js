import Ayah from "./Ayah";
function Page(props) {
    if (props.pg < -1 || props.pg > 605) {
        return (
            <div>
                <p>Some Error occured!</p>
            </div>
        )
    }
    let page = null
    if (props.localStorage.getItem("quranFont") === "indopak") {
        page = require(`../models/indopak/page-${props.pg}.json`);
        const generateAyahs = () => {
            return page.map((item, index) => {
                return <Ayah page={page} option="indopak" index={index} number={page[index][0]} key={index}/>;
            });
        }
        return (
            <div className="indopak transition ease-in-out duration-300 ayah p-90 wideletters leading-loose">
                {generateAyahs()}
            </div>
        )
    }
    else if (props.localStorage.getItem("quranFont") === "uthmani") {
        page = require(`../models/uthmani/page-${props.pg}.json`);
        const generateAyahs = () => {
            return page.map((item, index) => {
                return <Ayah page={page} option="uthmani" index={index} number={page[index][0]} key={index}/>;
            });
        }
        return (
            <div className="uthmani transition ease-in-out duration-300 ayah p-90 wideletters leading-loose">
                {generateAyahs()}
            </div>
        )
    }
    else {
        page = require(`../models/indopak/page-${props.pg}.json`);

        const generateAyahs = () => {
            return page.map((item, index) => {
                return <Ayah page={page} option="indopak" index={index} number={page[index][0]} key={index}/>;
            });
        }
        return (
            <div className="indopak transition ease-in-out duration-300 ayah p-90 wideletters leading-loose">
                {generateAyahs()}
            </div>
        )
    }
        

    
    
}
export default Page;