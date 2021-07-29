export enum FetchMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE'
}

export enum FetchReturnTypes {
  JSON = 'json',
  BLOB = 'blob',
  TEXT = 'text'
}

export type FetchOptions = {
  method: FetchMethods;
  headers?: Headers;
  returnType: FetchReturnTypes;
};
