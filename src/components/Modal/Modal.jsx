import React from 'react';
import { gql, useQuery } from '@apollo/client';
import PropTypes from 'prop-types';
import ModalWrapper from './ModalWrapper';
import ModalBody from './ModalBody';
import Loading from '../Loading';
import Error from '../ErrorBoundary/Error';

export const PERSON_QUERY = gql`
  query person($id: ID) {
    person(id: $id) {
      name
      id
      birthYear
      eyeColor
      homeworld {
        name
      }
      filmConnection {
        edges {
          node {
            title
            episodeID
          }
        }
      }
    }
  }
`;

const Modal = ({ onClose, modalData }) => {
  const { data, loading, error } = useQuery(PERSON_QUERY, { fetchPolicy: 'no-cache', variables: { id: modalData.id } });

  if (!modalData.visible) {
    return <></>;
  }

  if (loading) {
    return (
      <ModalWrapper closeFn={onClose}>
        <Loading />
      </ModalWrapper>
    );
  }

  if (error) {
    return (
      <ModalWrapper closeFn={onClose}>
        <Error />
      </ModalWrapper>
    );
  }

  return (
    <ModalWrapper closeFn={onClose}>
      <ModalBody
        name={data.person.name}
        birthYear={data.person.birthYear}
        eyeColor={data.person.eyeColor}
        homeworld={data.person.homeworld.name}
        filmList={data.person.filmConnection.edges}
      />
    </ModalWrapper>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func,
  modalData: PropTypes.object
};

export default Modal;
