import { useEffect, useState } from 'react';
import styled from 'styled-components'
import { deletaFavorito, getFavoritos } from '../servicos/favoritos';
import livroImg from '../imagens/livro.png'

const AppContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(90deg,#1a4e75 35%, #37607e 60%, #2179b8 100%);
  }
`
const ResultadoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const EnglobaDiv = styled.div`
  padding: 1px;
`
const Resultado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  cursor: pointer;
  text-align: center;
  padding: 0 100px;
  p {
    width: 200px;
    color: #FFF;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`
const Titulo = styled.h2`
   color: #FFF;
   font-size: 36px;
   text-align: center;
   width: 100%;
   padding-top: 35px
`

function Favoritos() {
  const [favoritos, setFavoritos] = useState([])

  async function fetchFavoritos() {
    const favoritosDaAPI = await getFavoritos()
    setFavoritos(favoritosDaAPI)
  }

  async function deletarFavorito(id) {
    await deletaFavorito(id)
    await fetchFavoritos()
    alert(`Livro de Id: ${id} deletado`)
  }

  useEffect(() => {
    fetchFavoritos()
  }, [])

  return (
      <AppContainer>
        <EnglobaDiv>
          <Titulo>Favoritos</Titulo>
            <ResultadoContainer>
            {
              favoritos.length !== 0 ? favoritos.map(favorito => (
                <Resultado onClick={() => deletarFavorito(favorito.id)}>
                  <p>{favorito.nome}</p>
                  <img src={livroImg}/>
                </Resultado>
              )) : null
            }
            </ResultadoContainer>
        </EnglobaDiv>
      </AppContainer>
  );
}

export default Favoritos
