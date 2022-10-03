import React from 'react';
import PropTypes from 'prop-types';

const ModalBody = ({ filmList, name, birthYear, eyeColor, homeworld }) => {
  return (
    <>
      <h2 className="font-bold text-lg text-center">{name}</h2>
      <div className="stat">
        <div className="stat-title">Birth Year</div>
        <div className="stat-value text-xl">{birthYear}</div>
      </div>

      <div className="stat">
        <div className="stat-title">Eye Color</div>
        <div className="stat-value text-xl">{eyeColor}</div>
      </div>

      <div className="stat">
        <div className="stat-title">Homeworld</div>
        <div className="stat-value text-xl">{homeworld}</div>
      </div>

      <div className="stat">
        <div className="stat-title">Filmography</div>
        <div className="stat-value text-xl">
          <ul>
            {filmList.map(({ node: { episodeID, title } }) => {
              return (
                <li key={episodeID}>
                  Episode {episodeID}: {title}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

ModalBody.propTypes = {
  filmList: PropTypes.array,
  name: PropTypes.string,
  birthYear: PropTypes.string,
  eyeColor: PropTypes.string,
  homeworld: PropTypes.string
};

export default ModalBody;
