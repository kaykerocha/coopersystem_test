import styled from 'styled-components';

const Container = styled.View`
  flex-direction: column;
  justify-content: center;
  margin-bottom: ${props => props?.marginBottom ?? '0px'};
`;

export {Container};
