import Icones from '../Icones'
import Logo from '../Logo'
import Opcoes from '../Opcoes'
import styled from 'styled-components'
import PrimarySearchAppBar, { ResponsiveAppBar } from '../NavBar'

const HeaderContainer = styled.header`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
`

const Header = () => {
  return (
    <ResponsiveAppBar>
      <Logo/>
      <isMenuOpen/>
      <Icones/>
    </ResponsiveAppBar>
  )
}

export default Header