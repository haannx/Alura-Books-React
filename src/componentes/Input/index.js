import styled from "styled-components"

const Input =  styled.input`
    order: 1px solid #fff;
    background: transparent;
    padding: 10px 60px;
    border-radius: 20px;
    width: 220px;
    color: #fff;
    font-size: 14px;
    margin-bottom: 5px;

    &::placeholder {
        color: fff;
        font-size: 14px;
    }
`

export default Input