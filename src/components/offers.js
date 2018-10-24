import React from 'react';
import styled from 'styled-components';

import {
  Container,
  Image,
  Header,
  GreyLine,
  RedLine,
  Text,
  SubHeader
} from './common-components';

const Offers = ({ lang }) => (
  <div>
    { lang === 'EN' ?
      <Container>
        <Header>Lesson & Courses</Header>
        <GreyLine />
        <RedLine />
        <Text>
          <p>I offer you a variety of lessons and courses.</p>
          <p>1.You can choose to study English with me based on regular lessons during which we will<br />
          cover step by step everything and improve your level all-round.</p>
          <p>Firstly, I always check student’s level of English during our first “introduction lesson” free<br />
          of charge. I ask a student to read, speak and listen, tell me about him/herself. Based on this<br />
          interview I can build a scheme and an individual program. I can recommend you what<br />
          course you should take or how many lessons in total you need or how many lessons a<br />
          week you should have. Mind, these are all only my recommendation, eventually, you<br />
          should make a decision yourself.</p>
          <p>You can choose:</p>
          <p>8 lessons package<br />
          4 lessons package<br />
          1 lesson package</p>



          <p>Most students choose 8 lessons package and go for 2 lessons a week. Regularity is<br />
          important in terms of efficiency.</p>
          <p>2. You can also choose to improve a particular skill in English.</p>
        </Text>
        <SubHeader>Grammar course</SubHeader>
        <Text>
          <p>In this course we cover:</p>
          <p>12 tenses, Direct and Indirect speech, Conditionals 5 types<br />
          8 lessons for 12 tenses, 2 lessons for Direct and Indirect speech and 10 lessons for all<br />
          Conditionals</p>
          <p>This course is quiet intensive. The number of lessons indicated for each topic is very<br />
          approximate since every student works at his/her own pace!</p>
          <p>You can choose:</p>
          <p>24 lessons package (2 lessons a week)<br />
          12 lessons package<br />
          10 lessons package
          </p>
        </Text>
        <SubHeader>Reading skills</SubHeader>
        <Text>
          <p>In this course we cover:</p>
          <p>20 texts, analyse, tactics to answer, vocabulary boost, analyse the mistakes</p>
          <p>You can choose:</p>
          <p>20 lessons package<br />
          15 lessons package</p>
        </Text>
        <SubHeader>Listening</SubHeader>
        <Text>
          <p>In this course we will cover:</p>
          <p>20 Ted talks, analyse, retelling, answer the questions or</p>
          <p>TOEFL listening section practice</p>
          <p>You can choose:</p>
          <p>20 lessons package<br />
          15 lessons package</p>
        </Text>
        <SubHeader>Speaking</SubHeader>
        <Text>
          <p>In this course we will cover:</p>
          <p>Giving a presentation skill, monologue, giving a talk on a specific topic, speak within a<br />
            time limit, casual conversation</p>
          <p>You can choose:</p>
          <p>15 lessons package<br />
          10 lessons package</p>
        </Text>
        <SubHeader>Writing</SubHeader>
        <Text>
          <p>In this course we will cover:</p>
          <p>Opinion Essay, For and against Essay, tactics, structure, examples</p>
          <p>You can choose:</p>
          <p>15 lessons package<br />
          10 lessons package</p>
        </Text>
        <SubHeader>Vocabulary boost</SubHeader>
        <Text>
          <p>In this course we will cover:</p>
          <p>Reading articles, listening to lectures, Cambridge student books exercise</p>
          <p>You can choose:</p>
          <p>8 lessons package<br />
          4 lessons package</p>
        </Text>
      </Container>
      :
      <Container>
        <Header>Уроки & Курсы</Header>
        <GreyLine />
        <RedLine />
        <Text>
          <p>Я предлагаю различные уроки и курсы.</p>
          <p>1. Вы можете выбрать регулярные уроки для изучения английского<br />
          языка со мной, в ходе которых мы будем охватывать шаг за шагом все<br />
          и поднимать уровень языка вообщем.</p>
          <p>Во-первых, я всегда проверяю уже имеющийся уровень английского<br />
          языка на нашем первом уроке-знакомстве бесплатно. Я прошу вас <br />
          прочитать небольшой отрывок, рассказать о себе, посмотреть<br />
          небольшое видео и сделать пару грамматических заданий. На основе<br />
          этого интервью я могу построить схему и индивидуальную программу. Я<br />
          могу порекомендовать вам, какой курс вам больше подходит, или<br />
          сколько уроков вам нужно, или сколько уроков в неделю я бы вам<br />
          посоветовала взять. Разумеется, все это только моя рекомендация, в<br />
          конце концов, выбор остается за вами.</p>
          <p>Ты можешь выбрать:</p>
          <p>Пакет 8 уроков<br />
          Пакет 4 урока<br />
          Пакет 1 урок</p>



          <p>Большинство студентов выбирают 8 уроков по 2 занятия в неделю.<br />
          iРегулярность важна для эффективности.</p>
          <p>2. Вы также можете выбрать курс, чтобы улучшить определенный навык.</p>
        </Text>
        <SubHeader>Грамматический курс</SubHeader>
        <Text>
          <p>В этом курсе мы рассмотрим:</p>
          <p>12 времен, Прямая и косвенная речь, 5 типов условных предложений<br />
          8 уроков для 12 времен, 2 урока для прямой и косвенной речи и 10 <br />
          уроков для всех условных предложений.</p>
          <p>Этот курс очень интенсивный. Количество уроков, указанное для<br />
          каждой темы, очень приблизительное, так как каждый студент<br />
          работает в своем собственном темпе!</p>
          <p>Вы можете выбрать: </p>
          <p>24 урока (2 урока в неделю)<br />
          Пакет 12 уроков<br />
          Пакет 10 уроков
          </p>
        </Text>
        <SubHeader>Навыки чтения</SubHeader>
        <Text>
          <p>В этом курсе мы рассмотрим:</p>
          <p>20 текстов, тактика, исползующаяся для ответов на вопросы,<br />
          повышение словарного запаса, анализ ошибок</p>
          <p>Вы можете выбрать: </p>
          <p>Пакет 20 уроков<br />
          Пакет 15 уроков</p>
        </Text>
        <SubHeader>Аудирование</SubHeader>
        <Text>
          <p>В этом курсе мы рассмотрим:</p>
          <p>20 TED Talks, их анализ, их пересказ, отвечаем на вопросы или</p>
          <p>практикуем аудирование из TOEFL</p>
          <p>Вы можете выбрать: </p>
          <p>Пакет 20 уроков <br />
          Пакет 15 уроков</p>
        </Text>
        <SubHeader>Разговорный английский</SubHeader>
        <Text>
          <p>В этом курсе мы рассмотрим:</p>
          <p>Навыки презентации, монолог, беседа на определенную тему, <br />
            говорение с ограничением по времени, разговорный английский</p>
          <p>Вы можете выбрать:</p>
          <p>Пакет 15 уроков<br />
          Пакет 10 уроков</p>
        </Text>
        <SubHeader>Письмо</SubHeader>
        <Text>
          <p>В этом курсе мы рассмотрим:</p>
          <p>Эссе, Эссе "за и против", тактика, структура, примеры</p>
          <p>Вы можете выбрать: </p>
          <p>Пакет 15 уроков<br />
          Пакет 10 уроков</p>
        </Text>
        <SubHeader>Словарный запас</SubHeader>
        <Text>
          <p>В этом курсе мы рассмотрим:</p>
          <p>Чтение статей, прослушивание лекций, выполнение заданий из<br />
          учебников Кембриджа</p>
          <p>Вы можете выбрать: </p>
          <p>Пакет 8 уроков<br />
          Пакет 4 урока</p>
        </Text>
      </Container>
    }
  </div>
)

export default Offers;
