import Fillteritem from "./filteritem";
import Listitem from "./listitem";
import styles from '@/styles/item.module.css'
export default function Item(){
    return(
        <>
           <div className="fileritem">
            <Fillteritem/>
           </div>
           <div className={styles.listitem}>
           <Listitem/>
           </div>
        </>
    )
}