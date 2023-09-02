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
}

// TODO: ADD TYPES AND TIME OUT
const apiRequest = ({
  baseUrl = getBaseURL(),
  endpoint,
  method,
  headers,
  body = null,
}: ApiRequestParams) => {
    return fetch(`${baseUrl}${endpoint}`, {
        method,
        headers,
        body,
    })
    .then(response => response.json())
    .catch(error => {
        // TODO: Improve
        if (error.response) {
          return Promise.reject(error.response.data);
        }
        return Promise.reject(error.message);
    });
}

export const apiGet = ({ baseUrl = getBaseURL(), endpoint, headers, body }: ApiGetParams) =>
  apiRequest({ method: 'GET', baseUrl, endpoint, headers, body });

