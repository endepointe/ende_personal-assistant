import { serialize } from 'cookie';

const cookie = (res, name, value, options = {}) => {
  const stringValue = typeof value === 'object' ? 'j:' + JSON.stringify(value) : String(value);

  // increase the expiration time after each visit,
  // converting the maxAge to seconds
  if ('maxAge' in options) {
    options.expires = new Date(Date.now() + options.maxAge);
    options.maxAge /= 1000;
  }
  res.setHeader('Set-Cookie', serialize(name, String(stringValue), options));
}

// adds the above cookie function to set cookies for the response
const cookies = (handler) => (req, res) => {
  res.cookie = (name, value, options) => cookie(res, name, value, options);
  return handler(req, res);
}

export default cookies;
