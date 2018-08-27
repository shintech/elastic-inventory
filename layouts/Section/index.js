/*  /layouts/Section/index.js
*/
import PropTypes from 'prop-types'
import Wrapper from './Wrapper'

const Section = ({ title, children, modal = () => {} }) =>
  <Wrapper onClick={() => { modal({ title, children }) }}>
    <h2>{ title }</h2>
    {children}
  </Wrapper>

/* -------------------------------------------------------------------------------- */

Section.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array,
  links: PropTypes.array,
  references: PropTypes.array,
  text: PropTypes.string
}

/* -------------------------------------------------------------------------------- */

export default Section
