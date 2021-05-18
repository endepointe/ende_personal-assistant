import Layout from '../components/Layout';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import PartnerNotice from '../components/stripe/PartnerNotice';
import { useRouter } from 'next/router';

export default function authorization() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    router.push('/business-details')
    return;
  }
  return (
    <Layout>
      <div className="flex flex-col items-center select-none">
        <div className="flex flex-col w-11/12 min-h-screen">
          <h1 className="text-3xl font-medium mt-10 mb-8">Verify your account</h1>
          <form className="flex flex-col">
            <div className="my-4">
              <section className="mb-8">
                <h3 className="text-gray-700 font-semibold text-sm mb-1">Country</h3>
                <div className="flex flex-row items-center bg-white shadow-md border-gray-200 border-solid">
                  <select
                    id="country"
                    placeholder="Country"
                    name="country"
                    className="w-full h-12 pl-3 ">
                    {/* get 2-char list of country codes */}
                    {/* use getStaticProps */}
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
                <p className="text-sm text-gray-600 mt-1">Please select the country where you or your business will legally operate.</p>
              </section>

              <section className="mb-8">
                <h3 className="text-gray-700 font-semibold text-sm mb-1">Mobile number</h3>
                <div className="flex flex-row items-center bg-white shadow-md border-gray-200 border-solid">
                  <label
                    id="mobile"
                    className="w-32"
                    htmlFor="mobile"></label>
                </div>
                <div className="flex flex-row items-center bg-white shadow-md border-gray-200 border-solid">
                  <select
                    id="ccode"
                    className="w-16 pl-3"
                    placeholder="US"
                    name="ccode"><option value="US">US</option></select>
                  <label htmlFor="mobile" aria-label="Phone number"></label>
                  <input
                    id="mobile"
                    name="mobile"
                    placeholder="(201) 555-1234"
                    type="tel"
                    className="h-12 pl-12" />
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  We will text this number to verify your account. In test mode, you can skip this with <span className="font-semibold text-blue-500">the test phone number</span>.</p>
              </section>

              <section className="mb-8">
                <h3 className="text-gray-700 font-semibold text-sm mb-1">Email</h3>
                <div className="flex flex-row items-center bg-white border-gray-200 shadow-md border-solid">
                  <label htmlFor="email" aria-label="Account email"></label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="prefill email from previous page"
                    className="h-12 w-full pl-5" />
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  We will email you with important updates.
              </p>
              </section>
            </div>

            <button
              onClick={handleSubmit}
              className="flex flex-row items-center justify-center bg-blue-500 text-white w-full py-2 px-4 rounded shadow-md text-lg font-medium select-none">
              Next
              <KeyboardArrowRightIcon />
            </button>
          </form>
        </div >
      </div>
      <div className="mb-8">
        <PartnerNotice />
      </div>
    </Layout>
  )
}