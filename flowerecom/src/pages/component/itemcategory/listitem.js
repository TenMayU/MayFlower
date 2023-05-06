import styles from "@/styles/item.module.css"
import Itemcard from "./itemcard"
import { useState } from "react"
import { Chadata } from '@/pages/Data/data'
export default function Listitem(){
  const data = Chadata
  const [currentpage, setCurrentpage] = useState(1)
  const pagelengnt = 10
  const lastindexdisplay = currentpage * pagelengnt
  const firstindexdisplay = lastindexdisplay - pagelengnt
  const index = data.slice(firstindexdisplay, lastindexdisplay)
  const indexlimit = Math.ceil(data.length/pagelengnt)

  const btnnum = [...Array(indexlimit+1).keys()].slice(1)
  const btnstartlimit = currentpage - 3
  const btnendlimit = btnstartlimit + 7
  const btnstart = btnstartlimit>=indexlimit - 7?indexlimit- 7:btnstartlimit
  const btnend = btnstartlimit<0?7:btnendlimit
   
    return(
        <>
        <div className={styles.listitem}> 
          <div className={styles.Gridlist}>
         {index.map((e)=>{
            return(
                <Itemcard id={e}></Itemcard>
            )
         })}
        </div>
        <ul className={styles.ulflex}>
            <div className={styles.btnlist} onClick={()=>{prevbtn(currentpage-1)} }><p>PREV</p></div>
           {btnnum.map((e, index)=>{
        if (e > btnstart && e <= btnend){
           return <i className={`${styles.btnnum} ${e==currentpage?styles.active:""}`} onClick={()=>{next(e)}}>{e}</i>
        }
          
           })} 
           <div className={styles.btnlist} onClick={()=>{nextbtn(currentpage+1)}} ><p>NEXT</p></div>
        </ul>   
     </div>
      
        </>
    )

    function next(e){
        setCurrentpage(e)
    }
   
    function nextbtn(e){  
       if(e > btnnum.length){
        setCurrentpage(btnnum.length)
        }else{
        setCurrentpage(e)
        console.log("check")
    }
  }
    function prevbtn(e){

       if(e < 1){
        setCurrentpage(1)
        }else{
        setCurrentpage(e)
    }
  }
}

