/*  /components/Loading/Wrapper.js
*/
import styled from 'styled-components'

const Wrapper = styled.div`
  .heading {
    color: steelblue;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 100%);
    animation: blinker 1s linear infinite;    
  }
  
  .spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .spinner:after {
    content: " ";
    display: block;
    width: 56px;
    height: 56px;
    margin: 1px;
    border-radius: 58%;
    border: 2px solid #fff;
    border-color: purple transparent purple transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }  
`

export default Wrapper
