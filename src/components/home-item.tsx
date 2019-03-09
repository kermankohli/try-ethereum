import * as React from 'react';

import { css, StyleSheet } from 'aphrodite';
import { IItem } from 'constants/items';

import disclosureArrow from '../images/disclosure.svg';

const styles = StyleSheet.create({
  descriptionContainer: {
    color: '#2C2C2C',
    display: 'flex',
    margin: 'auto 1em'
  },
  image: {
    maxHeight: '100%',
    maxWidth: '100%',
    objectFit: 'contain'
  },
  imageContainer: {
    display: 'flex',
    height: '150x',
    justifyContent: 'center',
    width: '200px'
  },
  itemContainer: {
    ':hover': {
      opacity: 0.85,
      transform: 'scale(1.03)',
      transition: '1.2s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.6s ease-out',
      transitionDelay: 0
    },
    border: '0x solid',
    borderRadius: '13px',
    boxShadow: '0px 20px 40px -10px rgba(0, 0, 0, 0.15)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    textDecoration: 'none'
  },
  nameContainer: {
    alignItems: 'center',
    color: 'white',
    display: 'flex',
    height: '120px',
    justifyContent: 'center'
  }
});

class HomeItem extends React.Component<IItem> {
  public render() {
    return (
      <a className={css(styles.itemContainer)} href={this.props.url}>
        <div className={css(styles.nameContainer)} style={{background: this.props.background}}>
          <div className={css(styles.imageContainer)} style={{maxWidth: `${this.props.maxWidth}`}}>
            <img src={this.props.image} className={css(styles.image)}/>
          </div>
        </div>
        <div className={css(styles.descriptionContainer)}>
          <p>{this.props.description}</p>
          <img src={disclosureArrow}/>
        </div>
      </a>
    )
  }
}

export default HomeItem;