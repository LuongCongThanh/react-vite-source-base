import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export interface AuthHelperInterface {
  defaultHeader: () => object;
  getAuthHeader: () => object;
  isValidToken: () => boolean;
  setAuthHeader: (request: AxiosRequestConfig) => Promise<AxiosRequestConfig> | AxiosRequestConfig;
  handleRefreshToken: (request: AxiosRequestConfig) => Promise<AxiosRequestConfig> | AxiosRequestConfig;
}

const environment = {
  apiBaseUrl: ''
};

class CustomAuth {
  defaultHeader() {
    return {
      // Xử lý header mặc định
      'Content-Type': 'application/json'
      // ...
    };
  }

  getAuthHeader() {
    return {
      // Xử lý header xác thực
      // ...
    };
  }

  isValidToken() {
    // Xử lý kiểm tra token hợp lệ
    return true; // hoặc false tùy thuộc vào logic của bạn
  }

  setAuthHeader(request: AxiosRequestConfig) {
    // Xử lý header xác thực trước khi gửi yêu cầu API
    // ...
    return request;
  }

  handleRefreshToken(request: AxiosRequestConfig) {
    // Xử lý refresh token
    // ...
    return request;
  }
}

export default class AuthHelper extends CustomAuth implements AuthHelperInterface {
  // ...
}

export class ApiService {
  axiosInstance: AxiosInstance;
  authHelper: AuthHelper;

  constructor() {
    this.authHelper = new AuthHelper();
    // Khởi tạo axiosInstance
    this.axiosInstance = axios.create({
      baseURL: environment.apiBaseUrl,
      // Header chung
      headers: {
        ...this.authHelper.defaultHeader()
      }
    });
    // this._setInterceptors();
  }

  createURL(uri: (string | object)[]) {
    let paramsUrl: any;
    if (typeof uri[uri.length - 1] !== 'string') {
      paramsUrl = uri.pop();
      let url = uri.join('/');
      Object.keys(paramsUrl).forEach(x => {
        url = url.replace(`:${x}`, paramsUrl[x]);
      });
      return url;
    } else {
      return uri.join('/');
    }
  }

  get(uri: (string | object)[], params = {}, moreConfigs = {}) {
    return new Promise((resolve, reject) => {
      const request = this.axiosInstance.get(this.createURL(uri), { params, ...moreConfigs });
      this._handleRespond(request, resolve, reject);
    });
  }

  post(uri: (string | object)[], data = {}, moreConfigs = {}) {
    return new Promise((resolve, reject) => {
      const request = this.axiosInstance.post(this.createURL(uri), data, moreConfigs);
      this._handleRespond(request, resolve, reject);
    });
  }

  put(uri: (string | object)[], data = {}, moreConfigs = {}) {
    return new Promise((resolve, reject) => {
      const request = this.axiosInstance.put(this.createURL(uri), data, moreConfigs);
      this._handleRespond(request, resolve, reject);
    });
  }

  delete(uri: (string | object)[], moreConfigs = {}) {
    return new Promise((resolve, reject) => {
      const request = this.axiosInstance.delete(this.createURL(uri), moreConfigs);
      this._handleRespond(request, resolve, reject);
    });
  }

  private _handleRespond(request: any, resolve: any, reject: any) {
    return request
      .then((resp: AxiosResponse) => {
        resolve(resp.data);
      })
      .catch((err: any) => {
        reject(err);
      });
  }

  // private _setInterceptors() {
  //   this.axiosInstance.interceptors.request.use((request: AxiosRequestConfig) => this.authHelper.setAuthHeader(request));
  //   this.axiosInstance.interceptors.response.use(
  //     (response: AxiosResponse) => response,
  //     (error: AxiosError) => this._handleError(error)
  //   );
  // }
  //
  // private async _handleError(error: AxiosError) {
  //   if (axios.isCancel(error)) {
  //     const err = new Error(0);
  //     err.type = ERROR_TYPE.CANCEL;
  //     return Promise.reject(err);
  //   }
  //
  //   if (error.isAxiosError && error.response) {
  //     const { status, data } = error.response;
  //     return Promise.reject(new Error(status, data));
  //   } else {
  //     return Promise.reject(new Error(0));
  //   }
  // }
}
