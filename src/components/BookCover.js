import { useState, useEffect } from "react";
import Book from "./Book";
import TurnPage from "./TurnPage";
const BookCover = () => {
    const [pg, setPg] = useState(-2);
    
    const getStorageData = (keyName, defaultValue) =>{
      const savedItem = localStorage.getItem(keyName);
    const parsedItem = JSON.parse(savedItem);
    return parsedItem || defaultValue;
    }
     
    const useLocalStorage = (keyName, initialValue) => {
      const [value, setValue] = useState(() => {
        return getStorageData(keyName, initialValue);
      });
       
    useEffect(() => {
        localStorage.setItem(keyName, JSON.stringify(value));
      }, [keyName, value]);
     
    return [value, setValue];
    }

    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null)

    // the required distance between touchStart and touchEnd to be detected as a swipe
    const minSwipeDistance = 30 

    const onTouchStart = (e) => {
      setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
      setTouchStart(e.targetTouches[0].clientX)
    }

    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

    const onTouchEnd = () => {
      if (!touchStart || !touchEnd) return
      const distance = touchStart - touchEnd
      const isLeftSwipe = distance > minSwipeDistance
      const isRightSwipe = distance < -minSwipeDistance
      if (pg >= -2 && pg <= 605){
        if (isLeftSwipe && pg !== -2) {
          setPg(pg - 1)
        }
        if (isRightSwipe && pg !== 604) {
          setPg(pg + 1)
        }
      }
      else {
        return
      }
      
    }
    

    return (
    
      <div className="tisch h-full flex justify-center relative p-5 max-lg:p-0">
          <div className="mobile max-lg:hidden fixed w-1 left-20">        
            <TurnPage turnPage={"turn"} setPg={setPg} pg={pg}/>
          </div>
          <div className="book bg-green-900 h-screen w-1/2 max-lg:w-full p-5 rounded-xl max-lg:rounded-none shadow-lg border-4 border-green-950" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
            
            <Book pg={pg} setPg={setPg} localStorage={useLocalStorage}/>
          
          </div>
          <div className="mobile max-lg:hidden fixed right-20">        
            <TurnPage turnPage={"back"} setPg={setPg} pg={pg}/>
          </div>
      </div>
    )
}
export default BookCover;