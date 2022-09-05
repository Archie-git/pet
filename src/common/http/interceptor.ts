/* eslint-disable no-unused-vars */
import { RequestConfig } from './index';

interface InterceptorType {
  request: (url: string, config: RequestConfig) => ({ url: string, config: RequestConfig }),
  response: (response: Response) => Response
}

const Interceptor: InterceptorType = {
  request: (url: string, config: RequestConfig) => {
    return { url, config };
  },
  response: (response: Response) => {
    if (response.status >= 400 && response.status < 500) {
      console.log('chile ==客户端错误=>');
    }
    if (response.status >= 500) {
      console.log('chile ==服务器错误=>');
    }
    return response;
  },
};

export default Interceptor;
