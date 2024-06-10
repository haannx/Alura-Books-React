import styled from "styled-components"

const Card = styled.div`
    margin-top: 20px;
    align-items: center;
    background-color: #fff;
    box-shadow: 0px 4px 4px rgba(o, 0, 0, 02.25);
    border-radius: 15px;
    display: flex;
    margin: 0 auto;
    max-width: 600px;
    padding: 25px 20px;
    justify-content: center;
    width:100%
`
const Button = styled.button`
    background-color: #389cc4;
    color: #fff;
    padding: 10px 0px;
    font-size: 16px;
    font-weight: 900;
    display: block;
    text-align: center;
    width: 150px;
    border-radius: 15px;
    border: 2px solid transparent;

    &:hover {
        color: blue;
        border-color: blue;
    }
`
const Descricao = styled.p`
    max-width: 300px;
`
const Subtitulo = styled.h4`
    color: #002f52;
    font-sizer: 14px;
    font-weight: bold;
    margin: 15px 0;
`
const ImgLivro = styled.img`
    width: 150px;
`
function CardRecomenda({titulo,subtitulo,descricao,img}) {
    return(
        <Card>
            <div>
                <h3>{titulo}</h3>
                <Subtitulo>{subtitulo}</Subtitulo>
                <Descricao>{descricao}</Descricao>
            </div>
            <div>
                <ImgLivro src={img}/>
                <Button>Saiba Mais</Button>
            </div>
        </Card>
    )
}

export default CardRecomenda