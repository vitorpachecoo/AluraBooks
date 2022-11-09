import styled from 'styled-components'

const Opcao = styled.ul `
    display: flex;
`

const OpcaoLi = styled.li`
  min-width: 120px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 40px;
  cursor: pointer;
  font-weight: 550;
`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

// Opções do Header

const Opcoes = () => {
  return (
    <Opcao>
      {textoOpcoes.map((texto) => (
        <OpcaoLi><p>{texto}</p></OpcaoLi>
      ))}
    </Opcao>
  )
}

export default Opcoes