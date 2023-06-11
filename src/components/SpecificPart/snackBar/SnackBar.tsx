import React from 'react';
import * as S from './style/SnackBar';

const SnackBar = () => {
    return (
        <>
            <S.Notification>
                <S.NotificationBody>
                    <S.NotificationIcon
                        src="https://www.pngmart.com/files/16/Tick-Green-Check-Mark-PNG-Clipart.png" 
                        alt="checkImage" 
                        title='Success'
                    />
                    <p>Your accound has been created! &#128640;</p>
                    <S.NotificationProgress></S.NotificationProgress>
                </S.NotificationBody>
            </S.Notification>
        </>
        // <S.SnackBarContainer>
            
        // </S.SnackBarContainer>
    );
};

export default SnackBar;