import styled from 'styled-components';

export const Card5Container = styled.div`
    position: relative;
    width: 100vw;
    height: 50vh;
    background-color: #333;
`;

export const Card5Inner = styled.div`
    position: absolute;
    width: 80%;
    height: 100%;
    inset: 0;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const Card5Image = styled.img`
    width: 300px;
    height: 180px;
    border-radius: 20px;
    transition: 0.5s;
`;

export const Card5Title = styled.h2<{mainColor: string}>`
    color: ${(props) => props.mainColor};
`;

export const Card5Description = styled.p`
    width: 300px;
    font-size: 18px;

`;

export const Card5Button = styled.button<{mainColor: string}>`
    width: 130px;
    height: 50px;
    font-size: 16px;
    font-weight: 600;
    background-color: ${(props) => props.mainColor};
    color: #fff;
    border: 0;
    border-radius: 10px;
    cursor: pointer;

`;

export const Card5ContentInner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    transition: 0.5s;
    transform: translateY(60px);
`
export const Card5Content = styled.div`
    position: relative;
    overflow: hidden;
    width: 350px;
    height: 250px;
    background-color: #fff;
    border-radius: 20px;
    text-align: center;
    transition: .5s;
    &:hover {
        overflow: visible;
        height: 70%;
        ${Card5ContentInner} {
            transform: translateY(-50px);
        }
        ${Card5Image} {
            transition: 0.5s;
            transform: scale(.8);
        }
    }
`;