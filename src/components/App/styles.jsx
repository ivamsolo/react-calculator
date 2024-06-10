import styled from 'styled-components'

export const Container = (styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: start;

    @media (min-height: 740px) {
        align-items: center;
    }
`)

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    max-width: 540px;
    max-height: 740px;
    background-color: #F3F3F3;
    padding-top: 20px;
    border-radius: 15px;   
`

export const ButtonsPad = styled.div`
    width: 90%;
    height: 80%;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 10px;
`

export const Row = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`