/** GitHub Pages 등 서브경로 배포 시 올바른 URL */
function baseUrl(): string {
  const base = import.meta.env.BASE_URL;
  return base.endsWith('/') ? base : `${base}/`;
}

export function url(path = ''): string {
  const base = baseUrl();
  if (!path || path === '/') return base;
  return `${base}${path.replace(/^\//, '')}`;
}

export function pathnameEquals(current: string, targetPath: string): boolean {
  const a = current.replace(/\/$/, '') || '/';
  const b = url(targetPath).replace(/\/$/, '') || '/';
  return a === b;
}

export function pathnameStartsWith(current: string, targetPath: string): boolean {
  const b = url(targetPath).replace(/\/$/, '');
  const root = url('').replace(/\/$/, '');
  return current.startsWith(b) && b !== root;
}
