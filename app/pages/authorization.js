import Layout from '../components/Layout';
import Input from '../components/form/Input';
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
        <h1 className="text-3xl font-medium mt-10 mb-8">Verify your account</h1>
        {/* PREFIXES:
          - at_                       account type 
          - 
    */}
        <form className="flex flex-col w-11/12">
          <div className="my-4">
            <h3 className="text-gray-400 font-semibold">Country</h3>
            <div className="flex flex-row items-center bg-white shadow-md border-gray-200 border-solid">
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

            <section>
              <h3 className="text-gray-400 font-semibold">Mobile number</h3>
              <Input className="" func={null} labelValue="US" name="mobile" id="mobile" type="number" placeholder="(201)555-1234" for="mobile" aria="mobile number" />
            </section>
            <section>
              <h3 className="text-gray-400 font-semibold">Email</h3>
              <Input className="" func={null} labelValue="Email" name="email" id="email" type="email" placeholder="pre-fill email" for="email" aria="email" />
            </section>

          </div>

          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white w-full mt-9 py-2 px-4 rounded shadow-md text-lg font-medium select-none">Next</button>
        </form>
      </div >
    </Layout>
  )
}