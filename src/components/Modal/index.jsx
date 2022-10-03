import React from 'react';
import { useQuery } from '@apollo/client';
import PropTypes from 'prop-types';
import ModalWrapper from './components/ModalWrapper';
import ModalBody from './components/ModalBody';
import Loading from '../Loading';
import Error from '../Error';
import PERSON_QUERY from './queries/personQuery';

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
