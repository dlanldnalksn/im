export const AUTH_KEY = 'imc_intranet_auth';

export function isAuthenticated(): boolean {
  if (typeof sessionStorage === 'undefined') return false;
  return sessionStorage.getItem(AUTH_KEY) === '1';
}

export function setAuthenticated(): void {
  sessionStorage.setItem(AUTH_KEY, '1');
}

export function clearAuthenticated(): void {
  sessionStorage.removeItem(AUTH_KEY);
}

export function getExpectedPassword(): string {
  return import.meta.env.PUBLIC_INTRANET_PASSWORD || 'imc-intra';
}
