import styles from'@/styles/Nav.module.css'
import Image from 'next/image';


export default function Navbar(){
    return(
        <>
        <nav className={styles.nav}>
            <h1 className={styles.navheadtext}>FLOWEECOM</h1>
            <div className={styles.navmenu} >
            <div className={styles.navitem}>
                  <li className={styles.navtext}>test</li>             
            </div>
               <div className={styles.navprofile}>
                  <Image src="/icon.png" width={40} height={40} className={styles.imageprofile}></Image>
              </div>
            </div>      
        </nav>
        </>
    );
}