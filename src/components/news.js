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

const News = ({ lang }) => (
  <div>
    { lang === 'EN' ?
      <Container>
        <Header>News</Header>
        <GreyLine />
        <RedLine />
      </Container>
      :
      <Container>
        <Header>Новости</Header>
        <GreyLine />
        <RedLine />
      </Container>
    }
  </div>

)

export default News;
