import React, { useState } from 'react';
import * as S from "./style/Gallery1";

const Gallery1 = () => {
    const [images, setImages] = useState([
            "https://mblogthumb-phinf.pstatic.net/20120708_265/titanic17_1341736817007BRdlT_JPEG/19.jpg?type=w420",
            "https://png.pngtree.com/thumb_back/fw800/background/20230519/pngtree-hawaiin-natural-landscape-wallpapers-image_2567860.jpg",
            "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
            "https://mblogthumb-phinf.pstatic.net/20120708_265/titanic17_1341736817007BRdlT_JPEG/19.jpg?type=w420",
            "https://png.pngtree.com/thumb_back/fw800/background/20230519/pngtree-hawaiin-natural-landscape-wallpapers-image_2567860.jpg",
            "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
    ]);

    const [choiceImage, setChoiceImg] = useState(images[0]);
    const [scaleVal, setScaleVal] = useState(100);

    const chanceImage = (image: string) => {
        setChoiceImg(image);
        setScaleVal(120);
        setTimeout(() => {
            setScaleVal(100);
        }, 300);
    }

    return (
        <S.Container>
            <S.Inner>
                <S.ResultImageContain>
                    <S.ResultImageTitle>Image Preview</S.ResultImageTitle>
                    <S.ResultImage scaleVal={scaleVal} choiceImg={choiceImage}/>
                </S.ResultImageContain>
                <S.ChoiceImageContain>
                    {
                        images.map((image, index) => {
                            return (
                                <S.Image onClick={() => chanceImage(image)} key={index} src={image}/>
                            )
                        })
                    }
                </S.ChoiceImageContain>
            </S.Inner>
        </S.Container>
    );
};

export default Gallery1;