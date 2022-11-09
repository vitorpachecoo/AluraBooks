import perfil from '../../images/perfil.svg'
import sacola from '../../images/sacola.svg'
import styled from 'styled-components'

const Icone = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`

const IconeLi = styled.li`
  margin-right: 40px;
  width: 25px;
  cursor: pointer;
`


const icones = [perfil, sacola]

//Icones do Header

const Icones = () => {
  return (
    <Icone>
      {icones.map((icone) => (
        <IconeLi><img src={icone} alt="icones" /></IconeLi>
      ))}
    </Icone>
  )
}

export default Icones