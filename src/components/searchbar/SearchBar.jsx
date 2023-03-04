import { useState } from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar({onSearch, info}) {
   const [character,setCharacters]=useState('')

   const handleChange = (e)=>{
      if(e.target.value<1) e.target.value=1
      
      setCharacters(e.target.value)
   }   
   
   const randCharacter = Math.floor(Math.random() * info) + 1

   return (

      <div className={styles.nav_container}>
      <button  onClick={()=>onSearch(character) }>Añadir</button>
         <input className={styles.input}  onChange={handleChange} value={character} type='number' />
         <label className={styles.input} htmlFor="total-chars">Characters:</label>
         <input  className = {styles.input} type="text" value={info} name="total-chars" />
         <button  onClick={()=>onSearch(randCharacter) }>Rand</button>
      </div>
   );
}