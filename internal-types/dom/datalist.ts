export interface DatalistOptions {
  label: string,
  container: Node,
  inputId: string,
  datalistId: string,
  classes: {
    label: Array<string>,
    input: Array<string>,
    list: Array<string>
  },
  request: {
    url: string,
    headers: Headers,
    mode: RequestMode
  }
}
