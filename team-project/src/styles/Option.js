import {Button} from "react-bootstrap";
import styled from "styled-components";

/* #option-button{
    width: 80%;
    margin:0.5rem 0rem;
} */

export const StyledButton = styled(Button)`
   width: 80%;
   margin:0.5rem 0rem;
   background-color: white;
   color: black;
   border: 2px solid black;
   box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
   border-radius: 5px; /* 5px rounded corners */

   &:hover {
    background-color: palevioletred;
    border: 2px solid black;
    color: white;
    /* opacity: 0.95; */
    //  box-shadow: 0 3.5px 7px rgba(0,0,0,0.25), 0 2.5px 2.5px rgba(0,0,0,0.22);
   }

    &:focus {
      background-color: palevioletred;
      border: 2px solid black;
      color: white;
      /* opacity: 0.95; */
      //  box-shadow: 0 3.5px 7px rgba(0,0,0,0.25), 0 2.5px 2.5px rgba(0,0,0,0.22);
    }

      &:visited {
        background-color: palevioletred;
        border: 2px solid black;
        color: white;
        /* opacity: 0.95; */
        //  box-shadow: 0 3.5px 7px rgba(0,0,0,0.25), 0 2.5px 2.5px rgba(0,0,0,0.22);
  }
`;