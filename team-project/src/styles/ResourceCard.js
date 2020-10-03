import {Card} from "react-bootstrap";
import styled from "styled-components";


export const StyledCard = styled(Card)`
   width: 400px;
// height: 10vh;
   margin:0.5rem 0.5rem;
//border: 2px solid lightgray;
   background-color: white;
   color: black;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
   border-radius: 5px;
   &:hover {
    box-shadow: 0 3.5px 7px rgba(0,0,0,0.25), 0 2.5px 2.5px rgba(0,0,0,0.22);
    background-color: rgb(241, 241, 241);
   }
   `

   export const StyledCardHeader = styled(Card.Header)`
    // background-image: linear-gradient(135deg, rgb(255, 44, 167) 0%, rgb(230, 173, 201) 100%);
    padding: 5px 10px;
    color: white;
    text-align: right;
    margin:0px;
    background-color: #1a73e8;
    // background-color: rgb(193, 218, 255);
   `

   
   export const StyledCardBody = styled(Card.Body)`
// border-left: 5px solid blue;
   padding:5px;
   padding-top:20px;
   text-align:left;
   `

   export const StyledCardFooter = styled(Card.Footer)`
   padding:0px;
display: grid;
grid-template-columns: repeat(4, 1fr);
justify-items: center;
   `