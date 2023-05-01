import styles from "@/styles/item.module.css"
import Itemcard from "./itemcard"
export default function Listitem(){

    return(
        <>
        <div className={styles.Gridlist}>
            <Itemcard/>
        </div>
        </>
    )
}