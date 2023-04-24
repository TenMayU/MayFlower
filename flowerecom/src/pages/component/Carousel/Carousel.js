import styles from '@/styles/Carousel.module.css'
import CarouselIMG from './CarouselIMG'
import { Chadata } from '@/pages/Data/data'
import { useState } from 'react'
import CarouselBTN from './CarouselBTN'

export default function Carousel(){   
  const [currentImage,setCurrentImage] = useState([0])
  console.log("imrender")
    return(
        <>
           <div>
              <CarouselIMG data={Chadata} current={currentImage} funcurrent={setCurrentImage} />
            </div>
           <div>
              <CarouselBTN  data={Chadata} current={currentImage} selectdata={setCurrentImage}/>
           </div>
         </>
    )
}