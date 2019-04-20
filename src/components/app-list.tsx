import * as React from 'react';

import { css, StyleSheet } from 'aphrodite';

import compoundLogo from '../images/compound-square.png';

const styles = StyleSheet.create({
  container: {
    width: '20em',
    height: '20em',
    padding: '1.25em',
    borderRadius: '1.5em',
    background: 'white',
    boxShadow: 'rgba(0, 0, 0, 0.15) 0px 20px 40px -10px !important'
  },
  iconItems: {
    marginTop: '2em',
    display: 'grid',
    gridRowGap: '1em',
    gridTemplateColumns: '17em'
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  descriptionContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: '1em'
  },
  basicTextStyling: {
    lineHeight: '0',
    margin: '0.75em 0'
  }
});

class AppList extends React.Component {
  public render() {
    return (
     <div className={css(styles.container)}>
       <h5>Earn</h5>
       <h4>Make money</h4>
       <div className={css(styles.iconItems)}>
       {
         Array(3).fill(
           <div className={css(styles.rowContainer)}>
            <img src={compoundLogo} style={{width: '4em', height: '4em'}}/>
            <div className={css(styles.descriptionContainer)}>
              <p className={css(styles.basicTextStyling)} style={{fontSize: '1.2em'}}>Gitcoin</p>
              <p className={css(styles.basicTextStyling)} style={{color: '#6C6C6C' }}>Fix issues on OSS</p>
            </div>
           </div>
        )
       }
       </div>
     </div>
    )
  }
}

export default AppList;