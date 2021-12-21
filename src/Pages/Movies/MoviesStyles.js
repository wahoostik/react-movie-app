import styled from 'styled-components';

export const Movies = styled.div`
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
    margin-top: 20px;
    border-radius: 50px;
    color: white;
    @media (max-width: 800px) {
    font-size: 4vw;
    }
`;