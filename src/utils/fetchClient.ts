const TOKEN = '896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043';
const BASE_URL = `https://api.unsplash.com/photos/?client_id=${TOKEN}`;

function get<T>(url: string): Promise<T> {
  const fullURL = `${BASE_URL}${url}`;

  return fetch(fullURL)
    .then(res => res.json());
}

export const client = {
  get,
};
