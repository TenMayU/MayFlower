import styles from '@/styles/Carousel.module.css'

export default function CarouselBTN({data,current,select}){
    const numdata = data
    const secdata = select
    const currentdata = current
    return(
        <>
         <div  className={styles.carouseBTN}>
            {numdata.map((e, index)=>{
                return <div className={styles.carousebtnE +" "+styles[index == currentdata ? "active" : ""]}></div>
            })}
         </div>
        </>
    )
}