/* eslint-disable no-undef */
function getSummary(cb) {
  return fetch('/api/summary', {
    accept: "application/json"
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function postEvent(event, cb) {
  return fetch('/api/events', {
    method: 'POST',
    body: JSON.stringify(event),
    headers: {
      'Content-type': 'application/json'
    },
    accept: "application/json"
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error); // eslint-disable-line no-console
  throw error;
}

function parseJSON(response) {
  return response.json();
}

const Client = {getSummary, postEvent};
export default Client;
