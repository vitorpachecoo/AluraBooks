import logo from '../../images/logo.svg'
import styled from 'styled-components'

const LogoEstilo = styled.div`
  display: flex;
  font-size: 32px;
`

const LogoImagem = styled.img `
  margin: 25px;
`

const Logo = () => {
  return (
    <LogoEstilo>
      <LogoImagem 
        src={logo} 
        alt="logo"/>
      <p><strong>Alura</strong>Books</p>
    </LogoEstilo>

  )
}

export default Logo