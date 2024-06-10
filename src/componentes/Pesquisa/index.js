import Input from '../Input'
import styled from 'styled-components'
import {useEffect, useState} from  'react'
import { getLivros } from '../../servicos/livros'
import { postFavorito } from '../../servicos/favoritos'
import livroImg from '../../imagens/livro.png'

const PesquisaContainer = styled.section`
    text-align: center;
    justify-content: center;
    padding: 20px;
`
const Subtitulo = styled.h3`
    color: #fff;
`
const Titulo = styled.h2`
    color: #fff;
`
const Resultado = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    cursor: pointer;
    border-radius: 15px;
    width: 250px;
    background-color: #389cc4;
    border: 2px solid #225e76;

    p {
        width: 100px;
        display: flex;
        margin: 0 10px;
    }
    img {
        width: 70px;
        dysplay: flex;
        padding:  5px;
    }
    &:hover {
        background-color: #2d7d9d;
        border-color: white; 
    }
`

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    const [livros, setLivros] = useState([])

    useEffect(() => {
        fetchLivros()
    }, [])

    async function fetchLivros() {
        const livrosDaAPI = await getLivros()
        setLivros(livrosDaAPI)
    }

    async function insertFavorito(id) {
        await postFavorito(id)
        alert(`Livro de id: ${id} inserido!`)
    }

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input 
            placeholder="Escreva sua próxima leitura..."
            onBlur={evento => {
                const textoDigitado = evento.target.value
                const resultadoPesquisa = livros.filter( livros => livros.nome.includes(textoDigitado))
                setLivrosPesquisados(resultadoPesquisa)
            }}
            />
            { livrosPesquisados.map( livro => (
                <Resultado onClick={() => insertFavorito(livro.id)}>
                    <p>{livro.nome}</p>
                    <img src={livroImg}/>
                </Resultado>
            ))}
        </PesquisaContainer>
    )
}

export default Pesquisa