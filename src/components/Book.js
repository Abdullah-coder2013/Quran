import Page from "./Page";
import Cover from "./Cover";
import TableOfContents from "./tableOfContents/TableOfContents";
import swal from 'sweetalert'
function Book(props) {
    
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
                <Cover setPg={props.setPg} bookmark={localStorage.getItem("bookmark")}/>
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
    
    const setBookMark = () => {
        localStorage.setItem("bookmark", props.pg);
        swal("Bookmark Added!", "You have successfully added the page as your bookmark.")
    }
    return (
        <div className="w-full items-center bg-slate-300 text-5xl max-lg:text-3xl text-right p-4 pb-8 rounded border-4 border-slate-400 shadow-lg">
            
            <div className="flex flex-start justify-center text-xl text-xss">
                <button onClick={() => props.setPg(-2)} className="w-1/4 p-2 text-left hover:-translate-y-1 hover:scale-110 transition ease-in-out hover:text-green-800 font-bold">To Cover</button>          
                <input type="number" className="w-1/4 p-2 border-0 outline-0 bg-slate-300 text-green-700" name="submit" onKeyDown={e => search(e)} placeholder="Search"/>
                <input className="w-1/4 p-2 border-0 outline-0 text-center bg-slate-300 text-green-700" type="text" value={props.pg+1} readOnly/>
                <button className="w-1/4 text-center p-2 hover:-translate-y-1 hover:scale-110 transition ease-in-out hover:text-green-800 font-bold" onClick={() => props.setPg(-1)}>Contents</button>          
                <button onClick={setBookMark} className="w-1/4 p-2 text-right hover:-translate-y-1 hover:scale-110 transition ease-in-out hover:text-green-800 font-bold">Bookmark</button>
            </div>

            <Page pg={props.pg} />
        </div>
    );
}
export default Book;