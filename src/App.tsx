import React, { useEffect, useState } from 'react';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router';
import { Gallery } from './components/Gallery/Gallery';
import { getPhotos } from './api/photos';
import { Photo } from './types/Photo';

export const App: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getPhotos()
      .then(res => setPhotos(res))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="main page">
      <div className="container">
        <Routes>
          <Route path="/">
            <Route
              index
              element={(
                <Gallery
                  photos={photos}
                  isLoading={isLoading}
                  isError={isError}
                />
              )}
            />

            <Route path="/home" element={<Navigate to="/" replace />} />

            <Route
              path=":photoID"
              element={(
                <Gallery
                  photos={photos}
                  isLoading={isLoading}
                  isError={isError}
                />
              )}
            />
          </Route>

          <Route path="*" element={<h1>Error :(</h1>} />
        </Routes>
      </div>
    </div>
  );
};
