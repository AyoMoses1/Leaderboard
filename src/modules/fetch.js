const apiHandler = (method, gameId, payload) => {
  if (payload) {
    return fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`, {
      method,
      body: JSON.stringify(payload),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  }

  return fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`, {
    method,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export default apiHandler;