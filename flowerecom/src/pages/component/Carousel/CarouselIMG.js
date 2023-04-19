import Image from "next/image"
import { useState } from "react"
import styles from '@/styles/Carousel.module.css'
export default function CarouselIMG(props){
   const product = props.data
/*    const currentdata = props.current
   const currentcallback = props.funcurrent */
   const [Slidetrasition,setSlidetrasition] = useState('fadein')
   const [currentindex,setCurrentIndex] = useState(0)
   
   console.log(currentindex)

   const style ={
    transform:`translateX(-${currentindex * 100}%)`,
    transition: "transform 0.5 ease-in-out"
   }
   
  const handlenext=()=>{
    const newindex = currentindex + 1
    if(newindex > product.length - 1){
      setCurrentIndex(0)
    }else{
      setCurrentIndex(newindex)
    }
   }
  const  handleprev=()=>{
    const newindex = currentindex - 1
    if(newindex < 0){
      setCurrentIndex(product.length - 1)
    }else{
      setCurrentIndex(newindex)
    }
   }


    return(
        <>
        <div className={styles.carouselIMG}>
        <div className={styles.carouselE}  style={style}>
        {product.map((e,index)=>{
          return <Image src={e.image} width={1500} height={1500} priority alt={e.name} key={index} ></Image>
        })}
        </div>
        </div>
       
        <button className={styles.buttonnext} onClick={()=>{handlenext()}} >next</button>
        <button className={styles.buttonprev} onClick={()=>{handleprev()}} >prev</button>
        </>
    )
}