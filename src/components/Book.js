import Page from "./Page";
import Cover from "./Cover";
import TableOfContents from "./tableOfContents/TableOfContents";
import Info from "./Info";
// import Popup from "./Popup";
import swal from 'sweetalert'
function Book(props) {
    // const setBookMark = (event) => {
    //     bookmark = pg;
    //     console.log(bookmark);
    // }
    const search = (event) => {
        if (event.key === "Enter") {
            if (event.target.value <= -2 || event.target.value > 605) {
                swal("Page Not Found!", "This page does not exist.");
                event.target.value = null;
            }
            else {
                props.setPg(event.target.value-1)
                event.target.value = null;
            }
        }
    }
    if (props.pg === -2){
        return (
            <div>
                <Cover setPg={props.setPg}/>
            </div>
        )
    }
    if (props.pg === -1){
        return (
            <div className="w-full items-center bg-slate-300 text-5xl max-lg:text-3xl text-right p-4 pb-8 rounded border-4 border-slate-400 shadow-lg">
                <div>
                    <TableOfContents setPg={props.setPg}/>
                </div>
            </div>
        )
    }
    if (props.pg === -3){
        return (
            <div className="w-full items-center bg-slate-300 text-5xl max-lg:text-3xl text-right p-4 pb-8 rounded border-4 border-slate-400 shadow-lg">
                <div>
                    <Info/>
                </div>
            </div>
        )
    }
    return (
        <div className="w-full items-center bg-slate-300 text-5xl max-lg:text-3xl text-right p-4 pb-8 rounded border-4 border-slate-400 shadow-lg">
            
            <div className="flex flex-start justify-center">            
                <input type="number" className="w-1/3 p-2 border-0 outline-0 bg-slate-300 text-green-700" name="submit" onKeyDown={e => search(e)} placeholder="Search"/>
                <input className="w-1/3 p-2 border-0 outline-0 bg-slate-300 text-green-700" type="text" value={props.pg+1} readOnly/>
            </div>

            <Page pg={props.pg} />
            {/* <button onClick={setBookMark}>Set Bookmark</button> */}
        </div>
    );
}
export default Book;