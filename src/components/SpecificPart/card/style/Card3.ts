import styled from 'styled-components';

export const Card3Container = styled.div`
    position: relative;
    width: 100vw;
    height: 50vh;
`

export const Card3Inner = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Card3Image = styled.img`
    border-radius: 20px;
    transform: 
        rotate(20deg)
        skew(-10deg, -5deg);
        transition: 
            translate 0.25s,
            box-shadow 0.25s;
    &:hover {
        translate: 0 -30px;
        box-shadow: 5px 3px lightgrey,
                    10px 6px grey,
                    15px 9px #333;
    }        
`