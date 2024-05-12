import React, { ChangeEvent, useEffect, useState } from 'react';
import * as S from "./style/input1";

const Input1 = () => {
    const [watchState, setWatchState] = useState(false);
    const [passwordState, setPasswordState] = useState("Medium");
    const [colors, setColors] = useState([
        "red"
    ]);

    let regExpStrong = /[.,!,@,#,$,%,^,&,*,?,_,~,-,]/;

    const trigger = (event: ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        
        value.length < 5 && setPasswordState("Medium");
        value.length >= 5 && setPasswordState("Week") ;
        (value.length >= 5 && value.match(regExpStrong)) && setPasswordState("Strong");
    };

    const progressState = () => {
        passwordState === "Medium" && setColors(["red"]);
        passwordState === "Week" && setColors(["red", "orange"]);
        passwordState === "Strong" && setColors(["red", "orange", "green"]);
    };

    useEffect(() => {
        progressState();
    }, [passwordState]);

    return (
        <S.Container>
            <S.Inner>
                <S.Title>Password Strength Indicator</S.Title>
                <S.InputContain>
                    <S.Input onChange={trigger} type={watchState === true ? "text" : "password"}/>
                    <S.InputButton onClick={() => setWatchState(prev => !prev)}>{watchState === true ? "HIDE" : "WATCH"}</S.InputButton>
                </S.InputContain>
                <S.ProgressContain>
                    {
                        colors.map((color, index) => {
                            return (
                                <S.Progress color={color} key={index} />
                            )
                        })
                    }
                </S.ProgressContain>
                <S.PassWordStateText>{passwordState}</S.PassWordStateText>
            </S.Inner>
        </S.Container>
    );
};

export default Input1;