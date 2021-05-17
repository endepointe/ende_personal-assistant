import Layout from '../components/Layout';
import Image from 'next/image';
import Input from '../components/form/input';
import {
  useRouter,
} from 'next/router';
import {
  useState,
  useEffect,
} from 'react';

export default function registration({ countrySpecs }) {
  const router = useRouter();
  const [data, setData] = useState({});
  const [countries, setCountries] = useState({});

  useEffect(() => {
    // setCountries(countrySpecs.data)
  }, [countries])

  const handleSubmit = async (e) => {
    e.preventDefault();
    router.push('/registration')
    return;
  }

  return (
    <Layout>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-medium mt-10 mb-8">Create your account</h1>
        {/* PREFIXES:
            - at_                       account type 
            - 
      */}
        <form className="flex flex-col w-11/12">
          <fieldset>
            <section>
              <legend><h3>ACCOUNT TYPE</h3></legend>
              <div className="flex justify-around items-center">
                <input type="radio" id="at_independent" />
                <label htmlFor="at_independent" aria-label="account type independent">Independent</label>
              </div>

              <div className="flex justify-around items-center">
                <input type="radio" id="at_company" />
                <label htmlFor="at_company" aria-label="account type company">Company</label>
              </div>
            </section>
            <section>
            </section>
          </fieldset>

          <h3>PERSONAL INFORMATION</h3>
          <Input func={setData} labelValue="*First Name" name="fname" id="fname" type="text" placeholder="Jane" for="fname" aria="first name" ></Input>

          <Input func={setData} labelValue="*Last Name" name="lname" id="lname" type="text" placeholder="Gren" for="lname" aria="last name" ></Input>

          <div className="flex flex-row items-center bg-white shadow-md border-gray-200 border-solid">
            <div className="flex justify-end w-28 mr-2">
              <label htmlFor="country"
                aria-label="country">Country</label>
            </div>
            <select
              id="country"
              placeholder="Country"
              name="country"
              className="w-full h-12 ">
              {/* get 2-char list of country codes */}
              <option value="US">United States</option>
              {/* see todo list below */}
              {/* {Object.values(countries).map(c => {
                return (
                  <option
                    key={c.id}
                    value={c.id}>{c.id}</option>)
              })} */}
            </select>
          </div>

          <h3 className="mt-12">PAYMENT INFORMATION</h3>
          <div className="flex flex-row justify-center items-center mt-0 py-4 px-8 text-sm bg-app-bg shadow-none border-2 border-gray-200 border-solid">
            <p>We use Stripe to make sure your assistant gets paid on time and to keep your personal bank and details secure. Click Save and continue to set up your payments on Stripe.</p>
            <div className="w-64">
              <a href="https://stripe.com" target="_blank">
                <Image
                  width={100}
                  height={200}
                  src="/stripe-logo-slate.svg" />
              </a>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white w-full mt-9 py-2 px-4 rounded shadow-md text-lg font-medium">Save & Continue</button>
        </form>
      </div >
    </Layout >
  );
}

// Todo:
//    - to there is excessive network calling for data that does 
//    change often.
//    - to improve this, i could create a file to store these 
//    country values and update them as needed per stripe
//    country update
export async function getStaticProps(ctx) {
  const stripe = require('stripe')('sk_test_2M9pPlIvVDngmxxDqIawc2Lq');
  // lists all country objects available in the stripe api 
  // const countrySpecs = await stripe.countrySpecs.list({
  //   limit: 100,
  // });
  return {
    props: {
      // countrySpecs: countrySpecs,
    }
  }
}
