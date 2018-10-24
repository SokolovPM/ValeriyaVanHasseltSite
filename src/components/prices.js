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


const Prices = ({ lang }) => (
  <div>
    { lang === 'EN' ?
      <Container>
        <Header>Prices</Header>
        <Header>6 courses & 3 lessons packages</Header>
        <Header>“Abundance of choice is power in itself” - V. Van Hasselt</Header>
        <RedLine />
        <Text>
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
        8 lessons for 12 tenses, 2 lessons for Direct and Indirect speech and 10 lessons for all<br />
        Conditionals</Paragraph>
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
        <Paragraph>Giving a presentation skill, monologue, giving a talk on a specific topic, speak withtin a <br />
        limit </Paragraph>
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
        <Paragraph>Reading articles, listening to lectures, Cambridge student books exercise completion</Paragraph>
        <Title>8 lessons</Title>
        <span>280 euro</span>
        <Title>4 lessons</Title>
        <span>160 euro</span>
        <br />
        <br />


        </Text>
      </Container>
      :
      <Container>
        <Header>Цены</Header>
        <Header> 6 курсов & 3 пакета</Header>
        <Header>«Изобилие выбора - это уже сила» - V. Van Hasselt</Header>
        <RedLine />
        <Text>
        <RedTitle>8 уроков в пакете</RedTitle>
        <p>280 евро<br />
        2 месяца для использования<br />
        Бесплатная отмена урока за 24 часа</p>

        <RedTitle>4 урока в пакете</RedTitle>
        <p>150 евро<br />
        1 месяц для использования<br />
        Бесплатная отмена урока за 24 часа</p>

        <RedTitle>1 урок</RedTitle>
        <p>40 евро<br />
        2 недели для использования<br />
        Бесплатная отмена урока за 24 часа</p>

        <RedTitle>Курс грамматики</RedTitle>
        <Paragraph>12 времен, Прямая и косвенная речь, 5 типов условных предложений<br />
        8 уроков для 12 времен, 2 урока для прямой и косвенной речи и 10<br />
        уроков для всех условных предложений.</Paragraph>
        <Title>24 урока (2 урока в неделю)</Title>
        <span>840 евро</span>
        <Title>12 уроков</Title>
        <span>450 евро</span>
        <Title>10 уроков</Title>
        <span>400 евро</span>
        <br />
        <br />

        <RedTitle>Навыки чтения</RedTitle>
        <Paragraph>20 текстов, тактика, исползующаяся для ответов на вопросы,<br />
        повышение словарного запаса, анализ ошибок</Paragraph>
        <Title>20 уроков</Title>
        <span>700 евро</span>
        <Title>15 уроков</Title>
        <span>600 евро</span>
        <br />
        <br />

        <RedTitle>Аудирование</RedTitle>
        <Paragraph>20 TED Talks, их анализ, их пересказ, отвечаем на вопросы или <br />
        практикуем аудирование из TOEFL </Paragraph>
        <Title>20 уроков</Title>
        <span>700 евро</span>
        <Title>15 уроков</Title>
        <span>600 евро</span>
        <br />
        <br />

        <RedTitle>Разговорный английский</RedTitle>
        <Paragraph>Навыки презентации, монолог, беседа на определенную тему,<br />
        говорение с ограничением по времени, разговорный английский</Paragraph>
        <Title>15 уроков</Title>
        <span>525 евро</span>
        <Title>10 уроков</Title>
        <span>400 евро</span>
        <br />
        <br />

        <RedTitle>Письмо</RedTitle>
        <Paragraph>Эссе, Эссе "за и против", тактика, структура, примеры</Paragraph>
        <Title>15 уроков</Title>
        <span>555 евро</span>
        <Title>10 уроков</Title>
        <span>400 евро</span>
        <br />
        <br />

        <RedTitle>Словарный запас </RedTitle>
        <Paragraph>Чтение статей, прослушивание лекций, выполнение заданий из<br />
        учебников Кембриджа</Paragraph>
        <Title>8 уроков</Title>
        <span>280 евро</span>
        <Title>4 уроков</Title>
        <span>160 евро</span>
        <br />
        <br />


        </Text>
      </Container>
    }
  </div>

)

export default Prices;
