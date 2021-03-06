import styled from 'styled-components';

export const ProjectsWrapper = styled.section.attrs({
  id: 'projects',
})`
    align-items: center;
    display: flex;
    flex-direction: column;
    @media (min-width: 765px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        margin-top: 23px;
        width: 768px;
    }
    @media (min-width: 1000px) {
        margin: 0;
    }
`;

export const ProjectsSubtitle = styled.h2`
    margin: 20px 0 5px 0;
    text-align: center;
    width: 100%;
    @media (min-width: 765px) {
        font-size: 37px;
        font-weight: 400;
    }
    @media (min-width: 1000px) {
    &:nth-of-type(1) {
        margin-bottom: 14px;
      }
    }
`;

export const ImageThumbnail = styled.img`
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    margin-top: 10px;
    height: initial;
    width: 280px;
    @media (min-width: 374px) {
        width: 300px;
    }
    @media (min-width: 765px) {
        width: 350px;
    }
`;
