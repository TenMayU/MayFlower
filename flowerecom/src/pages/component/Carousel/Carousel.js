import styles from '@/styles/Carousel.module.css'
import CarouselIMG from './CarouselIMG'
import { Chadata } from '@/pages/Data/data'
import { useState } from 'react'

export default function Carousel(){   
  const [currentImage,setCurrentImage] = useState('0')
    return(
        <>
           <div className={styles.carouselIMG}>
              <CarouselIMG data={Chadata} current={currentImage} funcurrent={setCurrentImage} />
            </div>
           <div className={styles.carouseBTN}>

           </div>
         </>
    )
}