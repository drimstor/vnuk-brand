import Ticker, { tickerText } from './Ticker';
import styles from './Ticker.module.scss';

const TickerV1 = () => {
  return (
    <>
      <Ticker text={tickerText} direction={'right'} background={'#f3eeea'} color={'#000'} />
      <div className={styles.tiker1Box}>
        <Ticker text={tickerText} direction={'left'} background={'#000'} color={'#f3eeea'} />
      </div>
    </>
  );
};

export default TickerV1;
