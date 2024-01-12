import React, { useState } from 'react';
import WeatherImg from "../../../assets/images/weather.png";
import * as S from "./style/Card24";

const Card24 = () => {
    const [content, setContent] = useState({
        title: "NEW DELHI",
        description: "PARTLY CLOUDY",
        img: WeatherImg,
        degrees: 32,
        max: 33,
        min: 28
    });
    const [decorationContent, setDecorationContent] = useState([
        {
            color: "#7743DB",
            top: 25,
            left: 60,
            size: 250
        },
        {
            color: "#FF6C22",
            top: 80,
            left: 60,
            size: 300
        },
    ])
    return (
        <S.Container>
            <S.DecorationContent>
            {
                decorationContent.map((content, index) => {
                    return (
                        <S.Decoration 
                            key={index} 
                            color={content.color} 
                            size={content.size}
                            top={content.top}
                            left={content.left}
                        />
                    )
                })
            }
            </S.DecorationContent>
            <S.Weather>
                <S.Title>{content.title}</S.Title>
                <S.Description>{content.description}</S.Description>
                <S.Img src={content.img}/>
                <S.Degrees>
                    {content.degrees}
                    <span>&deg;C</span>
                </S.Degrees>
                <S.TodayDegrees>
                    <S.MaxDegreesContain>
                        <S.Max>max</S.Max>
                        <S.MaxDegrees>
                            {content.max}
                            <span>&deg;C</span>
                        </S.MaxDegrees>
                    </S.MaxDegreesContain>
                    <S.Line/>
                    <S.MinDegreesContain>
                        <S.Min>min</S.Min>
                        <S.MinDegrees>
                            {content.min}
                            <span>&deg;C</span>
                        </S.MinDegrees>
                    </S.MinDegreesContain>
                </S.TodayDegrees>
            </S.Weather>
        </S.Container>
    );
};

export default Card24;