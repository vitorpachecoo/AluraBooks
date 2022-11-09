import { livros } from "./dadosUltimosLancamentos"
import { Titulo } from "../Titulo"
import './Lancamentos.css'
import CardRecomenda from "../CardRecomenda"
import imagemLivro from '../../images/livros6.jpg'

const UltimosLancamentos = () => {
  return (
    <section className="sec-Lancamentos">
      <Titulo 
      tamanhoFonte="36px"
      >ÚLTIMOS LANÇAMENTOS</Titulo>
      <div className="divisao-lancamentos">
        {livros.map(livro => (
          <img className="imagens-lancamentos" src={livro.src} />
        ))}
      </div>
      <CardRecomenda
      titulo={"Talvez você se interesse por..."}
      subtitulo={"Com Sangue - Stephen King"}
      descricao={"Fazendo uma integração com a plataforma google"}
      img={imagemLivro}
      />
    </section>
  )
}

export default UltimosLancamentos