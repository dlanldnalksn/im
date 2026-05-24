export const AUTH_KEY = 'imc_intranet_auth';
export const PORTAL_KEY = 'imc_intranet_portal';

export function isAuthenticated(): boolean {
  if (typeof sessionStorage === 'undefined') return false;
  return sessionStorage.getItem(AUTH_KEY) === '1';
}

export function getAuthenticatedPortalId(): string | null {
  if (typeof sessionStorage === 'undefined') return null;
  return sessionStorage.getItem(PORTAL_KEY);
}

export function setAuthenticated(portalId: string): void {
  sessionStorage.setItem(AUTH_KEY, '1');
  sessionStorage.setItem(PORTAL_KEY, portalId);
}

export function clearAuthenticated(): void {
  sessionStorage.removeItem(AUTH_KEY);
  sessionStorage.removeItem(PORTAL_KEY);
}
