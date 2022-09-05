import Interceptor from './interceptor';

export interface RequestConfig {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Headers;
  body?: any;
}

class HttpFetch {
  baseURL: string;

  headers: Headers;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
    this.headers = new Headers([
      ['timeout', '6000'],
      ['cache', 'no-store'],
    ]);
  }

  static request(url: string, config: RequestConfig) {
    return new Promise((resolve) => {
      const request = Interceptor.request(url, config);
      resolve(fetch(request.url, request.config));
    }).then((res) => {
      const response = Interceptor.response(res as Response);
      return response.json();
    });
  }

  getHeaders = (customHeaders: Headers | undefined) => {
    if (!customHeaders) {
      return this.headers;
    }
    const headers = new Headers();
    this.headers.forEach((value, key) => {
      headers.set(key, this.headers.get(key) || '');
    });
    customHeaders.forEach((value, key) => {
      headers.set(key, this.headers.get(key) || '');
    });
    return headers;
  };

  get = (path: string, config?: RequestConfig) => {
    return HttpFetch.request(this.baseURL + path, {
      method: 'GET',
      headers: this.getHeaders(config?.headers),
    });
  };

  post = (path: string, config?: RequestConfig) => {
    return HttpFetch.request(this.baseURL + path, {
      method: 'POST',
      headers: this.getHeaders(config?.headers),
      body: config?.body,
    });
  };

  put = (path: string, config?: RequestConfig) => {
    return HttpFetch.request(this.baseURL + path, {
      method: 'PUT',
      headers: this.getHeaders(config?.headers),
      body: config?.body,
    });
  };

  delete = (path: string, config?: RequestConfig) => {
    return HttpFetch.request(this.baseURL + path, {
      method: 'DELETE',
      headers: this.getHeaders(config?.headers),
    });
  };
}

const Http = new HttpFetch(ENV.HOST_URL);

export default Http;
