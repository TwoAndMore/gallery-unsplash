import './PhotoItem.scss';
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  id: string,
  image: string,
  title: string,
  authorName: string,
  authorPicture: string,
  selectPhoto: (photoID: string) => void,
};

export const PhotoItem: React.FC<Props> = (props) => {
  const {
    id,
    image,
    title,
    authorName,
    authorPicture,
    selectPhoto,
  } = props;

  return (
    <div className="photoItem">
      <Link to={`/${id}`}>
        <button
          className="photoItem__photo"
          type="button"
          onClick={() => selectPhoto(id)}
        >
          <img
            src={image}
            alt={title}
            className="photoItem__image"
          />
        </button>
      </Link>

      <div className="photoItem__line" />

      <div className="photoItem__title">
        {title}
      </div>

      <div className="photoItem__author">
        <div className="photoItem__author-photo">
          <img
            src={authorPicture}
            alt={authorName}
            className="photoItem__author-image"
          />
        </div>
        <div className="photoItem__author-name">
          {authorName}
        </div>
      </div>
    </div>
  );
};
