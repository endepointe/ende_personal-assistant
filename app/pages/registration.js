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
      <div className="flex flex-col items-center select-none">
        <h1 className="text-3xl font-medium mt-10 mb-8">Create your account</h1>
        {/* PREFIXES:
            - at_                       account type 
            - 
      */}
        <form className="flex flex-col w-11/12">
          <fieldset>
            <section className="my-4">
              <legend>
                <h3 className="text-gray-400 font-semibold">ACCOUNT TYPE</h3></legend>
              <div className="flex justify-start items-center">
                <input
                  className="mr-4"
                  type="radio" id="at_independent" />
                <label htmlFor="at_independent" aria-label="account type independent">Independent</label>
              </div>

              <div className="flex justify-start items-center">
                <input
                  className="mr-4"
                  type="radio" id="at_company" />
                <label htmlFor="at_company" aria-label="account type company">Company</label>
              </div>
            </section>
            <section>
            </section>
          </fieldset>

          <section className="my-4">
            <h3 className="text-gray-400 font-semibold">PERSONAL INFORMATION</h3>
            <Input className="" func={setData} labelValue="*First Name" name="fname" id="fname" type="text" placeholder="Jane" for="fname" aria="first name" ></Input>

            <Input func={setData} labelValue="*Last Name" name="lname" id="lname" type="text" placeholder="Gren" for="lname" aria="last name" ></Input>

            <div className="flex flex-row items-center bg-white shadow-md border-gray-200 border-solid">
              <div className="flex justify-end w-32 mr-4 ml-2">
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
          </section>

          <section className="my-4">
            <h3 className="text-gray-400 font-semibold">PAYMENT INFORMATION</h3>
            <div className="flex flex-row justify-center items-center mt-0 px-4 pr-3 text-sm bg-app-bg shadow-none border-2 border-gray-200 border-solid">
              <div className="w-5/6">
                <p className="mr-1 text-sm text-gray-400 select-none">We use Stripe to make sure your assistant gets paid on time and to keep your personal bank and details secure. <strong className="font-bold text-gray-800">Click Save and Continue</strong> to set up your payments on Stripe.</p>
              </div>
              <div className="w-1/6">
                <a
                  className="flex justify-around items-center"
                  href="https://stripe.com" target="_blank">
                  <Image
                    width={100}
                    height={100}
                    src="/stripe-logo-slate.svg" />
                </a>
              </div>
            </div>
          </section>

          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white w-full mt-9 py-2 px-4 rounded shadow-md text-lg font-medium select-none">Save and Continue</button>
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
