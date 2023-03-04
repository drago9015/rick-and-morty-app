import Card from '../card/Card';
import styles from './Cards.module.css';

function Cards({ characters, onClose, isRepeated }) {
  return (
    <div>
      <div className={styles.nav_container}>
      </div>
      <br />
      <div className={styles.cards_container}>
        {
          characters.map(({ id, name, species, gender, image }, index) => {
            return <Card
              key={index}
              name={name}
              species={species}
              gender={gender}
              image={image}
              onClose={() => onClose(id)}
              // isRepeated={isRepeated}
            />
          })
        }
      </div>
    </div>
  )
}
export default Cards