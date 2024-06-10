import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const AppLogo = styled.div`
    display: flex;
    font-size: 23px;
    color: #fff;
`
const LogoImg = styled.img`
    margin-right: 10px;    
`

function Logo() {
    return (
        <AppLogo>
            <LogoImg src={logo} alt='logo'/>
        <p><strong>AluraBooks</strong></p>
        </AppLogo>
    )
}

export default Logo