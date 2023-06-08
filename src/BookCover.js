import { useState } from "react";
import Book from "./Book";
import TurnPage from "./TurnPage";
const BookCover = () => {
    const [pg, setPg] = useState(-1);

    // const chooseWhichPge = (event) => {
    //   if (event.target.value <= -1) {
    //     <Cover />
    //   }
    //   else {
    //     return (
    //       <Book pg={pg} />
    //     )
    //   }
    // }
    
    return (
    <div className="tisch h-full flex justify-center relative">
        <div className="mt-[450px] max-xl:hidden">        
          <TurnPage turnPage={"turn"} setPg={setPg} pg={pg}/>
        </div>
        <div className="book bg-green-900 w-1/2 max-lg:w-full p-5 rounded-xl shadow-lg border-4 border-green-950">
          
          <Book pg={pg} setPg={setPg}/>
          
        </div>
        <div className="mt-[450px] max-xl:hidden">        
          <TurnPage turnPage={"back"} setPg={setPg} pg={pg}/>
        </div>
    </div>
    )
}
export default BookCover;