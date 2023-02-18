import styles from "styled-components";

const Input = styles.input`
height: 25px;
margin-bottom: 10px;
padding:5px;
display:flex:
`
const NavContainer = styles.div`
backgrond-color:red;
` 

export default function SearchBar(props) {
   return (
      <NavContainer>
         <Input type='search' />
         <button onClick={props.onSearch }>Agregar</button>
      </NavContainer>
   );
}
