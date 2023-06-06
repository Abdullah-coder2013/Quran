import Page from "./Page";
import Cover from "./Cover";
function Book(props) {
    // const setBookMark = (event) => {
    //     bookmark = pg;
    //     console.log(bookmark);
    // }
    if (props.pg === -1){
        return (
            <div>
                <Cover setPg={props.setPg}/>
            </div>
        )
    }
    return (
        <div className="w-full items-center bg-slate-300 text-5xl text-right p-4 rounded border-4 border-slate-400 shadow-lg">
            <div className="flex justify-center">            
                <input type="number" className="w-1/6 p-2 border-0 outline-0 bg-slate-300 text-red-600" name="submit" onChange={e => props.setPg(e.target.value-1)} placeholder="Page Number"/>
            </div>

            <Page pg={props.pg} />
            {/* <button onClick={setBookMark}>Set Bookmark</button> */}
        </div>
    );
}
export default Book;