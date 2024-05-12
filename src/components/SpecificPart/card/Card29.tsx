import React, { useState } from 'react';
import profile from "../../../assets/images/profile.jpeg"
import * as S from "./style/Card29";

const Card29 = () => {
    const [content, setContent] = useState({
        profile: profile,
        name: "jgy_dev",
        description: "I'm frontend developer!",
        skills: ["React", "Typescript", "JavaScript"]
    });
    return (
        <S.Container>
            <S.Inner>
                <S.Profile profile={content.profile}>
                    <S.BackImage />
                    <S.ProfileTitleBox>
                        <S.Name>{content.name}</S.Name>
                        <S.Description>{content.description}</S.Description>
                    </S.ProfileTitleBox>
                    <S.ProfileSkillsBox>
                        <S.SkillBoxTitle>Skills</S.SkillBoxTitle>
                    {
                        content.skills.map((skill, index) => {
                            return (
                                <S.Skill key={index}>{skill}</S.Skill>
                            )
                        })
                    }
                    </S.ProfileSkillsBox>
                </S.Profile>
            </S.Inner>
        </S.Container>
    );
};

export default Card29;