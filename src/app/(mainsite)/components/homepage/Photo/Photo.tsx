import styles from './photo.module.css';

export default function Photo(){
return (
 <div className={styles.photo}>
        <div className="center">
            <img src="./img/group.webp" alt="group photo of the family" />
        </div>
 </div>
)};