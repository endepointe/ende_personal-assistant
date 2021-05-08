import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  site: process.env.SITE || 'http://localhost:3000',
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Providers.Email({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
  callbacks: {
    /*
    @param {string} url URL provided as callback by the client
    @param {string} baseUrl default base URL of site 
    @param {string}
    */
    async redirect(url, baseUrl) {
      return url.startsWith(baseUrl)
        ? url
        : baseUrl
    }
  },
  // signingKey: process.env.JWT_PRIVATE_KEY
};

export default (req, res) => NextAuth(req, res, options);