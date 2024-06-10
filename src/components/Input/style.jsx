import styled from 'styled-components';

const InputContainer = styled.div`
    height: 20%;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 24px;

    div {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        font-size: 32px;
        padding: 0 10px;
    }

    .expression {
        color: #B4B4B8;
        height: 40%;
    }
    
    .entry {
        color: #1d3557;
        height: 60%;
    }
`

export default InputContainer