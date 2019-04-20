import * as React from 'react';

import HomeItem from './components/home-item';

import { css, StyleSheet } from 'aphrodite';
import { allItems } from 'constants/items';
import { IItem } from 'types';
import AppGrid from '@components/app-grid';
import AppList from '@components/app-list';
import FeatureCard from '@components/feature-card';

const styles = StyleSheet.create({
  descriptionLabel: {
    fontSize: '1.25em'
  },
  homeContainer: {
    maxWidth: '1100px',
    margin: 'auto'
  },
  titleContainer: {
    marginBottom: '3em'
  }, 
  featureLayout: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(37em, 1fr))',
    gridRowGap: '3em',
    justifyItems: 'start end',
    marginBottom: '3em'
  },
  appLayout: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(23em, 1fr))',
    gridRowGap: '3em',
    justifyItems: 'start center end'
  }
});

class Home extends React.Component {
  public render() {
    return (
      <div className={css(styles.homeContainer)}>
        <div className={css(styles.titleContainer)}>
          <h1>Try Ethereum</h1>
          <p className={css(styles.descriptionLabel)}>Want to experience the power of Ethereum? Here’s some cool things to get started with.</p>
        </div>

        <div className={css(styles.featureLayout)}>
          <FeatureCard/>
          <FeatureCard/>
        </div>

        <div className={css(styles.appLayout)}>
          <AppGrid/>
          <AppList/>
          <AppGrid/>
        </div>

      </div>
    );
  }
}

export default Home;
