import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
`;

export const Inner = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BoardContainer = styled.div`
    width: 600px;
    height: 500px;
    box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow: scroll;
`;

export const Title = styled.h1`
    font-size: 30px;
    color: #444;
`;

export const Description = styled.p`
    color: grey;
`;

export const ItemNames = styled.ul`
    display: flex;
    gap: 5px;
`;

export const Name = styled.li`
    font-size: 12px;
    font-weight: 700;
    color: #444;
    cursor: pointer;
    padding: 7px 10px;
    background-color: #eee;
    border-radius: 10px;
    transition: .3s;
    &:hover {
        background-color: #444;
        color: #eee;
    }
`;

export const ItemList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Item = styled.div`
    display: flex;
    gap: 20px;
    background-color: #eee;
    border-radius: 10px;
    padding: 10px;
`;

export const ItemImg = styled.img`
    width: 75px;
    object-fit: cover;
    border-radius: 20px;
`;

export const ItemContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
`;

export const ItemTitle = styled.h2`
    font-size: 16px;
    color: #444;
`;

export const ItemName = styled.p`
    color: #afafaf;
    margin-top: -3px;
    font-size: 12px;
    font-weight: 600;
`;

export const AddressContain = styled.div`
    display: flex;
    gap: 5px;
`;

export const ItemAddress = styled.p`
    color: grey;
    font-size: 14px;
    font-weight: 700;
`;

