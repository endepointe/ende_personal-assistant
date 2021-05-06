import styles from '../styles/Home.module.css';
import Product from './Product';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home_container}>
        <div className={styles.home_header}>
          <img
            className={styles.home_image}
            src="business-card.jpg" alt="business card" />
          <button className={styles.home_shopNowButton}>
            Shop now
          </button>
        </div>

        <div className={styles.home_row}>
          <Product id="13534" title="The Lean Startup" price={30.12} image="https://via.placeholder.com/200x300?text=Product+Image" rating={4} />
          <Product id="" title="The Lean Startup" price={30.12} image="https://via.placeholder.com/200x300?text=Product+Image" rating={5} />
        </div>

        <div className={styles.home_row}>
          <Product id="56354" title="The Lean Startup" price={30.12} image="https://via.placeholder.com/200x300?text=Product+Image" rating={5} />
          <Product id="45234" title="The Lean Startup" price={30.12} image="https://via.placeholder.com/200x300?text=Product+Image" rating={3} />
          <Product id="58284" title="The Lean Startup" price={30.12} image="https://via.placeholder.com/200x300?text=Product+Image" rating={4} />
        </div>

        <div className={styles.home_row}>
          <Product id="98233" title="The Lean Startup" price={30.12} image="https://via.placeholder.com/200x300?text=Product+Image" rating={5} />
        </div>

      </div>
    </div>
  )
}

export default Home;