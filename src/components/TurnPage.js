const TurnPage = (props) => {
    const turnPage = (event) => {
        props.setPg(props.pg+1);
    }
    const backPage = (event) => {
        props.setPg(props.pg-1);
    }
    if (props.turnPage === "turn" && props.pg < 604) {
        return (
            <button onClick={turnPage} className="active:bg-slate-300/10 active:rounded-xl hover:-translate-y-1 hover:scale-110 transition ease-in-out"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-caret-left" viewBox="0 0 16 16">
            <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
          </svg></button>
        )
    }
    else if (props.turnPage === "back" && props.pg > -2 ){
        return (
            <button className="active:bg-slate-300/10 active:rounded-xl hover:-translate-y-1 hover:scale-110 transition ease-in-out" onClick={backPage}><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
            <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
          </svg></button>
        )
    }

}
export default TurnPage;
