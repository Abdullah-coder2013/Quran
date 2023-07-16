
const Content = (props) => {
    return (
        <>
            <div className="w-1/2 items-center mr-0 rounded-sm content-center flex">
                <button className="p-2 max-xl:text-xs text-lg w-full m-2 border-2 border-slate-800 mr-1 mb-3 mt-3 rounded-xl bg-green-700 active:bg-green-400 hover:text-slate-950 text-slate-200 shadow-lg font-extrabold hover:bg-green-500 hover:-translate-y-1 hover:scale-110 transition ease-in-out ntext" onClick={() => props.setPg(props.contents[1] - 1)}>
                    <span className="max-xl:text-xs w-full text-2xl mr-2">
                        <span className=" font-extrabold"><span className="text-green-900 lilita">{props.index+1}.</span></span> {props.contents[0]} <span className="text-green-500 lilita">{props.contents[1]}</span> 
                    </span>
                </button>
            </div>
            <br/>
        </>
    )
}
export default Content;