import * as React from 'react';

import HomeItem from './components/home-item';

import { css, StyleSheet } from 'aphrodite';
import { allItems } from 'constants/items';
import { IItem } from 'types';

const styles = StyleSheet.create({
  descriptionLabel: {
    fontSize: '1.25em'
  },
  homeLayout: {

  },
  sectionItems: {
    display: 'grid',
    gridColumnGap: '2em',
    gridRowGap: '3em',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))'
  }
});

class Home extends React.Component {
  public render() {
    const categories = this.groupBy(allItems, 'category');
    return (
      <div>
        <div className='container'>
          <h1>Try Ethereum</h1>
          <p className={css(styles.descriptionLabel)}>Want to experience the power of Ethereum? Here’s some cool things to get started with.</p>
        </div>

        <div className='container'>
          <hr/>
        </div>

        {
          Object.keys(categories).map((key) => {
            const items = categories[key];
            return (
              <div className='container'>
                <div>
                  <h2>{key}</h2>
                  <div className={css(styles.sectionItems)}>
                    {this.itemsForCategory(items)}
                  </div>
                </div>
              </div>
            )
          })
        }

      </div>
    );
  }

  private itemsForCategory(items: IItem[]): any {
    return items.map((item) => {
      return (
        <HomeItem 
          key={item.name}
          name={item.name} 
          description={item.description}
          background={item.background}
          image={item.image}
          maxWidth={item.maxWidth}
          category={item.category}
          url={item.url}
        />
      );
    });
  }

  private groupBy(xs: any, key: string) {
    return xs.reduce((rv: any, x: string) => {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };
  
}

export default Home;
