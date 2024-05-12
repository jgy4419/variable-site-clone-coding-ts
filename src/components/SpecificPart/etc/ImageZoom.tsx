import React, { useState } from 'react';
import * as S from "./style/ImageZoom"
import jgyImg from "../../../assets/images/profile.jpeg";

const ImageZoom: React.FC = () => {
  const [zoomedImagePosition, setZoomedImagePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [showZoomedImage, setShowZoomedImage] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setShowZoomedImage(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left - 90) / width;
    const y = (e.clientY - top - 80) / height;
    setZoomedImagePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setShowZoomedImage(false);
  };

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <div style={{ position: 'relative' }}>
        <img
          src={jgyImg}
          alt=""
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        />
        {showZoomedImage && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: '100%',
              transform: 'translateX(10px)',
              width: '300px',
              height: '300px',
              overflow: 'hidden',
              border: '1px solid #ccc',
              boxShadow: '0 0 10px rgba(0,0,0,0.3)',
              borderRadius: '5px',
              zIndex: 999,
            }}
          >
            <img
              src={jgyImg}
              alt=""
              style={{
                transformOrigin: 'top left',
                transform: `scale(3) translate(${-zoomedImagePosition.x * 200}%, ${-zoomedImagePosition.y * 200}%)`,
              }}
            />
          </div>
        )}
      </div>
      <div>
      </div>
    </div>
  );
};

export default ImageZoom;
