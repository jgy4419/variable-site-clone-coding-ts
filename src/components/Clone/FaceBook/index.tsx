import React from "react";
import * as S from "./style/index";
import Header from "./Component/FaceBookHeader";
import WritePostSection from "./Component/FaceBookWritePost";
import Story from "./Component/FaceBookStory";
import Post from "./Component/FaceBookPost";
import Footer from "./Component/FaceBookFooter";

const FaceBook = () => {
    return (
        <>
            <S.FaceBookContainer>
                <S.FaceBookInner>
                    <Header />
                    <WritePostSection />
                    <Story />
                    <Post />
                    <Footer />
                </S.FaceBookInner>
            </S.FaceBookContainer>
        </>
    );
};

export default FaceBook;