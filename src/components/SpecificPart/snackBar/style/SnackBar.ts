import styled, {keyframes} from 'styled-components';

const fadeIn = keyframes`
    5% {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }
    95% {
        opacity: 1;
        transform: translateY(0);
    }
`

const progress = keyframes`
    from {
        transform: scaleX(0);
    }
`

export const Notification = styled.figure`
    position: absolute;
    bottom: 4px;
    right: 4px;
    width: max-content;
    border-radius: 6px;
    background-color: #313e2c;
    color: #aaec8a;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
    transform: translateY(30px);
    opacity: 0;
    visibility: hidden;
    animation: ${fadeIn} 3s linear;
`

export const NotificationBody = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px 8px;
`

export const NotificationIcon = styled.img`
    width: 26px;
    height: 26px;
    margin-right: 4px;
`

export const NotificationProgress = styled.div`
    position: absolute;
    left: 4px;
    bottom: 4px;
    width: calc(100% - 8px);
    height: 3px;
    transform-origin: left;
    background: linear-gradient(to right, #313e2c, #aaec8a);
    border-radius: inherit;
    animation: ${progress} 2.5s 0.3s linear;
`