import styles from "./mediacoverage.module.css"
import Image from "next/image"

interface mediaPropType{
  imgSrc: string,
  title: string,
  link: string
}

export default function MediaBox(props: mediaPropType) {
  return (
    <div className={styles.mediaBox}>
      <Image width={500} height={250} className={styles.mediaBoxImg} src={props.imgSrc} alt="Image of media coverage"  />
      <div className={styles.mediaBoxTitle}>{props.title}</div>
      <a target="_blank" href={props.link} className={styles.mediaBoxLink}>View Media</a>
    </div>
  )
}
