import styles from 'styled-components';


const DivCard = styles.div`
   display: grid;
   // grid-template-columns: auto;
   justify-self: center;
   justify-items:center;
   background-color:rgb(119, 194, 255);
   border: solid 2px;
   border-radius: 15px;   
   margin:0px;
   padding-bottom:10px;
   padding:0px;
   margin-bottom:20px;
   width: 250px;
   height: 400px;

   position:sticky;
   top:0;
   // z-index: 10;
   `


const BtnClose = styles.button`
   align-self: center;
   justify-self: end;
   height:25px;
   width:25px;
   margin-top:10px;
   margin-right:10px;
   padding:0;
   // border:none
   border-radius:5px;
   &:hover{
      
      background-color: rgb(129, 150, 255);
   } 
   `
const ImgCard = styles.img`   
   
   height 90%;
   width:90%;   
   border-radius:15px;
   // z-index: 10;
   `

const H2Card = styles.h2`
line-height: 0.5;
margin:0px;
padding:0px;
`

// const ImgContainer = styles.div`
// width: 100%;
// height: 100%;
// `

export default function Card(props) {
   return (
      <DivCard>
         <BtnClose id={`btn${props.name}`} onClick={props.onClose}>X</BtnClose>
         <H2Card>{props.name}</H2Card>
         <H2Card>{props.species}</H2Card>
         <H2Card>{props.gender}</H2Card>
         <ImgCard src={props.image} alt="" />

      </DivCard>
   );
}
