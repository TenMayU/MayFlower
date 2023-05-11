import Image from "next/image"
import { useState } from "react"
import styles from '@/styles/Carousel.module.css'
export default function CarouselIMG(props){
   const product = props.data
   const currentdata = props.current
   const currentcallback = props.funcurrent
   const [Slidetrasition,setSlidetrasition] = useState('fadein')
   /* const [currentindex,setCurrentIndex] = useState(0) */


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
        <div className={styles.carouselE} style={style}>
        {product.map((e,index)=>(
          <img src={e.image} alt={e.name} className={styles.caimage}></img>
        )
        )}
        </div>
        </div>
    <div className={styles.buttonnext} >
       <Image src='/nextarrowbtn.png' fill={true} sizes="(max-width:768px) 50vw, 30vw" onClick={()=>{handlenext()}} alt="nextclick" ></Image>
    </div>
    <div className={styles.buttonprev}>
       <Image src='/prevearrow.png'  fill={true} sizes="(max-width:768px) 50vw, 30vw" onClick={()=>{handleprev()}} alt="prevclick" ></Image>
      </div> 
      
        
 
        </>
    )
}