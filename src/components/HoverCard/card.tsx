import { FC } from 'react';
import './card.scss';

interface CardProps {
  title: string;
  content: string;
  src?: string;
}

const Card: FC<CardProps> = ({ title, content, src}) => {
  return (
    <div>
      <div className="hover-card">
        <div className="contentbox">
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
        {src && (
          <img
            src={src}
            alt="Card background"
            className="card-background"
          />
        )}
      </div>
    </div>
  );
};

export default Card;
