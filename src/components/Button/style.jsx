import styled from 'styled-components'

const ButtonContainer = styled.button`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px outset #CACACA;
    background-color: #F9F9F9;
    color:  #373A40;
    font-size: 24px;
    font-weight: 700;
    border-radius: 10%;

    &:active {
        border-style: inset;
        opacity: 0.8;
    }
`
export default ButtonContainer