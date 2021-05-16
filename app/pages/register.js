import Layout from '../components/Layout';

export default function Register() {
  return (
    <Layout>
      <div className="flex flex-col items-center">
        <h1>Create your account</h1>
        <form className="flex flex-col w-11/12">
          <div className="flex flex-row items-center bg-white shadow border-gray-200 border-solid rounded-t">
            <div className="flex justify-end w-28 mr-2">
              <div className="max-w-max">
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <input type="email" name="email" placeholder="jane@example.com"
              className="w-full h-12" />
          </div>

          <div className="flex flex-row items-center bg-white shadow border-gray-200 border-solid rounded-b">
            <div className="flex justify-end w-28 mr-2">
              <div className="max-w-max">
                <label htmlFor="password">Password</label>
              </div>
            </div>

            <input type="password" name="password" placeholder="********"
              className="w-full h-12" />
          </div>
          <button>Continue</button>
        </form>
      </div>
    </Layout>
  );
}