import { livros } from "./dadosUltimosLancamentos"
import styled from "styled-components"
import CardRecomenda from "../CardRecomenda"
import imagemLivro from '../../imagens/livro2.png'

const ContainerLancamentos = styled.section`
    padding-bottom: 70px;
    background-color: #EBECEE;
    display: flex;
    flex-direction: column;
    margin-top: 500px;
`

const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    color: EB9B00;
    font-size: 24px;
    text-align: center;
    margin: 0;
`
const NovosLancamentos = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`
const Imagem = styled.img`
    padding: 10px;
    padding-bottom: 2px;
    border-radius: 15px;
    border: 3px solid transparent;

    &:hover {
    color: black;
    border-color: black;
}
`


function UltimosLancamentos() {
    return (
        <ContainerLancamentos>
            <Titulo>ULTIMOS LANÇAMENTOS</Titulo>
            <NovosLancamentos>
                {livros.map(livro => (
                    <Imagem src={livro.src}/>
                ))}
            </NovosLancamentos>
            <br></br>
            <CardRecomenda
                titulo='Talvez você curta: '
                subtitulo='Angular 11'
                descricao='Construindo um App com a Plataforma GO!'
                img={imagemLivro}
            />
        </ContainerLancamentos>
    )
}

export default UltimosLancamentos