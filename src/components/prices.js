import React from 'react';
import styled from 'styled-components';

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

const Quote = styled.span`
  font-size: 18px;
`;

const RedTitle = styled(Header)`
  color: red;
  margin: 0;
`;

const Paragraph = styled.p`
  margin: 0;
`;


const Prices = () => (
  <Container>
    <Header>Prices</Header>
    <Header>6 courses & 3 lessons packages</Header>
    <GreyLine />
    <RedLine />
    <Text>
    <p><Quote>“Abundance of choice is power in itself”</Quote> - V. Van Hasselt<br />
    You can choose to study English with me based on regular lessons during which we will cover<br />
    step by step everything and lift your level overal.</p>
    <RedTitle>8 lessons package</RedTitle>
    <p>280 euro<br />
    2 months to use<br />
    24 hour upfront cancellation for free</p>

    <RedTitle>4 lessons package</RedTitle>
    <p>150 euro<br />
    1 month to use<br />
    24 hour upfront cancellation for free</p>

    <RedTitle>1 lesson</RedTitle>
    <p>40 euro<br />
    2 weeks to use<br />
    24 hour upfront cancellation for free</p>

    <RedTitle>Grammar course</RedTitle>
    <Paragraph>12 tenses, Direct and Indirect speech, Conditionals 5 types<br />
    8 lessons for 12 tenses, 2 lessons for Direct and Indirect speech and 10 lessons for<br />
    all Conditionals</Paragraph>
    <Title>24 lessons package (2 lessons per week)</Title>
    <span>840 euro</span>
    <Title>12 lessons package</Title>
    <span>450 euro</span>
    <Title>10 lessons package</Title>
    <span>400 euro</span>
    <br />
    <br />


    <RedTitle>Reading skills</RedTitle>
    <Paragraph>20 texts, analyse, tactics to answer, vocabulary boost, analyse the mistakes </Paragraph>
    <Title>20 lessons</Title>
    <span>700 euro</span>
    <Title>15 lessons</Title>
    <span>600 euro</span>
    <br />
    <br />

    <RedTitle>Listening</RedTitle>
    <Paragraph>20 Ted talks, analyse, retelling, answer the questions</Paragraph>
    <Title>20 lessons</Title>
    <span>700 euro</span>
    <Title>15 lessons</Title>
    <span>600 euro</span>
    <br />
    <br />

    <RedTitle>Speaking</RedTitle>
    <Paragraph>Giving a presentation skill, monologue, giving a talk on a specific topic, speak<br />
    withtin a limit </Paragraph>
    <Title>15 lessons</Title>
    <span>525 euro</span>
    <Title>10 lessons</Title>
    <span>400 euro</span>
    <br />
    <br />

    <RedTitle>Writing</RedTitle>
    <Paragraph>Opinion Essay, For and against Essay, tactics, structure, examples</Paragraph>
    <Title>15 lessons</Title>
    <span>555 euro</span>
    <Title>10 lessons</Title>
    <span>400 euro</span>
    <br />
    <br />

    <RedTitle>Vocabulary boost</RedTitle>
    <Paragraph>Reading articles, listening to lectures, Cambridge student books exercise</Paragraph>
    <Title>8 lessons</Title>
    <span>280 euro</span>
    <Title>4 lessons</Title>
    <span>160 euro</span>
    <br />
    <br />


    </Text>
  </Container>
)

export default Prices;
