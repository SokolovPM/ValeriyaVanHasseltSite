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

const Contact = ({ lang }) => (
  <div>
    { lang === 'EN' ?
      <Container>
        <Header>Contact</Header>
        <GreyLine />
        <RedLine />
        <Title>Do not hesitate to contact me, if you have any questions</Title>
        <Title><a href="https://www.facebook.com/valeri.kushchanova">Facebook</a> & <a href="https://www.youtube.com/channel/UCnmqUsdcYv83Dy4feOhWnkw">Youtube</a>: Valeriya van Hasselt</Title>
        <Title><a href="mailto:mylanguagelab@hotmail.com">Email: mylanguagelab@hotmail.com</a></Title>
        <Title>Skype: Valeriya van Hasselt</Title>
      </Container>
      :
      <Container>
        <Header>Контакты</Header>
        <GreyLine />
        <RedLine />
        <Title>Не стесняйтесь обращаться ко мне, если у вас есть какие-либо вопросы</Title>
        <Title><a href="https://www.facebook.com/valeri.kushchanova">Facebook</a> & <a href="https://www.youtube.com/channel/UCnmqUsdcYv83Dy4feOhWnkw">Youtube</a>: Valeriya van Hasselt</Title>
        <Title><a href="mailto:mylanguagelab@hotmail.com">Электронная почта: mylanguagelab@hotmail.com</a></Title>
        <Title>Skype: Valeriya van Hasselt</Title>
      </Container>
    }
  </div>

)

export default Contact;
