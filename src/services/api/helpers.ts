export async function handleResponse(response: Response): Promise<any> {
  if (response.ok) {
    try {
      const data = await response.json();
      return data;
    } catch (e) {
      throw new Error('Server response is not in JSON format');
    }
  } else {
    // eslint-disable-next-line no-throw-literal
    throw {
      url: response.url,
      status: response.status,
      statusText: response.statusText,
      // @ts-ignore
      message: response?.message || `${response.status} ${response.statusText}`,
    };
  }
}

export function scrubEmptyStrings(obj: {}) {
  return JSON.parse(
    JSON.stringify(obj, (key, value) => {
      return value === '' || value === null ? undefined : value;
    })
  );
}

export async function get(path: RequestInfo, query = {}) {
  query = scrubEmptyStrings(query);

  const headers = {
    accept: 'application/json',
    'content-type': 'application/json',
  };

  if (Object.keys(query).length > 0) {
    const params = new URLSearchParams();
    for (let key in query) {
      // @ts-ignore
      params.set(key, query[key]);
    }
    path += '?' + params.toString();
  }

  const response = await fetch(path, { headers, method: 'get', credentials: 'include' });

  return await handleResponse(response);
}
