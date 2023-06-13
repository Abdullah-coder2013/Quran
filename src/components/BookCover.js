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
    const minSwipeDistance = 50 

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
        if (isRightSwipe && pg !== 603) {
          setPg(pg + 1)
        }
      }
      else {
        return
      }
      
    }
    

    return (
    <>
      <div className="tisch h-full flex justify-center relative">
          <div className="mobile max-lg:hidden fixed w-1 left-20">        
            <TurnPage turnPage={"turn"} setPg={setPg} pg={pg}/>
          </div>
          {/* <div className="mobile lg:hidden fixed w-1 left-0">        
            <MobileTurnPage turnPage={"turn"} setPg={setPg} pg={pg}/>
          </div> */}
          <div className="book bg-green-900 w-1/2 max-lg:w-full p-5 rounded-xl shadow-lg border-4 border-green-950" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
            
            <Book pg={pg} setPg={setPg} localStorage={useLocalStorage}/>
          
          </div>
          {/* <div className="mobile lg:hidden fixed right-0">        
            <MobileTurnPage turnPage={"back"} setPg={setPg} pg={pg}/>
          </div> */}
          <div className="mobile max-lg:hidden fixed right-20">        
            <TurnPage turnPage={"back"} setPg={setPg} pg={pg}/>
          </div>
      </div>
      <div className="tisch w-full halfHeight flex justify-center items-center">
          {/* <div className="w-1/3 pl-4">
            <h1 className="text-3xl leading-loose" >Contact</h1>
            <ul>
                <li>Email: <a href="mailto:abdullah@munim.net"  className="border-2 border-slate-800 rounded-lg bg-slate-700 text-slate-200 p-1 w-full hover:bg-slate-300 hover:text-slate-800 hover:-translate-y-1 hover:scale-110 transition ease-in-out">abdullah@munim.net</a></li>
            </ul>
          </div>
          <div className="w-1/3 leading-loose pl-4">
            <h1 className="text-3xl">Profile</h1>
            <br/>
            <a href="https://github.com/abdullah-coder2013"  className="border-2 border-slate-800 rounded-lg bg-slate-700 text-slate-200 p-1 w-full hover:bg-slate-300 hover:text-slate-800 hover:-translate-y-1 hover:scale-110 transition ease-in-out">My Github</a>
            <br/>
            <br/>
            <a href="https://www.youtube.com/channel/UCZFemMnfw28mvMRLTOFOUUg"  className="border-2 border-slate-800 rounded-lg bg-slate-700 text-slate-200 p-1 w-full hover:bg-slate-300 hover:text-slate-800 hover:-translate-y-1 hover:scale-110 transition ease-in-out">My Youtube Channel</a>        
          </div>
          <div className="w-1/3 leading-loose pl-4">
            <h1 className="text-3xl">Source <code>Code</code></h1>
            <a href="https://github.com/abdullah-coder2013/Quran" className="border-2 border-slate-800 rounded-lg bg-slate-700 text-slate-200 p-1 w-full hover:bg-slate-300 hover:text-slate-800 hover:-translate-y-1 hover:scale-110 transition ease-in-out">GitHub</a>          
          </div> */}
      </div>
    </>
    )
}
export default BookCover;