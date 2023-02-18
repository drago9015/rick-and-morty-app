import styled from "styled-components";
import SearchBar from './SearchBar.jsx'

const NavStyled = styled.nav`
margin:3px;
width:1000px;
display:flex;
flex-direction: row;
justify-content: right;
align-items: end;
background-color:rgb(119, 194, 255);
`


function Nav(){
    return(
        <NavStyled>

        <SearchBar/>
        </NavStyled>
    )
}

export default Nav;