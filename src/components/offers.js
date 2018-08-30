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

const Offers = () => (
  <Container>
    <Header>Lesson & Courses</Header>
    <GreyLine />
    <RedLine />
    <Text>
      <p>I offer you a variety of lessons and courses.</p>
      <p>1.You can choose to study English with me based on regular lessons during which we will<br />
      cover step by step everything and lift your level overal.</p>
      <p>Firstly, I always check student’s level of English during our first “introduction lesson” free<br />
      of charge. I ask a student to read, speak and listen, tell me about him/herself. Based on<br />
      this interview I can build a scheme and an individual program. I can recommend you what<br />
      course you should take or how many lessons in total you need or how many lessons a<br />
      week you should have. Mind, these are all only my recommendation, in the end of the day,<br />
      you should make a decision yourself.</p>
      <p>You can choose:</p>
      <p>8 lessons package<br />
      4 lessons package<br />
      1 lesson package</p>



      <p>Most students choose 8 lessons package and go for 2 lessons a week. Regularity is<br />
      important for efficiency.</p>
      <p>2. You can also choose to improve a particular skill in English language.</p>
    </Text>
    <SubHeader>Grammar course</SubHeader>
    <Text>
      <p>In this course we cover:</p>
      <p>12 tenses, Direct and Indirect speech, Conditionals 5 types<br />
      8 lessons for 12 tenses, 2 lessons for Direct and Indirect speech and 10 lessons for all<br />Conditionals</p>
      <p>This course is quiet intensive. The number of lessons indicated for each topic is very<br />
      approximate since every student works at his\her own pace!</p>
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
        limit, casual conversation</p>
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
)

export default Offers;
