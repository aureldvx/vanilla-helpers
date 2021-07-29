import { FetchMethods, FetchOptions, FetchReturnTypes } from '@typing/http/fetch';

export function fetchApiSync (url: string, options: FetchOptions) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      headers: options.headers || {},
      method: options.method || FetchMethods.GET
    })
      .then(response => {
        if (response.ok) {
          switch (options.returnType) {
            case FetchReturnTypes.BLOB:
              return response.blob();

            case FetchReturnTypes.TEXT:
              return response.text();

            case FetchReturnTypes.JSON:
            default:
              return response.json();
          }
        }
        return reject(response);
      })
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

export async function fetchApi (url: string, options: FetchOptions) {
  const response = await fetch(url, {
    headers: options.headers || {},
    method: options.method || FetchMethods.GET
  });

  if (!response.ok) {
    throw Error('Fetch request aborted.');
  }

  switch (options.returnType) {
    case FetchReturnTypes.BLOB:
      return response.blob();

    case FetchReturnTypes.TEXT:
      return response.text();

    case FetchReturnTypes.JSON:
    default:
      return response.json();
  }
}
