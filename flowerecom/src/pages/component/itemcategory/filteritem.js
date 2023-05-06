import { useEffect, useState } from "react"
import styles from "@/styles/Fillter.module.css"
export default function Fillteritem(){
  const [test, setTest] = useState('0')
  
    return(
        <>
        <div className={styles.mainfillet}>
             {/* <h1>ค้นหา</h1> */}
             <div className={styles.menufillter}>
                  <input type="text" id="name" className={styles.nameinput} placeholder="ชื่อดอกไม้"/>
            {/*       <select id="typeselect" className={styles.typeselect}>
                    <option selected disabled hidden>ประเภทดอกไม้</option>
                    <option>All</option>
                    <option>type</option>
                    <option>type</option>
                  </select>   */}         
                  <button className={styles.btnset} onClick={()=>{setTest(1)}}>ค้นหา</button>
             </div>
        </div>
        </>
    )
}