import Card from './Card';
import styles from 'styled-components';

const DivCards = styles.div`
width:100%
height: 500px;
padding:20px;
display: flex;
gap:45px;
flex-direction:row;
border-top: solid 5px;
`


export default function Cards(props) {
	const { characters } = props;

	return (

		<DivCards>
			{
				characters.map(char => {return(
					<Card
						key={char.name}
						name={char.name}
						species={char.species}
						gender={char.gender}
						image={char.image}
						onClose={() => alert('Emulamos que se cierra la card')}
					/>
				)})
			}
		</DivCards>
	);
}
