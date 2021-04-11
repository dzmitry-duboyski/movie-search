/**
 * I wanted to move the API key to the host environment variable,
 * but I realized that it makes no sense, since I pass this key in
 *  the request to the API. I will leave the current version,
 * as it is an educational project. In a production project, you cannot store keys in clear text.
 *
 */

const OMD_API_KEY = 'd44d4c61';
// additional key: OMD_API_KEY = '5b0655a5';

export { OMD_API_KEY };
