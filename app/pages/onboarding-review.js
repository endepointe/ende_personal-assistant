import Layout from '../components/Layout';
import Box from '../components/Box';
import { useRouter } from 'next/router';
import EditIcon from '@material-ui/icons/Edit';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

export default function onboardingReview() {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    router.push('/dashboard')
    return;
  }

  return (
    <Layout>
      <Box>
        <div className="flex-initial flex-col mt-12 mb-4">
          <h1 className="text-3xl font-medium mb-3">Let's review those details</h1>
          <p>You're almost ready to begin to hire your first personal assistant. Double-check the info you provided to make sure it's correct.</p>
        </div>

        <section className="mb-4">
          <h3 className="text-gray-700 font-semibold text-sm mb-1 mt-8">BUSINESS DETAILS</h3>
          <button className="w-full flex flex-row justify-between bg-blue-50 border rounded text-xs p-4">
            <div className="flex flex-col items-start">
              <span className="font-bold">Your business</span>
              <span className="mt-1">website.name</span>
            </div>
            <div>
              <EditIcon
                fontSize="small"
                className="text-gray-500" />
            </div>
          </button>
        </section>

        <section className="mb-4">
          <h3 className="text-gray-700 font-semibold text-sm mb-1 mt-8">MANAGEMENT AND OWNERSHIP</h3>
          <button className="w-full flex flex-row justify-between bg-blue-50 border rounded text-xs p-4">

            <div className="flex flex-col items-start">
              <span className="font-bold">Account holder name</span>
              <span className="mt-1">permission level</span>
              <span className="mt-2 text-yellow-500">
                <AccessTimeIcon
                  fontSize="small" />
                Information required soon
              </span>
            </div>
            <div>
              <EditIcon
                fontSize="small"
                className="text-gray-500" />
            </div>
          </button>
        </section>

        <section className="mb-4">
          <h3 className="text-gray-700 font-semibold text-sm mb-1 mt-8">PAYOUT DETAILS</h3>
          <button className="w-full flex flex-row justify-between bg-blue-50 border rounded text-xs p-4">
            <div className="flex flex-row">
              <AccountBalanceIcon
                fontSize="small" />
              <div className="ml-3 flex flex-col items-start">
                <span className="font-bold text-base">Your bank name</span>
                <span className="mt-1">last four of card number 1234</span>
              </div>
            </div>
            <div>
              <EditIcon
                fontSize="small"
                className="text-gray-500" />
            </div>
          </button>
        </section>

        <p className="text-xs w-full my-4">
          By clicking Submit, you agree to the <span className="text-blue-700">Connected Account Agreement</span>, to receiving autodialed text messages from Stripe, and you certify that the information you have provided to Stripe is complete and correct. Stripe, Inc. is a registered ISO of Wells Fargo Bank, N.A., Concord, CA
        </p>

        <button
          onClick={handleSubmit}
          className="mt-4 flex flex-row items-center justify-center bg-blue-500 text-white w-full py-2 px-4 rounded shadow-md text-lg font-medium select-none">
          Submit
        </button>

      </Box>
    </Layout>
  )
}