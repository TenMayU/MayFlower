import styles from "@/styles/item.module.css"
import Image from "next/image"
export default function Itemcard({id}){

    return(
      <>
      <div className={styles.itemcard}>
        <div className={styles.itemcard_image}>
             <Image></Image>
        </div>
        <div className={styles.itemcard_name}>
<h1>FLOWER</h1>
        </div>
        <div className={styles.itemcard_price}>       
        <h1>179B</h1>
        </div>
      </div>
      </>
    )
}