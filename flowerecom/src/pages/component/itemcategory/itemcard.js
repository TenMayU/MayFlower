import styles from "@/styles/item.module.css"
import Image from "next/image"
import { useRef, useState } from "react"
export default function Itemcard({id}){
    return(
      <>
      <div className={styles.itemcard}>
        <div className={styles.itemcard_image}>
             <Image src={id.image} width={300} height={300} ></Image>
        </div>
        <div className={styles.itemcard_name}>     
          <p>{id.name}</p>
        </div>
        <div className={styles.itemcard_price}>       
        <h1>179B</h1>
        </div>
        <div className={styles.itemcard_tag}>
         <p>#{id.name}</p>
        </div>
      </div>
      </>
    )
}