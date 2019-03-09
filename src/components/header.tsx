import * as React from 'react';

import { css, StyleSheet } from 'aphrodite';

import twitterLogo from '../images/twitter.svg';

const styles = StyleSheet.create({
  followMeText: { 
    color: '#00ADE2',
    fontWeight: 600,
    marginLeft: '0.5em'
  },
});

class Header extends React.Component {
  public render() {
    return (
      <a className='container' style={{display: 'flex', textDecoration: 'none'}} href='https://twitter.com/kermankohli'>
        <img src={twitterLogo}/>
        <p className={css(styles.followMeText)}>Follow me @kermankohli</p>
      </a>
    )
  }
}

export default Header;