import { DatalistOptions } from '@typing/dom/datalist';

export function datalistWithApi ({ label, container, inputId, datalistId, classes, request }: DatalistOptions) {
  const inputLabel = document.createElement('label');
  inputLabel.textContent = label;
  inputLabel.setAttribute('for', inputId);
  classes.label?.forEach((singleClass: string) => {
      inputLabel.classList.add(singleClass);
  });

  const inputElement = document.createElement('input');
  inputLabel.setAttribute('id', inputId);
  inputLabel.setAttribute('list', datalistId);
  inputLabel.setAttribute('type', 'text');
  classes.input?.forEach((singleClass: string) => {
    inputElement.classList.add(singleClass);
  });

  const datalistElement = document.createElement('datalist');
  datalistElement.setAttribute('id', datalistId);
  classes.list?.forEach((singleClass: string) => {
    datalistElement.classList.add(singleClass);
  });

  fetch(request.url, {
    method: 'get',
    headers: request.headers,
    mode: request.mode
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    }

    throw response;
  })
  .then(data => {
    const fragment = document.createDocumentFragment();

    for (const optionData of data) {
      const option = document.createElement('option');
      option.textContent = optionData;
      fragment.append(option);
    }

    datalistElement.append(fragment);
    container.appendChild(datalistElement);
  })
  .catch(error => {
    console.error(error);
  });
}


