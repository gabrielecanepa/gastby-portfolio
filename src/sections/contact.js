import React from 'react'
import styled from 'styled-components'
import { Contact as ContactBg } from 'backgrounds'
import { Inner } from 'layout'
import { Link, Svg, Typography } from 'components'

const ContactText = styled.p`
  color: ${({ theme }) => theme.foregrounds[1]};
  font-size: 1.25rem;

  @media (min-width: ${({ theme }) => theme.screens.md}) {
    font-size: 1.5rem;
  }
  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    font-size: 1.875rem;
  }
`

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.backgrounds[0]};
  padding: 1.5rem;
  text-align: center;
`

const GatsbyIcon = styled(props => (
  <Link target="_blank" to="https://www.gatsbyjs.org" {...props}>
    <Svg absolute={false} icon="gatsby" width={4.5} />
  </Link>
))`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  margin: 0 0.3rem;
  fill: ${({ theme }) => theme.backgrounds[0]};
  transition: fill 250ms ease-in-out;

  :hover {
    fill: ${({ theme }) => theme.colors.purpleDark};
  }
`

const GitHubLink = styled(props => (
  <Link target="_blank" to="https://github.com/gabrielecanepa/gatsby-portfolio#tools" {...props}>
    {' other amazing tools'}
  </Link>
))`
  color: ${({ theme }) => theme.backgrounds[0]};
  box-shadow: inset 0 -2px 0 0 ${({ theme }) => theme.backgrounds[0]}40;
  margin-left: 0.3rem;
`

const Contact = ({ offset }) => (
  <ContactBg offset={offset}>
    <Inner>
      <Typography variant="h2">{"Let's build something together?"}</Typography>
      <ContactText>
        {'Say '}
        <a href="mailto:hello@gabrielecanepa.com">{'hi'}</a>
        {' or find me on other platforms: '}
        <a href="https://github.com/gabrielecanepa" rel="noopener noreferrer" target="_blank">
          {'GitHub'}
        </a>
        {' and '}
        <a href="https://linkedin.com/in/gabrielecanepa" rel="noopener noreferrer" target="_blank">
          {'LinkedIn'}
        </a>
        {'.'}
      </ContactText>
    </Inner>
    <Footer>
      {`© ${new Date().getFullYear()}, with `}
      <GatsbyIcon />
      {' and'}
      <GitHubLink />
    </Footer>
  </ContactBg>
)

export default Contact