import {useInputChange} from './hook/useInputChange';
import * as S from './style/Information';
import {DefaultStyle} from './style/Information';

const Information = () => {
    const {nameChange, ageChange, descriptionChange, inputObj} = useInputChange();

    return (
        <>
            <S.InformationContainer>
                <DefaultStyle/>
                <S.InformationInner>
                    <S.InformationInputs>
                        <S.Name>Name : </S.Name>
                        <S.InformationInputName 
                            onChange={nameChange}
                        />                    
                        <S.Age>Age : </S.Age>
                        <S.InformationInputAge 
                            onChange={ageChange}
                        />        
                        <S.Description>Description : </S.Description>            
                        <S.InformationInputDescription 
                            // textArea Element event 값 전달하기.
                            onChange={(e) => descriptionChange(e)}
                        />
                    </S.InformationInputs>
                    <S.InformationPreview>
                        <S.PreviewImage 
                            src="https://pasrc.princeton.edu/sites/g/files/toruqf431/files/styles/freeform_750w/public/2021-03/blank-profile-picture-973460_1280.jpg?itok=QzRqRVu8"
                        />
                        <S.PreviewName>name : {inputObj.name}</S.PreviewName>
                        <S.PreviewAge>age : {inputObj.age}</S.PreviewAge>
                        <S.PreviewDescription>description : {inputObj.description}</S.PreviewDescription>
                    </S.InformationPreview>
                </S.InformationInner>
            </S.InformationContainer>
        </>
    );
};

export default Information;