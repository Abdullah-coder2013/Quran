import swal from 'sweetalert'

const Cover = (props) => {
    const Start = () => {
        return props.setPg(0);
    }
    const StartFromTOB = () => {
        return props.setPg(-1);
    }
    
    
        const clearLocalStorage = (event) => {
            console.log("clear button clicked");
            // localStorage.clear();
            localStorage.removeItem("bookmark");
            window.location.reload(false);
        }
    
    const Bookmark = () => {
        console.log("Bookmark is "+props.bookmark);
        if (props.bookmark === null) {
            swal("No Bookmarks Found!", "You have no bookmarks.");
            return;
        }
        else {
            console.log("inside if statement");
            return props.setPg(parseInt(props.bookmark));
            
        }
    }
    return (
        <div className="cover bg-green-900 p-5 rounded-xl shadow-lg flex justify-center flex-col h-3/4 border-4 border-green-950">
            <h1 className="title text-9xl max-lg:text-8xl text-center font-bold text-yellow-300">Quran</h1>
            <h5 className="text-center text-xl text-yellow-500 border-slate-900">Website made by Abdullah</h5><br/>
            <h5 className="text-center text-xl text-yellow-700">Text from Alquran API</h5>
            <div className="flex justify-center flex-col mt-14">
                <button type="button" onClick={Start} className=" border-4 mt-1 border-yellow-900 bg-yellow-600 duration-150 hover:text-slate-800 hover:bg-yellow-300 hover:-translate-y-1 hover:scale-110 transition ease-in-out p-2 rounded-md text-center text-slate-200 text-xl font-bold active:bg-yellow-400">Start Reading</button>
                <button type="button" onClick={StartFromTOB} className=" border-4 mt-1 border-yellow-900 bg-yellow-600 duration-150 hover:text-slate-800 hover:bg-yellow-300 hover:-translate-y-1 hover:scale-110 transition ease-in-out p-2 rounded-md text-center text-slate-200 text-xl font-bold active:bg-yellow-400">Table Of Contents</button>
                <button type="button" onClick={Bookmark} className=" border-4 mt-1 border-yellow-900 bg-yellow-600 duration-150 hover:text-slate-800 hover:bg-yellow-300 hover:-translate-y-1 hover:scale-110 transition ease-in-out p-2 rounded-md text-center text-slate-200 text-xl font-bold active:bg-yellow-400">Read From Bookmark</button>
                <button type="button" onClick={clearLocalStorage} className=" border-4 mt-1 border-yellow-900 bg-yellow-600 duration-150 hover:text-slate-800 hover:bg-yellow-300 hover:-translate-y-1 hover:scale-110 transition ease-in-out p-2 rounded-md text-center text-slate-200 text-xl font-bold active:bg-yellow-400">Clear Bookmarks</button>
            </div>

        </div>
    )
}
export default Cover;