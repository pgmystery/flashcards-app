export function getAllCards() {
  return fetchCard()
}

// function getAllCards(callback) {
//   // Promises
//   fetch('http://localhost:3333/cards')
//     .then(res => res.json())
//     .catch(err => console.log(err))
//     .finally()
//     .then(callback);
// }

// function getAllCards(callback) {
//   // Promises
//   const promise = fetch('http://localhost:3333/cards')
//   const nextPromise = promise.then(res => res.json())
//   nextPromise.then(callback);
// }

export function getSingleCard(id) {
  return fetchCard({id})
}

export function postCard(data) {
  return fetchCard({method: 'POST', data})
}

export function patchCard(id, data) {
  return fetchCard({method: 'PATCH', id, data})
}

export function deleteCard(id) {
  return fetchCard({method: 'DELETE', id})
}

function fetchCard({method = 'GET', id = '', data} = {}) {
  return fetch('/cards/' + id, {
      method,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
}
