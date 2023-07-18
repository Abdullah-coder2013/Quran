const Endpage = (props) => {
    const Start = () => {
        return props.setPg(0);
    }
    return (
        
            <div className="cover bg-green-900 p-5 rounded-xl shadow-lg flex justify-center flex-col h-3/4 border-4 border-green-950">
                <br/>
                <p className="ayahs font-semibold text-9xl max-lg:text-8xl text-center text-yellow-300">اَلۡحَمۡدُ لِلّٰهِ!</p>
                <br/>
                <br/>
                <h5 className="text-center text-xl text-yellow-500 border-slate-900 ntext">You finished reading the Quran!</h5><br/>
                <h5 className="text-center text-xl text-yellow-700 ntext">Now you can:</h5>
                <br/>
                <button type="button" onClick={Start} className=" border-4 mt-1 border-yellow-900 bg-yellow-600 duration-150 hover:text-slate-800 hover:bg-yellow-300 hover:-translate-y-1 hover:scale-110 transition ease-in-out p-2 rounded-md text-center text-slate-200 text-xl font-bold active:bg-yellow-400 ntext">Start over</button>
                <button type="button" onClick={() => props.setPg(-1)} className=" border-4 mt-1 border-yellow-900 bg-yellow-600 duration-150 hover:text-slate-800 hover:bg-yellow-300 hover:-translate-y-1 hover:scale-110 transition ease-in-out p-2 rounded-md text-center text-slate-200 text-xl font-bold active:bg-yellow-400 ntext">Go to a specific surah</button>
                <div className="mt-1"><input type="number" className="border-4 border-yellow-900 rounded-md w-full p-2 outline-0 font-bold text-xl text-center ntext bg-yellow-400 text-green-700" name="submit" onKeyDown={e => props.search(e)} placeholder="Go to specific page"/></div>
                <button type="button" className=" border-4 mt-1 border-slate-900 bg-slate-800 duration-150 hover:text-slate-800 hover:bg-slate-300 hover:-translate-y-1 hover:scale-110 transition ease-in-out p-2 rounded-md text-center text-slate-200 text-xl font-bold active:bg-slate-400 ntext"><a href='https://github.com/Abdullah-coder2013/Quran'>Contribute <svg className='ghub' xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg></a></button>

            </div>
        
    );
}
export default Endpage;