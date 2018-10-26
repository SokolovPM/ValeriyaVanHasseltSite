import React from 'react';

import {
  Container,
  Image,
  Header,
  GreyLine,
  RedLine,
  Text,
  SubHeader
} from './common-components';

const Videos = ({ lang }) => (
  <div>
    { lang === '?lang=EN' ?
      <Container>
        <Header>Videos</Header>
        <GreyLine />
        <RedLine />
        <Text>
          <p>On this page I would like to present you a selection of my videos about<br />
          <b>English language</b>, its <b>grammar</b> and <b>structure</b></p>
        </Text>
      </Container>
      :
      <Container>
        <Header>Видео</Header>
        <GreyLine />
        <RedLine />
        <Text>
          <p>На этой странице я хотел бы представить вам подборку моих видеоматериалов<br />
          об <b>английском языке</b>, его <b>грамматике</b> и <b>структуре</b></p>
        </Text>
      </Container>
    }
  </div>

)

export default Videos;
