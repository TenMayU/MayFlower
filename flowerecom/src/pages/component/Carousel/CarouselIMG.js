import Image from "next/image"
import { useState } from "react"
import styles from '@/styles/Carousel.module.css'
export default function CarouselIMG(props){
   const product = props.data
   const currentdata = props.current
   const currentcallback = props.funcurrent
   const [Slidetrasition,setSlidetrasition] = useState('fadein')
   /* const [currentindex,setCurrentIndex] = useState(0) */
   console.log(currentdata)

   const style ={
    transform:`translateX(-${currentdata * 100}%)`,
    transition: "transform 0.5 ease-in-out"
   }
   
  const handlenext=()=>{
    const newindex = currentdata + 1
    if(newindex > product.length - 1){
      currentcallback(0)
    }else{   
      currentcallback(newindex)
    }
   }
  const  handleprev=()=>{
    const newindex = currentdata - 1
    if(newindex < 0){   
      currentcallback(product.length - 1)
    }else{ 
      currentcallback(newindex)
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

       <Image src='/nextarrowbtn.png' width={80} height={70} className={styles.buttonnext} onClick={()=>{handlenext()}}></Image>
       <Image src='/prevearrow.png' width={80} height={70} className={styles.buttonprev} onClick={()=>{handleprev()}} ></Image>
        
 
        </>
    )
}