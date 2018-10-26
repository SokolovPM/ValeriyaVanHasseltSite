import React, { Component } from 'react'
import styled from 'styled-components';

import Home from '../home';
import News from '../news';
import Offers from '../offers';
import Videos from '../videos';
import Prices from '../prices';
import Contact from '../contact';

import { Image } from '../common-components';

const Container = styled.div`
`;
const Header = styled.div`
  text-align: center;
`;
const Wrapper = styled.div`
  display: flex;
`;
const MenuWrapper = styled.div`
  width: 15%;
  padding-top: 30px;
  min-width: 220px;
`;
const Menu = styled.div`
  margin-left: 30px;
  border-left: 4px solid red;
  padding: 5px 0;
`;
const LinkWrapper = styled.div`
  margin: 15px 10px;
`;
const Link = styled.a`
  all: none;
  color: black;
  text-decoration: none;
  font-size: 22px;
  font-style: italic;
`;
const Left = styled.div`
  width: 15%;
  min-width: 220px;
`
const Content = styled.div`
  width: 70%;
`;
const Footer = styled.div`
  height: 100px;
`;

const LanguageSelector = styled.div`
  display: flex;
  margin-left: 40px;
  margin-bottom: 20px;
`;

const Lang = styled.div`
  width: 30px;
  text-align: center;
  ${props => props.selected ? 'color: red' : 'color: black'};
  cursor: pointer;
`;

class Layout extends Component {

  constructor(props) {
    super(props)

    this.state = {
      lang: this.props.location.search || '?lang=EN'
    }
  }

  render() {
    const lang = this.state.lang;
    return (
      <Container>
        <Header>

          {(this.props.location.pathname === '/' || this.props.location.pathname.includes('/home')) &&
            <Image width="100%" src="/public/images/home.jpg" />
          }
          {this.props.location.pathname.includes('/news') &&
            <Image width="800" src="/public/images/book.png" />
          }
          {this.props.location.pathname.includes('/lesson') &&
            <Image width="100%" src="/public/images/lessons.jpg" />
          }
          {this.props.location.pathname.includes('/videos') &&
            <Image width="800" src="/public/images/book.png" />
          }
          {this.props.location.pathname.includes('/prices') &&
            <Image width="100%" src="/public/images/prices.jpg" />
          }
          {this.props.location.pathname.includes('/contact') &&
            <Image width="800" src="/public/images/book.png" />
          }
        </Header>
        <Wrapper>
          <MenuWrapper>
            <LanguageSelector>
              <Lang onClick={() => this.setState({ lang: '?lang=EN'})} selected={lang === '?lang=EN'}>EN</Lang>
              <Lang onClick={() => this.setState({ lang: '?lang=RU'})} selected={lang === '?lang=RU'}>RU</Lang>
            </LanguageSelector>
            <Menu>
              <LinkWrapper><Link href={`/${lang}`}>{ lang === '?lang=EN' ? 'Home' : 'Домашняя'}</Link></LinkWrapper>
              <LinkWrapper><Link href={`/news/${lang}`}>{ lang === '?lang=EN' ? 'News' : 'Новости'}</Link></LinkWrapper>
              <LinkWrapper><Link href={`/lesson/${lang}`}>{ lang === '?lang=EN' ? 'Lesson&Courses' : 'Уроки & Курсы'}</Link></LinkWrapper>
              <LinkWrapper><Link href={`/videos/${lang}`}>{ lang === '?lang=EN' ? 'Videos' : 'Видео'}</Link></LinkWrapper>
              <LinkWrapper><Link href={`/prices/${lang}`}>{ lang === '?lang=EN' ? 'Prices' : 'Цены'}</Link></LinkWrapper>
              <LinkWrapper><Link href={`/contact/${lang}`}>{ lang === '?lang=EN' ? 'Contact' : 'Контакты'}</Link></LinkWrapper>
            </Menu>
          </MenuWrapper>
          <Content>
            {(this.props.location.pathname === '/' || this.props.location.pathname.includes('/home')) &&
              <Home lang={lang} />
            }
            {this.props.location.pathname.includes('/news') &&
              <News lang={lang} />
            }
            {this.props.location.pathname.includes('/lesson') &&
              <Offers lang={lang} />
            }
            {this.props.location.pathname.includes('/videos') &&
              <Videos lang={lang} />
            }
            {this.props.location.pathname.includes('/prices') &&
              <Prices lang={lang} />
            }
            {this.props.location.pathname.includes('/contact') &&
              <Contact lang={lang} />
            }
          </Content>
          <Left />
        </Wrapper>

        <Footer>

        </Footer>
      </Container>
    )
  }
}

export default Layout;
