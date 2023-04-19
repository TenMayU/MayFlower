import Image from "next/image"
import { useState } from "react"

export default function CarouselIMG(props){
   const product = props.data
   const currentdata = props.current
   const currentcallback = props.funcurrent
   const [Slidetrasition,setSlidetrasition] = useState('fadein')
   const [currentindex,setCurrentIndex] = useState('0')
   
   
   


    return(
        <>
        {product.map((e,index)=>{
          return <Image src={e.image} width={1000} height={1000} priority alt={e.name} key={index}></Image>
        })}
          
        </>
    )
}