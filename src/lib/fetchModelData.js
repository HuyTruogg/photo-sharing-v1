// /**
//  * fetchModel - Fetch a model from the web server.
//  *
//  * @param {string} url      The URL to issue the GET request.
//  *
//  */
// function fetchModel(url) {
//   const models = null;
//   return models;
// }

// export default fetchModel;

/**
 * fetchModel - Fetch a model from the web server.
 *
 * @param {string} url   The URL to issue the GET request.
 * @returns {Promise}    Promise resolving to { data: ... }
 */
function fetchModel(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      return { data: data };
    })
    .catch((error) => {
      console.error("fetchModel ERROR:", error);
      return { error: error };
    });
}

export default fetchModel;
