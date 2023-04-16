import { FC } from 'react';
import './Title.css';

interface TitleProps {
  text: string;
  cssClass?: string;
}

export const Title: FC<TitleProps> = ({ text, cssClass = '' }) => {
  return <h1 className={`title__component ${cssClass}`}>{text}</h1>;
};
