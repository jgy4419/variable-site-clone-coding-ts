import Menu from "./components/VerticalTabsMenu";
import Description from "./components/VerticalTabsMenuContent";
import * as S from "./style/index";

const Index = () => {
    return (
        <>
            <S.VerticalTabsContainer>
                <S.VerticalTabsInner>
                    <Menu/>
                    <Description/>
                </S.VerticalTabsInner>
            </S.VerticalTabsContainer>
        </>
    );
};

export default Index;