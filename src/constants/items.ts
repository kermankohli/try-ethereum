import argentLogo from '../images/argent.svg';
import balanceLogo from '../images/balance.png';
import bountiesLogo from '../images/bounties.svg';
import burnerLogo from '../images/burner.png';
import centLogo from '../images/cent.png';
import coinbaseLogo from '../images/coinbase.svg';
import compoundLogo from '../images/compound.png';
import dharmaLogo from '../images/dharma.png';
import kyberLogo from '../images/kyber.svg';
import localEthereumLogo from '../images/localethereum.svg';
import makerLogo from '../images/maker.png';
import radarLogo from '../images/radar.png';
import uniswapLogo from '../images/uniswap.svg';
import gitcoinLogo from '../images/gitcoin.svg';
import zerionLogo from '../images/zerion.svg';
import tokenaryLogo from '../images/tokenary.png';
import foamLogo from '../images/foam.png';
import mycryptoLogo from '../images/mycrypto-white.svg';
import cdpsaverLogo from '../images/cdpsaver.png';

import { Category } from './categories';
import { IItem } from 'types';

const acquireItems: IItem[] = [
  {
    background: 'rgb(22, 82, 240)',
    category: Category.ONRAMP,
    description: 'Purchase crypto with your credit card. Verification required.',
    image: coinbaseLogo,
    maxWidth: '120px',
    name: 'Coinbase',
    url: 'https://coinbase.com'
  },
  {
    background: '#515480',
    category: Category.ONRAMP,
    description: 'Purchase Ethereum directly via bank transfer. No verification needed.',
    image: localEthereumLogo,
    name: 'LocalEthereum',
    url: 'https://localethereum.com'
  }
];

const exchangeItems: IItem[] = [
  {
    background: '#00C686',
    category: Category.EXCHANGE,
    description: 'Give a token, get a token back. Low rates and deep liquidity.',
    image: kyberLogo,
    maxWidth: '140px',
    name: 'Kyber',
    url: 'https://kyberswap.com/swap/'
  },
  {
    background: '#AF0AE1',
    category: Category.EXCHANGE,
    description: 'Want to sell your tokens and earn passive income?',
    image: uniswapLogo,
    name: 'Uniswap',
    url: 'https://uniswap.exchange/swap/'
  },
  {
    background: '#0B0B0B',
    category: Category.EXCHANGE,
    description: 'For sophisticated traders that want a non-custodial solution.',
    image: radarLogo,
    maxWidth: '100px',
    name: 'Radar',
    url: 'https://radarrelay.com/'
  }
];

const walletItems: IItem[] = [
  {
    background: '#117994',
    category: Category.WALLET,
    description: 'Make a wallet and manage your crypto. Also works with Ledger, Trezor, and MetaMask.',
    image: mycryptoLogo,
    maxWidth: '140px',
    name: 'MyCrypto',
    url: 'https://mycrypto.com'
  },
  {
    background: '#021F3C',
    category: Category.WALLET,
    description: 'A beautiful crypto wallet with access to permission-less financial services.',
    image: balanceLogo,
    maxWidth: '140px',
    name: 'Balance',
    url: 'https://balance.io'
  },
  {
    background: '#437AED',
    category: Category.WALLET,
    description: 'Use crypto apps with a Safari extension or an iOS app.',
    image: tokenaryLogo,
    maxWidth: '140px',
    name: 'Tokenary',
    url: 'https://tokenary.io'
  },
  {
    background: '#3a3a3a',
    category: Category.WALLET,
    description: 'The first smart wallet. Easy setup, no fees and protection from loss or theft. Join our waiting list!',
    image: argentLogo,
    maxWidth: '140px',
    name: 'Argent',
    url: 'https://www.argent.xyz'
  },
  {
    background: '#F24923',
    category: Category.WALLET,
    description: 'Send and receive tokens immediately.\n Very low fees and fast transaction times.',
    image: burnerLogo,
    maxWidth: '130px',
    name: 'Burner Wallet',
    url: 'https://xdai.io'
  }
];

const financeItems: IItem[] = [
  {
    background: '#00BC97',
    category: Category.FINANCE,
    description: 'Take out a loan to generate stable coins (worth $1 USD each)',
    image: makerLogo,
    maxWidth: '140px',
    name: 'Maker',
    url: 'https://cdp.makerdao.com/'
  },
  {
    background: '#262626',
    category: Category.FINANCE,
    description: 'Take out a loan. All you need is collateral, no paperwork or permission needed.',
    image: dharmaLogo,
    maxWidth: '150px',
    name: 'Dharma',
    url: 'https://www.dharma.io/'
  },
  {
    background: '#18452B',
    category: Category.FINANCE,
    description: 'Algorithmic lending and borrowing with a simple interface.',
    image: compoundLogo,
    name: 'Compound',
    url: 'https://compound.finance/'
  },
  {
    background: '#1F2066',
    category: Category.FINANCE,
    description: 'Trade and manage your digital assets across different wallets in one interface.',
    image: zerionLogo,
    name: 'Zerion',
    url: 'https://zerion.io/'
  },
  {
    background: '#12273F',
    category: Category.FINANCE,
    description: 'Your bridge to decentralized and open Finance',
    image: instadappLogo,
    name: 'InstaDApp',
    url: 'https://instadapp.io/'
  },
  {
    background: '#20474D',
    category: Category.FINANCE,
    description: 'Manage your MakerDAO CDPs the easy way. Even on the go.',
    image: cdpsaverLogo,
    name: 'CDP Saver',
    url: 'https://cdpsaver.com/'
  }
];

const earnItems: IItem[] = [
  {
    background: '#15003e',
    category: Category.EARN,
    description: 'Earn crypto by fixing issues on open-source repositories.',
    image: gitcoinLogo,
    maxWidth: '130px',
    name: 'Gitcoin',
    url: 'https://gitcoin.co/'
  },
  {
    background: '#5A28C6',
    category: Category.EARN,
    description: 'Bounties on any task, paid in any token.',
    image: bountiesLogo,
    maxWidth: '180px',
    name: 'Bounties Network',
    url: 'https://bounties.network/'
  },
  {
    background: '#A77777',
    category: Category.EARN,
    description: 'Add and curate points on a map of the world.',
    image: foamLogo,
    name: 'FOAM Map',
    url: 'https://map.foam.space'
  }

];

const socialItems: IItem[] = [
  {
    background: '#000000',
    category: Category.SOCIAL,
    description: 'Social network that earns you money as you create, share & curate good content.',
    image: centLogo,
    maxWidth: '42px',
    name: 'Cent',
    url: 'https://cent.co/'
  }
];

export const allItems = [
  ...acquireItems,
  ...exchangeItems,
  ...walletItems,
  ...financeItems,
  ...earnItems,
  ...socialItems
];
