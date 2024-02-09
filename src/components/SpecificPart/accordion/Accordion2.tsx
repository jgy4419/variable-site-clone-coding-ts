import React, { useState } from 'react';
import * as S from "./style/Accordion2";

const Accordion2 = () => {
    const [accordions, setAccordions] = useState([
        {
            title: "ACCORDION 01",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing edit. Similtique, magui! Lorem ipsum dolor sit amet consectetur ..",
            detailState: false
        },
        {
            title: "ACCORDION 02",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing edit. Similtique, magui! Lorem ipsum dolor sit amet consectetur ..",
            detailState: false
        },
        {
            title: "ACCORDION 03",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing edit. Similtique, magui! Lorem ipsum dolor sit amet consectetur ..",
            detailState: false
        }
    ]);

    const accordionClickHandler = (index: number) => {
        let copyAccordion = [...accordions];
        
        for(let i = 0; i < copyAccordion.length; i++) {
            if(copyAccordion[i].detailState)
                copyAccordion[i].detailState = false;
        }

        copyAccordion[index].detailState = true;
        setAccordions(copyAccordion);
    }

    return (
        <S.Container>
            <S.Inner>
                <S.AccordionContainer>
                    <S.AccordionTitle>ACCORDIONS</S.AccordionTitle>
                    <S.AccordionLine />
                    <S.Accordions>
                    {
                        accordions.map((accordion, index) => {
                            return (
                                <S.Accordion key={index}>
                                    <S.AccordionHeader onClick={() => accordionClickHandler(index)}>
                                        <S.Titles>
                                            <S.Title1>{accordion.title}</S.Title1>
                                            <S.Title2>{accordion.title}</S.Title2>
                                        </S.Titles>
                                        <S.DetailBtn>{accordion.detailState === true ? "-" : "+"}</S.DetailBtn>
                                    </S.AccordionHeader>
                                    <S.Description detailState={accordion.detailState}>{accordion.description}</S.Description>
                                    <S.AccordionLine />
                                </S.Accordion>
                            )
                        })
                    } 
                    </S.Accordions>
                </S.AccordionContainer>
            </S.Inner>
        </S.Container>
    );
};

export default Accordion2;