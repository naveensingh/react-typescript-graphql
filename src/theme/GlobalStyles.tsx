import { createGlobalStyle } from 'styled-components';
import css, { SystemStyleObject } from '@styled-system/css';

const GlobalStyles = createGlobalStyle`
  body, html {
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    ${css({
        margin: 'xxs',
        fontFamily: 'primary',
        fontSize: 'md',
        backgroundColor: 'neutral_100',
        color: 'text',
    } as SystemStyleObject)}
  }
  
  #root {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  div, span {
    box-sizing: border-box;
  }

  p {
    ${css({
        fontSize: 'md',
        margin: 'xxs',
    })}
  }

  a {
    ${css({
        color: 'primary',
    })}
  }

  a:hover{
    text-decoration: none;
  }

  h1, h2, h3, h4, p, a {
    margin: 0;
    ${css({
        fontFamily: 'primary',
        letterSpacing: '0px',
    })}
  }

  h1 {
    ${css({
        fontSize: 'xl',
    })}
  }

  h2 {
    ${css({
        fontSize: 'lg',
    })}
  }

  h3 {
    ${css({
        fontSize: 'md',
    })}
  }

  h4 {
    ${css({
        fontSize: 'md',
    })}
  }
`;

export default GlobalStyles;
