import styled from 'styled-components';

export const Media = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    width: 240px;
    padding: 5px;
    margin: 5px 0;
    background-color: #0e1a33;
    color: rgb(226, 226, 226);
    border-radius: 10px;
    position: relative;
    font-family: "Montserrat", sans-serif;
    margin: 5px;
    &:hover {
        background-color: #1565C0;
        color: rgb(226, 226, 226);
    }
}
`;

export const Poster = styled.img`
    border-radius: 10px;
`;

export const Title = styled.h1`
    width: 100%;
    text-align: center;
    font-size: 17px;
    padding: 8px 0;
    font-weight: 600;
`;

export const Subtitle = styled.span`
    display: flex;
    justify-content: space-between;
    padding-bottom: 3px;
    padding: 0 2px;
    padding-bottom: 3px;
    font-size: 15px;
    font-weight: 300;
`;