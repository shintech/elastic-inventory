/*  /layouts/Section/Wrapper.js
*/
import styled from 'styled-components'

const Wrapper = styled.form`
border: 1px solid black;

.form-group {
    margin: 1ch;

  input {
    padding: 1ch;
    border-radius: 0;
  }
}

form-select {
  display: inline;
}
`

export default Wrapper
