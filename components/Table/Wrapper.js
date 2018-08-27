/*   /components/Nav/Wrapper.js
*/
import styled from 'styled-components'

const Wrapper = styled.table`
border: 1px solid black;
border-collapse: collapse;
width: 100%;
margin-top: 1ch;
td, th {
  border: 1px solid black;
  text-align: center;
}

thead tr {
  background-color: green;
  color: white;
}

tbody tr:nth-child(2n + 1) {
  background-color: lightgreen;
}
`

export default Wrapper
