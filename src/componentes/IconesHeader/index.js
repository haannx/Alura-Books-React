import styled from 'styled-components'
import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'

const Icones = styled.ul`
    display: flex;
    align-items: center;
`
const Icone = styled.li` //Opcoes
    margin-right: 40px;
    width: 25px;
    cursor: pointer;
    color: #fff; 
`
const icones = [perfil,sacola] //opcoesContato

function IconesHeader () {
    return (
        <Icones>
            {icones.map((icone) => (
            <Icone><img src={icone}></img></Icone>
            ))}
        </Icones>
    )
}

export default IconesHeader 