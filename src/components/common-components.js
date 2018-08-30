import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  font-size: 16px;
  text-align: center;
  font-style: italic;
  color: grey;
`;

export const Image = styled.img`

`;

export const Header = styled.div`
  margin: 30px auto;
  font-size: 32px;
  font-weight: 700;
  font-style: italic;
`;
export const GreyLine = styled.div`
  width: 600px;
  margin: 10px auto;
  border-bottom: 5px solid grey;
`;
export const RedLine = styled.div`
  width: 400px;
  margin: 10px auto;
  border-bottom: 3px solid red;
`;
export const Text = styled.div`
  margin: 20px auto;
`;
export const SubHeader = styled.div`
  font-weight: 700;
`;
export const Title = styled(Header)`
  color: grey;
  margin: 0;
  margin-top: 10px;
  font-weight: 500;
`;
