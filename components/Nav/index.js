/*   /components/Nav/index.js
*/
import Link from 'next/link'
import Wrapper from './Wrapper'

function toggleResponsive () {
  var x = document.getElementById('topNav')

  if (x.classList.contains('responsive')) {
    x.classList.remove('responsive')
  } else {
    x.classList.add('responsive')
  }
}

const Nav = ({ pathname }) =>
  <Wrapper>
    <nav id='topNav' className='topnav'>
      <Link prefetch href='/'><a className={!pathname || pathname === '/' || pathname === '' ? 'active' : null}>search</a></Link>
      <Link prefetch href='/new'><a className={pathname === '/new' ? 'active sandbox' : 'sandbox'}>create</a></Link>

      <a href='javascript:void(0);' className='icon' onClick={() => { toggleResponsive() }}>
        <i className='fa fa-bars' />
      </a>
    </nav>
  </Wrapper>
export default Nav
