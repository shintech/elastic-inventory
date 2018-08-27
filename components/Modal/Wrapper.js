/*   /components/Modal/Wrapper.js
*/
import styled from 'styled-components'

const Wrapper = styled.div`
  position: fixed;
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto; 
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
  
  .modal {
    display: grid;
    grid-gap: 2px;      
    grid-template-columns: 2ch auto 2ch;
    grid-template-rows: auto auto;

    margin: 7% auto;
    width: 80%;
    overflow: hidden;
    
    background-color: lavender;
    border: 1px solid black;
    border-radius: 5px;
  }
  
  .modal-body {
    grid-row: 2;
    grid-column: 2;
  }
  
  .modal-header {
    grid-row: 1;
    grid-column: span 3;

    display: flex;
    flex-direction: inline;
    align-items: center;
    justify-content: center;

    background-color: orange;
    border-bottom: 1px dotted black;
    color: white;
  }
  
  .modal-header .title {
    padding: 5px 1ch;
    margin: 0;
  }
  
  .modal-body button {
    background: orange;
    border: none;
    border-radius: 5px;
    padding: 10px;
    min-width: 100px;
    margin-bottom: 2ch;
    color: #fff;
  }
  
  .modal-body button.submit {
    float: right;
    background: red;
  }
  
  .modal-body button.edit {
    float: right;
    background: green;
  }
  
  .close {
    margin-left: auto;
    padding: 3px 10px;
    font-size: 19px;
  }
  
  .close:hover, button:hover,
  .close:focus, button:focus {
    cursor: pointer;
    color: black;
    text-decoration: none;
    cursor: pointer;     
  }
`

export default Wrapper
