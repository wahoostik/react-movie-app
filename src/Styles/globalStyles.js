import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: auto;
    align-items: center;
`;

export const HomeTitle = styled.div`
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    font-family: "Montserrat", sans-serif;
    font-size: 2.25vw;
    padding: 25px;
    margin: 20px 0 10px 0;
    border-radius: 50px;
    color: white;
    @media (max-width: 800px) {
    font-size: 4vw;
    }
`;