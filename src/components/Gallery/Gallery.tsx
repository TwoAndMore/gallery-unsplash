import './Gallery.scss';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Photo } from '../../types/Photo';
import { Loader } from '../Loader/Loader';
import { PhotoItem } from '../PhotoItem/PhotoItem';

type Props = {
  photos: Photo[],
  isLoading: boolean,
  isError: boolean,
};

export const Gallery: React.FC<Props> = (props) => {
  const {
    photos,
    isLoading,
    isError,
  } = props;

  const [currentPhotoID, setCurrentPhotoID] = useState<string | null>(null);
  const { photoID = '' } = useParams();

  const handleClosePhoto = () => {
    setCurrentPhotoID(null);
  };

  const getPhotoByID = (photoId: string) => {
    return photos.find(photo => photo.id === photoId) || photos[0] || null;
  };

  const handleSelectPhoto = (photoId: string) => {
    const foundPhoto = getPhotoByID(photoId);

    if (foundPhoto) {
      setCurrentPhotoID(foundPhoto.id);
    }
  };

  useEffect(() => {
    if (photoID.length > 0) {
      handleSelectPhoto(photoID);
    }
  });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {isError || photos.length <= 0 ? (
            <p>
              Cant load data from server / There is no data
            </p>
          ) : (
            <div className="gallery">
              <h1 className="gallery__title">
                Gallery
              </h1>

              <div className="gallery__list">
                {photos.map(photo => {
                  const {
                    urls,
                    user,
                    description,
                    id,
                  } = photo;

                  return (
                    <PhotoItem
                      id={id}
                      image={urls.small}
                      title={description}
                      authorName={user.name}
                      authorPicture={user.profile_image.small}
                      selectPhoto={handleSelectPhoto}
                      key={id}
                    />
                  );
                })}
              </div>

              {currentPhotoID && (
                <div className="gallery__full">
                  <img
                    src={getPhotoByID(currentPhotoID).urls.full}
                    alt={getPhotoByID(currentPhotoID).description}
                    className="gallery__opened-photo"
                  />
                  <Link to="/">
                    <button
                      type="button"
                      className="gallery__close"
                      onClick={handleClosePhoto}
                    >
                      X
                    </button>
                  </Link>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </>
  );
};
