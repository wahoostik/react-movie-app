import styled from 'styled-components';
import { styled as styledMaterial } from '@mui/material/styles';
import { Badge } from '@mui/material';

export const BadgeAverage = styledMaterial(Badge)`
    .MuiBadge-badge {
    z-index: auto;
    min-width: 20px;
    height: 20px;
    padding: 0 6px;
    color: #fff;
    font-weight: 600;
    font-size: 13px;
    line-height: 20px;
    text-align: center;
    border-radius: 10px;
}
`;

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

export const Title = styled.h1`
    width: 100%;
    text-align: center;
    font-size: 17px;
    padding: 8px 0;
    font-weight: 600;
    @media (max-width: 550px) {
    font-size: 15px;
    }
`;

export const Subtitle = styled.span`
    display: flex;
    justify-content: space-between;
    padding-bottom: 3px;
    padding: 0 2px;
    padding-bottom: 3px;
    font-size: 15px;
    font-weight: 300;
    @media (max-width: 550px) {
    font-size: 12px;
    }
`;