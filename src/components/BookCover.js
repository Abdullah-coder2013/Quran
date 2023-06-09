import { useState } from "react";
import Book from "./Book";
import TurnPage from "./TurnPage";
import MobileTurnPage from "./MobileTurn";
const BookCover = () => {
    const [pg, setPg] = useState(-1);

    return (
    <>
      <div className="tisch h-full flex justify-center relative">
          <div className="mt-[450px] max-lg:hidden fixed w-1 left-20">        
            <TurnPage turnPage={"turn"} setPg={setPg} pg={pg}/>
          </div>
          <div className="mt-[450px] lg:hidden fixed w-1 left-0">        
            <MobileTurnPage turnPage={"turn"} setPg={setPg} pg={pg}/>
          </div>
          <div className="book bg-green-900 w-1/2 max-lg:w-full p-5 rounded-xl shadow-lg border-4 border-green-950">
            
            <Book pg={pg} setPg={setPg}/>
          
          </div>
          <div className="mt-[450px] lg:hidden fixed right-0">        
            <MobileTurnPage turnPage={"back"} setPg={setPg} pg={pg}/>
          </div>
          <div className="mt-[450px] max-lg:hidden fixed right-20">        
            <TurnPage turnPage={"back"} setPg={setPg} pg={pg}/>
          </div>
      </div>
      <div className="tisch w-full h-48 flex flex-col justify-center items-center">
        <p className="font-bold text-xl">made by Abdullah.</p>
        <p>text from Alquran API</p>
      </div>
    </>
    )
}
export default BookCover;