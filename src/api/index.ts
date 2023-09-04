const getBaseURL = () => 'https://api.artic.edu/api/v1/';

type ApiRequestParams = {
    baseUrl: string,
    endpoint: string,
    method: string,
    headers?: any, // TODO: Complete
    body?: any, // TODO: Complete
}

type ApiGetParams = {
    baseUrl?: string,
    endpoint: string,
    headers?:any // TODO: Complete
    body?: any, // TODO: Complete
    fakeService?: boolean,
}

// TODO: ADD TYPES AND TIME OUT
const apiRequest = ({
  baseUrl = getBaseURL(),
  endpoint,
  method,
  headers,
  body = null,
  fakeService = false,
}: ApiRequestParams) => {

    if (fakeService) {
      return mockRequest({})
        .catch(error => {
          // TODO: Improve
          const errorCustom = new Error("some error");
          if (error.response) {
            return Promise.reject(error.response?.data);
          }
          return Promise.reject(errorCustom);
      });
    }
    
    return fetch(`${baseUrl}${endpoint}`, {
        method,
        headers,
        body,
    })
    .then(response => response.json())
    .catch(error => {
        // TODO: Improve
        if (error.response) {
          return Promise.reject(error.response?.data);
        }
        const errorCustom = new Error("some error");
        return Promise.reject(errorCustom);
    });
}

export const apiGet = ({ baseUrl = getBaseURL(), endpoint, headers, body, fakeService }: ApiGetParams) =>
  apiRequest({ method: 'GET', baseUrl, endpoint, headers, body, fakeService });

export const mockRequest = ({
    response,
    timeout = 3000,
    forceFailure = true,
  }) =>
    new Promise((resolve, reject) =>
      setTimeout(() => {
        if (forceFailure) {
          return reject({});
        }
        return resolve(response);
      }, timeout),
    );

