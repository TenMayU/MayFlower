import styles from "@/styles/item.module.css"
import Image from "next/image"
import { useRef, useState } from "react"
export default function Itemcard({id}){
const [test,settest] = useState('0')
const reff = useRef('')
    return(
      <>
      <div className={styles.itemcard}>
        <div className={styles.itemcard_image}>
             <Image></Image>
        </div>
        <div className={styles.itemcard_name}>
          <input ref={reff} type="text"></input>
          <button onClick={()=>{
            settest(reff.current.value)
          }} >test</button>
 <p>{test}</p>
        </div>
        <div className={styles.itemcard_price}>       
        <h1>179B</h1>
        </div>
        <div className={styles.itemcard_tag}>
         <p>#tag</p>
         <p>#tag</p>
         <p>#tag</p>
        </div>
      </div>
      </>
    )
}