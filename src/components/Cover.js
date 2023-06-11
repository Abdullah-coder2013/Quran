const Cover = (props) => {
    const Start = () => {
        return props.setPg(0);
    }
    const StartFromTOB = () => {
        return props.setPg(-1);
    }
    const Info = () => {
        return props.setPg(-3);
    }
    return (
        <div className="cover bg-green-900 p-5 rounded-xl shadow-lg flex justify-center flex-col h-3/4 border-4 border-green-950">
            <h1 className="title text-9xl max-lg:text-8xl text-center font-bold text-yellow-300">Quran</h1>
            <h5 className="text-center text-xl text-yellow-500 border-slate-900">Website made by Abdullah</h5><br/>
            <h5 className="text-center text-xl text-yellow-700">Text from Alquran API</h5>
            <div className="flex justify-center flex-col mt-14">
                <button type="button" onClick={Start} className=" border-4 mt-1 border-yellow-900 bg-yellow-600 duration-150 hover:text-slate-800 hover:bg-yellow-300 hover:-translate-y-1 hover:scale-110 transition ease-in-out p-2 rounded-md text-center text-slate-200 text-xl font-bold active:bg:yellow-800">Start Reading</button>
                <button type="button" onClick={Info} className=" border-4 mt-1 border-yellow-900 bg-yellow-600 duration-150 hover:text-slate-800 hover:bg-yellow-300 hover:-translate-y-1 hover:scale-110 transition ease-in-out p-2 rounded-md text-center text-slate-200 text-xl font-bold active:bg:yellow-800">ⓘ Info</button>
                <button type="button" onClick={StartFromTOB} className=" border-4 mt-1 border-yellow-900 bg-yellow-600 duration-150 hover:text-slate-800 hover:bg-yellow-300 hover:-translate-y-1 hover:scale-110 transition ease-in-out p-2 rounded-md text-center text-slate-200 text-xl font-bold active:bg:yellow-800">See Table Of Contents</button>
            </div>

        </div>
    )
}
export default Cover;