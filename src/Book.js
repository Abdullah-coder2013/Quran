import Page from "./Page";
import Cover from "./Cover";
// import Popup from "./Popup";
import swal from 'sweetalert'
function Book(props) {
    // const setBookMark = (event) => {
    //     bookmark = pg;
    //     console.log(bookmark);
    // }
    const search = (event) => {
        if (event.key === "Enter") {
            if (event.target.value < -1 || event.target.value > 604) {
                swal("Oops!", "Something went wrong!");
                event.target.value = null;
            }
            else {
                props.setPg(event.target.value-1)
                event.target.value = null;
            }
        }
    }
    if (props.pg === -1){
        return (
            <div>
                <Cover setPg={props.setPg}/>
            </div>
        )
    }
    return (
        <div className="w-full items-center bg-slate-300 text-5xl text-right p-4 pb-8 rounded border-4 border-slate-400 shadow-lg">
            
            <div className="flex flex-start justify-center">            
                <input type="number" className="w-1/6 p-2 border-0 outline-0 bg-slate-300 text-green-700" name="submit" onKeyDown={e => search(e)} placeholder="Page:"/>
                <input className="w-1/6 p-2 border-0 outline-0 bg-slate-300 text-green-700" type="text" value={props.pg+1} readOnly/>
            </div>

            <Page pg={props.pg} />
            {/* <button onClick={setBookMark}>Set Bookmark</button> */}
        </div>
    );
}
export default Book;