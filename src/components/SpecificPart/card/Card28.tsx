import React, { useState } from 'react';
import * as S from "./style/Card28";

interface IContent {
    [key: string]: string
}

const Card28 = () => {
    const [contents, setContents] = useState<IContent[]>([
        {
            img: 'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F00%2Fab%2F94%2F00ab944aabd4c388559e7ebcfdd9e562.jpg&type=sc960_832',
            title: 'BOOK1',
            description: "Brief contents of the book1..."
        },
        {
            img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAyMjdfMjEx%2FMDAxNjc3NDgyNjMyODU3.3j2uH_rZaowLO4smm-dmq3jVmGLYgNVSjUML493jyMYg._6I6xS4OIyf8-vZLChaBkZevajvc1ZLapBtDwSAzfukg.JPEG.guswls2313%2FIMG_8260.JPG&type=sc960_832',
            title: 'BOOK2',
            description: "Brief contents of the book2..."
        },
        {
            img: 'https://png.pngtree.com/thumb_back/fw800/background/20230519/pngtree-hawaiin-natural-landscape-wallpapers-image_2567860.jpg',
            title: 'BOOK3',
            description: "Brief contents of the book3..."
        },
        {
            img: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D',
            title: 'BOOK4',
            description: "Brief contents of the book4..."
        },
        {
            img: 'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F00%2Fab%2F94%2F00ab944aabd4c388559e7ebcfdd9e562.jpg&type=sc960_832',
            title: 'BOOK5',
            description: "Brief contents of the book5..."
        },
        {
            img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAyMjdfMjEx%2FMDAxNjc3NDgyNjMyODU3.3j2uH_rZaowLO4smm-dmq3jVmGLYgNVSjUML493jyMYg._6I6xS4OIyf8-vZLChaBkZevajvc1ZLapBtDwSAzfukg.JPEG.guswls2313%2FIMG_8260.JPG&type=sc960_832',
            title: 'BOOK6',
            description: "Brief contents of the book6..."
        },
        {
            img: 'https://png.pngtree.com/thumb_back/fw800/background/20230519/pngtree-hawaiin-natural-landscape-wallpapers-image_2567860.jpg',
            title: 'BOOK7',
            description: "Brief contents of the book7..."
        },
        {
            img: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D',
            title: 'BOOK8',
            description: "Brief contents of the book8..."
        },
    ]);
    const [backImg, setBackImg] = useState(contents[0].img);
    const [title, setTitle] = useState(contents[0].title);
    const [description, setDescription] = useState(contents[0].description);

    // content 변경시켜주기.
    const changeContent = (content: IContent) => {
        let contentTitle = [setTitle, setBackImg, setDescription];
        let contentValue = [content.title, content.img, content.description];

        contentTitle.forEach((content, index) => {
            content(contentValue[index]);
        });
    }

    return (
        <S.Container backImg={backImg}>
            <S.Inner>
                <S.Content>
                    <S.Title>{title}</S.Title>
                    <S.Description>{description}</S.Description>
                    <S.Button>Read More</S.Button>
                </S.Content>
                <S.Imgs>
                    {
                        contents.map((content, index) => {
                            return (
                                <S.Img onClick={() => {changeContent(content)}} key={index} src={content.img} />
                            )
                        })
                    }
                </S.Imgs>
            </S.Inner>
        </S.Container>
    );
};

export default Card28;