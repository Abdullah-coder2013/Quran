const Cover = (props) => {
    const Start = () => {
        return props.setPg(0);
    }
    return (
        <div className="cover bg-orange-900 p-5 rounded-xl shadow-lg flex justify-center flex-col h-3/4 border-4 border-amber-950">
            <h1 className="title text-9xl text-center font-bold text-yellow-300">Quran</h1>
            <h5 className="text-center text-xl text-yellow-500 border-slate-900">Website made by Abdullah</h5><br/>
            <h5 className="text-center text-xl text-yellow-700">Text from Alquran API</h5>
            <button type="button" onClick={Start} className=" border-4 mt-16 border-yellow-900 bg-yellow-600 duration-150 hover:text-slate-800 hover:bg-yellow-300 hover:-translate-y-1 hover:scale-110 transition ease-in-out p-2 rounded-md text-center text-slate-200 text-xl font-bold">Start Reading</button>
        </div>
    )
}
export default Cover;