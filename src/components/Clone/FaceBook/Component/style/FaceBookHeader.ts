import styled from "styled-components";

export const FaceBookHeaderContainer = styled.header`
    position: relative;
    width: 100%;
    height: 10%;
    background-color: #fff;
    border-radius: 20px 20px 0 0 ;
`;

export const FaceBookHeaderInner = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
`;

export const FaceBookLogo = styled.img`
    width: 200px;
    height: 200px;
    margin-top: -60px;
`;

export const FaceBookHeaderIcons = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    gap: 5px;
    justify-content: space-around;
`;

export const FaceBookHeaderIcon = styled.button`
    background-color: #eee;
    padding: 8px;
    border-radius: 50%;
    transition: .3s;
    cursor: pointer;
    border: 0;
    &:hover {
        background-color: #e3e3e3;
    }
`;