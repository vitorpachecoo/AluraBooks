import Icones from '../Icones'
import Logo from '../Logo'
import Opcoes from '../Opcoes'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
`

const Header = () => {
  return (
    <HeaderContainer>
      <Logo/>
      <Opcoes/>
      <Icones/>
    </HeaderContainer>
  )
}

export default Header