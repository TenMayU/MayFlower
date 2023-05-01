import styles from "@/styles/Fillter.module.css"
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