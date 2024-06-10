import styled from 'styled-components'
import Pesquisa from '../componentes/Pesquisa'
import UltimosLancamentos from '../componentes/UltimosLancamentos';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#1a4e75 35%, #37607e 60%, #2179b8 100%);
  }
`

function Home() {
  return (
      <AppContainer>
        <Pesquisa/>
        <UltimosLancamentos/>
      </AppContainer>
  );
}

export default Home
