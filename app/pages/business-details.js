import Layout from "../components/Layout";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import PartnerNotice from '../components/stripe/PartnerNotice';

export default function businessDetails() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    router.push('/business-details')
    return;
  }

  return (
    <Layout>
      <div className="flex flex-col items-center select-none">
        <div className="flex flex-col w-11/12 min-h-screen">
          <div className="flex flex-col mt-12 mb-8">
            <h1 className="text-3xl font-medium">Your details</h1>
            <p>Tell us a few details about yourself and your business.</p>
          </div>

          <form className="flex flex-col">
            <section className="mb-8">
              <h3 className="text-gray-700 font-semibold text-sm mb-1">Legal name of person</h3>
              <label htmlFor="fname-legal" aria-label="legal first name"></label>
              <input
                id="fname-legal"
                name="fname"
                type="text"
                placeholder="First name"
                className="w-full h-12 pl-4 my-1 flex flex-row items-center bg-app-bg border border-gray-300 border-solid rounded focus:outline-none focus:ring focus:border-blue-200" />
              <label htmlFor="lname-legal" aria-label="legal last name"></label>
              <input
                id="lname-legal"
                name="lname"
                type="text"
                placeholder="Last name"
                className="w-full h-12 pl-4 my-1 flex flex-row items-center bg-app-bg border border-gray-300 border-solid rounded focus:outline-none focus:ring focus:border-blue-200" />
            </section>

            <section className="mb-8">
              <h3 className="text-gray-700 font-semibold text-sm mb-1">Business website</h3>
              <label htmlFor="website" aria-label="Business website"></label>
              <input
                id="website"
                name="website"
                type="text"
                placeholder="example.com"
                className="w-full h-12 pl-4 my-1 flex flex-row items-center bg-app-bg border border-gray-300 border-solid rounded focus:outline-none focus:ring focus:border-blue-200" />
              <p className="text-sm text-gray-600 mt-1">
                No website? You can share an app store link, a business social media profile, or <span className="font-semibold text-blue-500">add a product description instead</span>.</p>
            </section>

            {/* add spinning wheele while loading */}
            <button
              onClick={handleSubmit}
              className="flex flex-row items-center justify-center bg-blue-500 text-white w-full py-2 px-4 rounded shadow-md text-lg font-medium select-none">
              Next
              <KeyboardArrowRightIcon />
            </button>
          </form>
        </div>
      </div>
      <div className="mb-8">
        <PartnerNotice />
      </div>
    </Layout>
  )
}