import styles from'@/styles/Nav.module.css'


export default function Navbar(){
    return(
        <>
        <nav className={styles.nav}>
            <h1 className={styles.navheadtext}>FLOWEECOM</h1>
            <div className={styles.navitem}>
                  <li className={styles.navtext}>test</li>
                  <li className={styles.navtext}>test</li>
                  <li className={styles.navtext}>test</li>
                  <li className={styles.navtext}>test</li>
                
            </div>
        </nav>
        </>
    );
}