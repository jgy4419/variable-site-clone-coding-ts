import * as S from "./style/Card35";
import pocari from "../../../assets/images/pocari.png";

const Card35 = () => {
    const content = {
        img: pocari,
        title: "Pocari",
        subTitle: "Sweat",
        description: "Pocari Sweat's 'Pocari' is a new word created by finding a word that gives a complimentary and refreshing feeling."
    };
    return (
        <>
            <S.Container>
                <S.Inner>
                    <S.Img src={content.img}/>
                    <S.Information>
                        <S.Title>{content.title}</S.Title>
                        <S.SubTitle>{content.subTitle}</S.SubTitle>
                        <S.Description>{content.description}</S.Description>
                    </S.Information>            
                </S.Inner>
            </S.Container>
        </>
    );
};

export default Card35;