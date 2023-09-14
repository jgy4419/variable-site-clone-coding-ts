import styled from 'styled-components';

export const ParallaxContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;
`;

export const ParallaxSection = styled.section<{backImage: string}>`
    position: sticky;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-repeat: no-repeat;
    background-image: url(${(props) => props.backImage});
    background-position: center;
    background-size: cover;
    display: inline-block;
    scroll-snap-align: start;
`;

export const ParallaxSectionTitle = styled.h1`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 80px;
    transition: .3s;

`;