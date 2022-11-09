import styled from "styled-components"
import ColorButtons from "../Botao"
import { Titulo } from "../Titulo"

const Card = styled.div`
   position: relative;
   background-color: #fff;
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   border-radius: 10px;
   margin: 150px 0px 0px 0px;
   max-width: 600px;
   padding: 10px 25px 10px 25px;
   justify-content: space-around;
   width: 20%;
   text-align: center;
`
const Descricao = styled.p`
   max-width: 300px;
`
const Subtitulo = styled.h4`
   color: #002F52;
   font-size: 18px;
   font-weight: bold;
   margin: 15px 0;
`
const ImgLivro = styled.img`
   width: 250px;
   height: 350px;
   border-radius: 10px 25px 25px 10px;
`
const CardRecomenda = ({ titulo, subtitulo, descricao, img }) => {
   return (
      <Card>
         <div>
            <Titulo
               tamanhoFonte="18px"
               cor="#EB9B00"
               alinhamento="center">
               {titulo}
            </Titulo>
            <Subtitulo>{subtitulo}</Subtitulo>
            <Descricao>{descricao}</Descricao>
            <ImgLivro src={img} />
            <ColorButtons >{ColorButtons}</ColorButtons>
         </div>
      </Card>
   )
}

export default CardRecomenda