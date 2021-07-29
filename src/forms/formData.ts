/** Convert form entries into an object */
export function convertFormDataToObj(form: HTMLFormElement): Object {
  return Object.fromEntries(new FormData(form));
}
