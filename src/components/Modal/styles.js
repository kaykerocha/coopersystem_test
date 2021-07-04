import styled from 'styled-components';

const ContainerModal = styled.Modal`
  align-items: center;
  justify-content: center;
`;

const ContainerMask = styled.View`
  background-color: #9c9c9c85;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Container = styled.View`
  background-color: #ffffff;
  flex: 1;
  margin: 180px 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContainerBottom = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
`;

const ModalTitle = styled.Text`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 40px;
  font-size: 20px;
  font-weight: bold;
  color: #005aa5;
`;

const ModalSubTitle = styled.Text`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 10px;
  font-size: 15px;
  color: #005aa5;
`;

export {
  ContainerModal,
  ContainerMask,
  Container,
  ContainerBottom,
  ModalTitle,
  ModalSubTitle,
};
