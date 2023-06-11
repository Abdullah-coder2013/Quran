
const Content = (props) => {
    return (
        <>
            <li className="w-full items-center border-2 border-slate-800 rounded-xl content-center">
                {props.contents[0]} {props.contents[1]} <button className="p-2 text-xs border-2 border-slate-800 mr-1 mb-3 rounded-xl bg-blue-500 hover:text-slate-950 text-slate-200 shadow-lg font-extrabold hover:bg-blue-300 hover:-translate-y-1 hover:scale-110 transition ease-in-out" onClick={() => props.setPg(props.contents[1] - 1)}>Go to page</button>
            </li>
            <br/>
        </>
    )
}
export default Content;