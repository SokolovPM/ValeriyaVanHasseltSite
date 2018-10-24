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

const Home = ({ lang }) => (
  <Container>
    {console.log('render', lang)}
    <GreyLine />
    <RedLine />
    { lang === 'EN' ?
      <Text>
        <p style={{ 'fontStyle': 'italic' }}>“It is more than just a skill, it is an opportunity, it is your<br />
        tool! It makes you independent! It is your knowledge, it is<br />
        your power!”</p>

        <p>Welcome to <b>My Language Laboratory!</b><br />
        Would you like to learn English in order to be independent in your<br />
        travels, work or research? Would you like to travel the world, get to<br />
        know people and dive into different cultures?</p>

        <p>My name is Valeriya Van Hasselt, and I am keen on teaching English.<br />
        I am interested in getting to understand what your personal<br />
        motivation to speak the language is, how you process the material<br />
        the best! We set the goal together and we get to it TOGETHER!<br />
        I believe that language acquisition is more than just drilling a set of<br />
        words and phrases, understanding grammar and being able to<br />
        communicate abroad. </p>

        <p>I strive to let people speak the second language as their first one. I<br />
        value individual approach to teaching. Each person is different as<br />
        his/her way of studying. My purpose is to cover all the aspects of<br />
        the language and make them automatic!<br />
        In order to do that I make lessons interesting and students curious,<br />
        curious to know. </p>

        <p>How I work<br />
        I give a lot of audio and video materials to watch, listen to, process,<br />
        understand, work with, discuss. Listening is how we perceive any<br />
        language at first. Moreover, videos give us an opportunity to include<br />
        pragmatic component into studying process. Most schools do not<br />
        teach it at all which leads to inability to communicate in the country<br />
        of the language or understand humor.<br />
        Not to mention, I believe that grammar has a system and can easily<br />
        be used properly when understood. It only takes time to make its<br />
        use automatic. Reading and writing is a must. You could also<br />
        practise your writing for different purposes.</p>
      </Text>
      :
      <Text>
        <p style={{ 'fontStyle': 'italic' }}>“Это больше, чем просто навык, это возможность, это ваш<br />
        инструмент! Это делает вас независимыми! Это ваши<br />
        знания, это ваша сила!”</p>

        <p>Добро пожаловать в <b>Мою Языковую Лабораторию!</b><br />
        Хотели бы вы выучить английский, чтобы быть независимым в своих<br />
        путешествиях, работе или исследованиях? Хотели бы вы<br />
        путешествовать по миру, познакомиться с людьми и погрузиться в<br />
        разные культуры?</p>

        <p>Меня зовут Валерия Ван Хасселт, и я преподаватель английского<br />
        языка. Мне интересна ваша личная мотивация для того, чтобы говорить<br />
        на языке, и как вы усваиваете материал лучше всего! Мы ставим цель<br />
        вместе, и мы добираемся до нее ВМЕСТЕ!</p>
        <p>Я считаю, что изучение языка - это нечто большее, чем просто<br />
        заучивание множества слов и фраз, понимание грамматики и<br />
        возможность общения за рубежом. Моя цель в том, чтобы люди<br />
        говорили на втором языке как на своем родном. Я ценю<br />
        индивидуальный подход к обучению. Каждый человек учится по-<br />
        разному. Моя цель - объяснить и оттренировать все аспекты языка и<br />
        сделать их автоматическими!</p>

        <p>Для того, чтобы достичь этого я делаю уроки интересными и студентов<br />
        любопытными, стараюсь привлечь их интерес к языку.</p>

        <p>Как я работаю<br />
        Я даю много аудио- и видеоматериалов, чтобы смотреть, слушать, <br />
        обрабатывать, понимать, работать, обсуждать. Прослушивание <br />
        аудиоматериалов - это то, как мы воспринимаем любой язык<br />
        изначально. Кроме того, видео дает нам возможность включить <br />
        прагматический компонент в процесс обучения. Большинство школ<br />
        вообще не учат этому, что приводит к неспособности общаться в стране<br />
        языка или понимать юмор и сарказм.</p>

        <p>Более того, я считаю, что у грамматики есть система, и она может быть<br />
        легко использована правильно, если понять, как она работает. Для ее<br />
        автоматического использования требуется только время и практика.</p>
      </Text>
    }

  </Container>
)

export default Home;
