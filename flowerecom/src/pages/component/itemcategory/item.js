import Fillteritem from "./filteritem";
import Listitem from "./listitem";

export default function Item(){
    return(
        <>
           <div className="fileritem">
            <Fillteritem/>
           </div>
           <div className="listitem">
           <Listitem/>
           </div>
        </>
    )
}