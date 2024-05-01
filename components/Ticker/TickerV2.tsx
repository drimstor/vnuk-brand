import Ticker, { tickerText } from './Ticker';
import styles from './Ticker.module.scss';

const TickerV2 = () => {
  return (
    <>
      <div className={styles.tiker2Box}>
        <Ticker text={tickerText} direction={'right'} background={'#f3eeea'} color={'#000'} />
      </div>
      <Ticker text={tickerText} direction={'left'} background={'#000'} color={'#f3eeea'} />
    </>
  );
};

export default TickerV2;
