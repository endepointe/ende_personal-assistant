import Product from './Product';

const Home = () => {
  return (
    <div className="">
      <div className="">
        <div className="">
          {/* https://nextjs.org/docs/api-reference/next/image */}
          <img
            src="business-card.jpg" alt="business card" />
          <button>
            Shop now
          </button>
        </div>

        <div>
          <Product id="13534" title="The Lean Startup" price={30.12} image="https://via.placeholder.com/200x300?text=Product+Image" rating={4} />
          <Product id="" title="The Lean Startup" price={30.12} image="https://via.placeholder.com/200x300?text=Product+Image" rating={5} />
        </div>
        <div>
          <Product id="56354" title="The Lean Startup" price={30.12} image="https://via.placeholder.com/200x300?text=Product+Image" rating={5} />
          <Product id="45234" title="The Lean Startup" price={30.12} image="https://via.placeholder.com/200x300?text=Product+Image" rating={3} />
          <Product id="58284" title="The Lean Startup" price={30.12} image="https://via.placeholder.com/200x300?text=Product+Image" rating={4} />
        </div>

        <div>
          <Product id="98233" title="The Lean Startup" price={30.12} image="https://via.placeholder.com/200x300?text=Product+Image" rating={5} />
        </div>

      </div>
    </div>
  )
}

export default Home;