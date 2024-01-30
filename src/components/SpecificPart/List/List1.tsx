import React, { useState, DragEvent } from 'react';
import * as S from "./style/List1";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faImage } from '@fortawesome/free-solid-svg-icons';
import jgyImg from "../../../assets/images/profile.jpeg"

interface IListContent {
  img: string,
  title: string,
  description: string
}

const List1 = () => {
  const [listContent, setListContent] = useState<IListContent[]>([
    {
      img: jgyImg,
      title: "Cosmo Kramer",
      description: "New York Man of Mystery"
    },
    {
      img: jgyImg,
      title: "George Costanza",
      description: "Architect"
    },
    {
      img: jgyImg,
      title: "Elaine Benes",
      description: "Writer"
    }
  ]);

  const handleDragStart = (e: DragEvent, index: number) => {
    e.dataTransfer.setData("text/plain", index.toString());
  };
  
  const handleDragOver = (e: DragEvent, index: number) => {
    e.preventDefault();
  };
  
  const handleDrop = (e: DragEvent, index: number) => {
    e.preventDefault();
    const dragIndex = parseInt(e.dataTransfer.getData("text/plain"));
    const newItems = [...listContent];
    const item = newItems.splice(dragIndex, 1)[0];
    newItems.splice(index, 0, item);
    setListContent(newItems);
  };
  

  return (
    <S.Container>
        <S.ListContainer>
            <S.Lists>
            {
                listContent.map((content: IListContent, index) => (
                    <S.List
                    key={index}
                    draggable
                    onDragStart={(e) => handleDragStart(e, index)}
                    onDragOver={(e) => handleDragOver(e, index)}
                    onDrop={(e) => handleDrop(e, index)}
                    >
                    <S.ListImg src={content.img} />
                    <S.ListContent>
                        <S.ListTitle>{content.title}</S.ListTitle>
                        <S.ListDescription>{content.description}</S.ListDescription>
                    </S.ListContent>
                    <S.ListIcons>
                        <FontAwesomeIcon fontSize={18} icon={faVideo} color="green" />
                        <FontAwesomeIcon fontSize={18} icon={faImage} color="green" />
                    </S.ListIcons>
                    </S.List>
                ))
            }
            </S.Lists>
        </S.ListContainer>
    </S.Container>

  );
};

export default List1;
