import cookies from '../../lib/cookies';

const auth = (req, res) => {
  res.cookie('Next.js', 'api-middleware');
  res.end(res.getHeader('Set-Cookie'));
}

export default cookies(auth);