import { useState } from 'react';
import * as S from './style/Accordion1';

const Accordion = () => {
    const [accordions, setAccordions] = useState({
        title: [
            'What do you, eam by Accordion?',
            'What do you, eam by Accordion?',
            'What do you, eam by Accordion?',
            'What do you, eam by Accordion?'
        ],
        description: 'Flowers Content Description. Flowers Content Description. Flowers Content Description.'
    });
    const [accordionState, setAccordionState] = useState(false);

    return (
        <S.AccordionContainer>
            <S.AccordionInner>
                <S.Accordions>
                {
                    accordions.title.map((title, index) => {
                        return (
                            <S.Accordion key={index} accordionState={accordionState}>
                                <S.AccordionContent>
                                    <S.AccordionTitle>{title}</S.AccordionTitle>
                                    <S.AccordionDescription accordionState={accordionState}>{accordions.description}</S.AccordionDescription>
                                </S.AccordionContent>
                                <S.AccordionIcon onClick={() => {setAccordionState(state => !state)}}>{accordionState === true ? '-' : '+'}</S.AccordionIcon>
                            </S.Accordion>
                        )                            
                    })
                }
                </S.Accordions>
            </S.AccordionInner>
        </S.AccordionContainer>
    );
};

export default Accordion;