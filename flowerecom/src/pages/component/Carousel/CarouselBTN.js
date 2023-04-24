import styles from '@/styles/Carousel.module.css'

export default function CarouselBTN({data,current,selectdata}){
    const numdata = data
    const secdata = selectdata
    const currentdata = current
    return(
        <>
         <div  className={styles.carouseBTN}>
            {numdata.map((e, index)=>{
                return <div className={styles.carousebtnE +" "+styles[index == currentdata ? "active" : ""]} onClick={()=>{
                    secdata(index)
                }}></div>
            })}
         </div>
        </>
    )
}