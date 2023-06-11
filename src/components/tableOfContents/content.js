
const Content = (props) => {
    return (
        <>
            <div className="w-1/2 items-center mr-0 rounded-sm content-center flex">
                <span className="max-xl:text-xs w-1/2 text-2xl mr-2"> {props.contents[0]} {props.contents[1]} </span> <button className="p-2 max-xl:text-xs text-lg w-1/2 border-2 border-slate-800 mr-1 mb-3 mt-3 rounded-xl bg-green-700 hover:text-slate-950 text-slate-200 shadow-lg font-extrabold hover:bg-green-500 hover:-translate-y-1 hover:scale-110 transition ease-in-out" onClick={() => props.setPg(props.contents[1] - 1)}>Go to page</button>
            </div>
            <br/>
        </>
    )
}
export default Content;