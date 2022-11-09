import { livros } from "./dadosUltimosLancamentos"
import { Titulo } from "../Titulo"
import './Lancamentos.css'
import CardRecomenda from "../CardRecomenda"
import imagemLivro from '../../images/livros4.jpg'
import imagemLivro2 from '../../images/livros5.jpg'

const UltimosLancamentos = () => {
  return (
    <section className="sec-Lancamentos">
      <Titulo 
      tamanhoFonte="36px"
      alinhamento="Center"
      >ÚLTIMOS LANÇAMENTOS</Titulo>
      <div className="divisao-lancamentos">
        {livros.map(livro => (
          <img className="imagens-lancamentos" src={livro.src} />
        ))}
      </div>
      <CardRecomenda
      titulo={"Talvez você se interesse por..."}
      subtitulo={"Um de nós está mentindo - Karen M. McManus"}
      img={imagemLivro}
      />
      <CardRecomenda
      titulo={"Talvez você se interesse por..."}
      subtitulo={"Com Sangue - Stephen King"}
      img={imagemLivro2}
      />
    </section>
  )
}

export default UltimosLancamentos