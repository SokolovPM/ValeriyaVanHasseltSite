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

class Layout extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Image width="800" src="/public/images/book.png" />
        </Header>
        <Wrapper>
          <MenuWrapper>
            <Menu>
              <LinkWrapper><Link href="/">Home</Link></LinkWrapper>
              <LinkWrapper><Link href="/news">News</Link></LinkWrapper>
              <LinkWrapper><Link href="/lesson">Lesson&Courses</Link></LinkWrapper>
              <LinkWrapper><Link href="/videos">Videos</Link></LinkWrapper>
              <LinkWrapper><Link href="prices">Prices</Link></LinkWrapper>
              <LinkWrapper><Link href="/contact">Contact</Link></LinkWrapper>
            </Menu>
          </MenuWrapper>
          <Content>
            {(this.props.location.pathname === '/' || this.props.location.pathname.includes('/home')) &&
              <Home />
            }
            {this.props.location.pathname.includes('/news') &&
              <News />
            }
            {this.props.location.pathname.includes('/lesson') &&
              <Offers />
            }
            {this.props.location.pathname.includes('/videos') &&
              <Videos />
            }
            {this.props.location.pathname.includes('/prices') &&
              <Prices />
            }
            {this.props.location.pathname.includes('/contact') &&
              <Contact />
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

export default Layout
