import axios from 'axios';

/**
 * Attach the admin bearer token to every axios request.
 *
 * The app has two HTTP paths: Angular's HttpClient (covered by
 * adminAuthInterceptor) and axios, which the `common-service/*` services use
 * directly. Only the first was ever authenticated — the axios calls worked
 * because the API left those endpoints open to anyone. Now that the backend
 * requires a token on every admin route, axios needs the same treatment.
 *
 * Registered once from main.ts, before the app bootstraps.
 */
export function registerAxiosAuth(): void {
  axios.interceptors.request.use((config) => {
    const token = readToken();
    if (token) {
      config.headers = config.headers ?? {};
      (config.headers as any)['Authorization'] = `Bearer ${token}`;
    }
    return config;
  });

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      const status = error?.response?.status;
      // 401 = no/expired token, 403 = valid token without admin rights.
      // Either way the stored session is unusable; clear it and re-login.
      if (status === 401 || status === 403) {
        clearSession();
        if (!location.pathname.startsWith('/login')) {
          location.href = '/login';
        }
      }
      return Promise.reject(error);
    }
  );
}

function readToken(): string | null {
  try {
    return localStorage.getItem('access_token');
  } catch {
    return null;
  }
}

function clearSession(): void {
  try {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    sessionStorage.clear();
  } catch {
    /* storage unavailable; nothing to clear */
  }
}
