import React from 'react';

import {
  Container,
  Image,
  Header,
  GreyLine,
  RedLine,
  Text,
  SubHeader,
  Title
} from './common-components';

const Contact = () => (
  <Container>
    <Header>Contact</Header>
    <GreyLine />
    <RedLine />
    <Title>Do not hesitate to contact me, if you have any questions</Title>
    <Title><a href="https://www.facebook.com/valeri.kushchanova">Facebook</a> & <a href="https://www.youtube.com/channel/UCnmqUsdcYv83Dy4feOhWnkw">Youtube</a>: Valeriya van Hasselt</Title>
    <Title><a href="mailto:mylanguagelab@hotmail.com">Email: mylanguagelab@hotmail.com</a></Title>
    <Title>Skype: Valeriya van Hasselt</Title>
  </Container>
)

export default Contact;
