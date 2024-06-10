import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import IconesHeader from '../IconesHeader'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const AppHeader = styled.header`
    background-color: #339fc5;
    display: flex;
    text-align: center;
    justify-content: center;
    max-width: 100vw;
}
`


function Header() {
    return(
        <AppHeader>
            <Link to='/'>
                <Logo/>
            </Link>
            <OpcoesHeader/>
            <IconesHeader/>
        </AppHeader>
    )
}

export default Header