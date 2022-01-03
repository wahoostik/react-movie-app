import styled from 'styled-components';

export const Media = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    space-between: auto;
    width: 210px;
    min-height:380px;
    max-height:500px;
    padding: 5px;
    margin: 0 5px 10px 5px;
    background-color: #0e1a33;
    color: rgb(226, 226, 226);
    border-radius: 10px;
    font-family: "Montserrat", sans-serif;
    &:hover {
        background-color: #1565C0;
        color: rgb(226, 226, 226);
    }
    @media (max-width: 550px) {
    margin: 5px;
    width: 160px;
    min-height:300px;
    max-height:360px;
    }
}
`;

export const Poster = styled.img`
    border-radius: 10px;
`;

export const Name = styled.h1`
    width: 100%;
    text-align: center;
    font-size: 17px;
    padding: 10px 0;
    font-weight: 600;
    @media (max-width: 550px) {
    font-size: 15px;
    }
`;

export const Popularity = styled.span`
    text-align: center;
    padding-bottom: 3px;
    padding: 0 2px;
    padding-bottom: 3px;
    font-size: 15px;
    font-weight: 400;
    @media (max-width: 550px) {
    font-size: 12px;
    }
`;