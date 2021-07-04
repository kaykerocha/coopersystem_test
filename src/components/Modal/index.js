import React from 'react';

import {
  ContainerModal,
  ContainerMask,
  Container,
  ContainerBottom,
  ModalTitle,
  ModalSubTitle,
} from './styles';

const Modal = props => {
  return (
    <ContainerModal
      animationType="slide"
      transparent={true}
      visible={props.visible}
      onRequestClose={props.onRequestClose}>
      <ContainerMask>
        <Container>
          <ModalTitle>{props.title}</ModalTitle>
          <ModalSubTitle>{props.subTitle}</ModalSubTitle>
          <ContainerBottom>{props.children}</ContainerBottom>
        </Container>
      </ContainerMask>
    </ContainerModal>
  );
};

export default Modal;
