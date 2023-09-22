import * as S from "./style/FaceBookPost";
import UserJgy from "../assets/image/UserJgy.png";
import Post from "../post.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faMessage, faShareFromSquare } from '@fortawesome/free-solid-svg-icons';
const FaceBookPost = () => {
    return (
        <S.FaceBookPostContainer>
            <S.FaceBookPostInner>
                {
                    Post.map((post, index) => {
                        return (
                            <S.Post>
                                <S.PostHeader>
                                    <S.PostImage width="40" src={UserJgy}/>
                                    <S.PostUserName>{post.userName}</S.PostUserName>
                                </S.PostHeader>
                                <S.PostContent>{post.content}</S.PostContent>
                                <S.PostFooter>
                                    <PostButtons/>
                                </S.PostFooter>
                            </S.Post>
                        )
                    })
                }
            </S.FaceBookPostInner>
        </S.FaceBookPostContainer>
    );
};

const PostButtons = () => {
    const icons = [faThumbsUp, faMessage, faShareFromSquare];
    const iconsText = ["Like", "Comment", "Share"]
    return (
        <>
            {
                icons.map((icon, index) => {
                    return (
                        <S.PostIconButton key={index}>
                            <FontAwesomeIcon color="skyblue" icon={icon} />
                            {iconsText[index]}
                        </S.PostIconButton>
                    )
                })
            }
        </>
    )
}

export default FaceBookPost;