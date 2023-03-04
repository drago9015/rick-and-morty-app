import styles from './Card.module.css';

function Card({name, gender, onClose, species,image,isRepeated }) {
   return (
      <div className={isRepeated? styles.card_container_highlighted: styles.card_container } >
         <button className={styles.btn_close} onClick={onClose}>X</button>
         <h2 className={styles.character_name}>{name}</h2>
         <div className={styles.text_card}>
            <h5> Specie: {species}</h5>
            <h5> Gender: {gender}</h5>
         </div>
         <div className='image_container'>
            <img className={styles.img_card} src={image} alt="" />
         </div>
      </div>
   );
}
export default Card