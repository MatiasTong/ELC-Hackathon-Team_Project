import {Card, Button} from "react-bootstrap";
import styled from "styled-components";
   
   export const StyledCardBody = styled.div`
   min-height: 160px;
   font-family: 'Roboto', sans-serif;
   width: 26rem;
   margin:0.5rem 0.5rem;
   background-color: white;
   color: black;
   border-radius: 0px
   box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
   transition: all 0.3s cubic-bezier(.25,.8,.25,1);
   position:relative;
   text-align:left;

   &:hover {
      box-shadow: 0 3.5px 7px rgba(0,0,0,0.25), 0 2.5px 2.5px rgba(0,0,0,0.22);
      // background-color: rgb(241, 241, 241);
     }
   `
