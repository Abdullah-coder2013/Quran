import { useState } from "react";
import Book from "./Book";
import TurnPage from "./TurnPage";
import Cover from "./Cover";
const BookCover = () => {
    const [pg, setPg] = useState(0);

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
        <div className="mt-[450px]">        
          <TurnPage turnPage={"turn"} setPg={setPg} pg={pg}/>
        </div>
        <div className="book bg-orange-900 w-1/2 p-5 rounded-xl border-4 border-amber-950">
          
          <Book pg={pg} />
          
        </div>
        <div className="mt-[450px]">        
          <TurnPage turnPage={"back"} setPg={setPg} pg={pg}/>
        </div>
    </div>
    )
}
export default BookCover;