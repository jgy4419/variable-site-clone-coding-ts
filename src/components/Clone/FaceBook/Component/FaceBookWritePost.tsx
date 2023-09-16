import * as S from "./style/FaceBookWritePost";
import UserJgy from "../assets/image/UserJgy.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faImage } from '@fortawesome/free-solid-svg-icons';

const FaceBookWritePost = () => {
    const writePostIconsAndColor = [{
            icon: faVideo, 
            color: "#ff5500",
            title: "Live"
        },
        {
            icon: faImage,
            color: "green",
            title: "Photo"
        },
        {
            icon: faVideo,
            color: "#a200ff",
            title: "Room"
        }
    ];
    return (
        <S.FaceBookWritePostContainer>
            <S.FaceBookWritePostInner>
                <S.FaceBookUserImage width="50" height="50" src={UserJgy} />
                <S.FaceBookUserWriteSpace placeholder="What's on your mind?"/>
            </S.FaceBookWritePostInner>
            <S.FaceBookWritePostModes>
                {
                    writePostIconsAndColor.map((iconObj, index) => {
                        return (
                            <S.FaceBookWritePostMode key={index}>
                                <FontAwesomeIcon fontSize={14} icon={iconObj.icon} color={iconObj.color} />
                                <S.FaceBookWriteIconTitle>{iconObj.title}</S.FaceBookWriteIconTitle>
                            </S.FaceBookWritePostMode>
                        )
                    })
                }
            </S.FaceBookWritePostModes>
        </S.FaceBookWritePostContainer>
    );
};

export default FaceBookWritePost;