import Layout from "../components/Layout";
import PartnerNotice from '../components/stripe/PartnerNotice';
import Box from '../components/Box';
import TestModeInfo from '../components/stripe/TestModeInfo';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import { useRouter } from 'next/router';
/*
// The customer can opt out of providing their payment details.
// When the customer has posted a job, a badge will be displayed,
// indicating that they have verified their payment method.
*/
export default function paymentDetails() {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    router.push('/onboarding-review')
    return;
  }

  return (
    <Layout>
      <Box>
        <div className="flex-initial flex-col mt-12 mb-8">
          <h1 className="text-3xl font-medium">Payment details</h1>
          <p>Tell us how you'd like your payments to be made.</p>
        </div>

        <section className="flex justify-around mb-6">
          <button className="rounded bg-app-bg w-5/12 py-4">
            <AccountBalanceIcon
              fontSize="small" />
            <span className="ml-2">
              Bank account
            </span>
          </button>
          <button className="rounded bg-app-bg w-5/12 py-4">
            <CreditCardIcon
              fontSize="small" />
            <span className="ml-2">
              Credit card
            </span>
          </button>
        </section>

        <div className="my-6">
          <TestModeInfo />
        </div>

        <form className="flex flex-col">
          <section className="mb-8">
            <h3 className="text-gray-700 font-semibold text-sm mb-1 mt-8">Routing number</h3>
            <label htmlFor="routing-number" aria-label="routing number"></label>
            <input
              id="routing-number"
              name="routing-number"
              type="number"
              placeholder="11000000"
              className="w-full h-12 pl-4 my-1 flex flex-row items-center bg-app-bg border border-gray-300 border-solid rounded focus:outline-none focus:ring focus:border-blue-200" />

            <h3 className="text-gray-700 font-semibold text-sm mb-1 mt-8">Account number</h3>
            <label htmlFor="account-number" aria-label="account number"></label>
            <input
              id="account-number"
              name="account-number"
              type="number"
              placeholder="000123456789"
              className="w-full h-12 pl-4 my-1 flex flex-row items-center bg-app-bg border border-gray-300 border-solid rounded focus:outline-none focus:ring focus:border-blue-200" />
            <p className="text-sm text-gray-600 mt-1">
              Your bank account must be a checking account.
            </p>

            <h3 className="text-gray-700 font-semibold text-sm mb-1 mt-8">Confirm account number</h3>
            <label htmlFor="vaccount-number" aria-label="verify account number"></label>
            <input
              id="vaccount-number"
              name="vaccount-number"
              type="number"
              placeholder="000123456789"
              className="w-full h-12 pl-4 my-1 flex flex-row items-center bg-app-bg border border-gray-300 border-solid rounded focus:outline-none focus:ring focus:border-blue-200" />
          </section>

          <button
            onClick={handleSubmit}
            className="flex flex-row items-center justify-center bg-blue-500 text-white w-full py-2 px-4 rounded shadow-md text-lg font-medium select-none">
            Save
            </button>
        </form>
      </Box>
      <div className="mb-8">
        <PartnerNotice />
      </div>
    </Layout>
  )
}
