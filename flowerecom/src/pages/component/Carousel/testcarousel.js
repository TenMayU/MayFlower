import Image from "next/image"
import styles from '@/styles/Carousel.module.css'
export default function Catest(){
 const currentdata = 1
    return(
        <>
        <div>
        <div style={{transform:`translateX(-${currentdata * 10}%)`,position:'relative',height:'100vw'}}>
    <Image src="/image/CynoFull.png" fill={true} sizes="(max-width: 768px) 100vw" quality={50} className={styles.test} alt="ควย" ></Image>
    </div>
        </div>

     

        </>
    )
}