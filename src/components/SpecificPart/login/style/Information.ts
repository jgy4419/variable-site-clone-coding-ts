import styled, {createGlobalStyle} from 'styled-components';

export const DefaultStyle = createGlobalStyle`
    p {
        font-size: 18px;
        font-weight: 700;
        line-height: 1.6;
    }
    input, textarea { 
        background-color: #333;
        width: 200px;
        min-height: 20px;
        border-radius: 5px;
        border: 0;
        color: #fff;
        padding: 10px;
        margin-bottom: 20px;
    }
`

export const InformationContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    color: #fff;
`

export const InformationInner = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    // background-color: #333;
`

export const InformationInputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2%;
`

export const InformationInputDescription = styled.textarea`
    height: 50px;
    resize: none; // textarea 크기 고정.
`

export const InformationPreview = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1%;
    text-align: center;
`

export const PreviewImage = styled.img`
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
`

export const Name = styled.p``

export const InformationInputName = styled.input``

export const Age = styled.p``

export const InformationInputAge = styled.input``

export const Description = styled.p``

export const PreviewName = styled.p``

export const PreviewAge = styled.p``

export const PreviewDescription = styled.p``