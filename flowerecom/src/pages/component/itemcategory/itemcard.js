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
flower
        </div>
        <div className={styles.itemcard_price}>
     179b
        </div>
      </div>
      </>
    )
}