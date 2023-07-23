
const SettingsPage = (props) => {

    const saveSettings = (e) => {
        props.localStorage.setItem("quranFont", e);
    }

    return (
        <div className="flex justify-center flex-col h-3/4 text-center">
            <h1 className="p-5 title font-bold contents text-center">Settings</h1>
            <form>
                <label className="ntext text-3xl">Quran Font: </label>
                <select onChange={(e) => saveSettings(e.target.value)} className="selection ntext p-1 rounded-md text-3xl bg-slate-300 border-slate-800 border-none">
                    <option value="indopak" className="bg-slate-400 text-slate-800">Indopak</option>
                    <option value="uthmani" className="bg-slate-400 text-slate-800">Uthmani Hafezi</option>
                </select>
                <br/>
            </form>

        </div>
    )
}

export default SettingsPage;