import Page from "./Page";
function Book(props) {
    // const setBookMark = (event) => {
    //     bookmark = pg;
    //     console.log(bookmark);
    // }
    return (
        <div className="w-full items-center bg-slate-300 text-5xl text-right p-4 rounded border-4 border-slate-400">
            <div className="flex justify-center margin my-1 text-red-500">
                <p>{props.pg + 1}</p>
            </div>
            <Page pg={props.pg} />
            {/* <button onClick={setBookMark}>Set Bookmark</button> */}
        </div>
    );
}
export default Book;