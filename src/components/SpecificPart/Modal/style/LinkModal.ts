import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ShareContent = styled.div<{modalState: boolean}>`
    position: relative;
    z-index: 100;
    width: 500px;
    height: 250px;
    background-color: #fff;
    box-shadow: -2px 3px 3px 3px #eee;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    transition: .3s;
    transform: translateY(${props => props.modalState === true ? "0px" : "-150%"});
`;

export const ShareContentInner = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

export const ShareContainTop = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

export const ShareTitle = styled.h2`
    color: #333;
`;

export const ShareCloseButton = styled.button`
    background-color: transparent;
    color: grey;
    font-size: 20px;
    font-weight: 700;
    border: 0;
    cursor: pointer;
`;

export const ShareInputContain = styled.div`
    width: 100%;
    height: 50px;
    background-color: #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
`;

export const ShareInput = styled.input`
    width: 80%;
    background-color: transparent;
    border: 0;
    padding: 20px;
    font-weight: 700;
    color: grey;
    outline: none;
`;

export const ShareCopyButton = styled.button`
    width: 100px;
    height: 40px;
    font-weight: 700;
    border: 0;
    background-color: #fff;
    border-radius: 5px;
    color: purple;
    cursor: pointer;
    margin: 10px;
    transition: .3s;
    &:hover {
        path {
            background-color: purple;
            color: #fff;            
        }
        background-color: purple;
        color: #fff;
    }
`;

export const ShareCopyButtonText = styled.span`
    margin-left: 5px;
`

export const CoverColor = styled.div`
    position: absolute;
    z-index: 10;
    width: 100vw;
    height: 100vh;
    background-color: #eee;
    opacity: .5;
    transition: .3s;
`;

export const Inner = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    text-align: center;
    margin: auto;
`;

export const ShareTestInput = styled.input`
    width: 30%;
    background-color: transparent;
    padding: 20px;
    font-weight: 700;
    color: grey;
    outline: none;
    margin-top: 100px;
    border-radius: 20px;
`;

export const ShareButton = styled.button`
    position: absolute;
    border-radius: 50%;
    width: 60px;
    height: 60px; 
    border: 0;
    background-color: #fff;
    box-shadow: -3px 5px 10px #eee;
    cursor: pointer;
    bottom: 100px;
`;
