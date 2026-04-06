const trimTrailingSlash = (value: string) =>
  value.length > 1 && value.endsWith("/") ? value.slice(0, -1) : value;

export function withBase(path: string) {
  const base = trimTrailingSlash(import.meta.env.BASE_URL);
  const normalizedPath = path === "/" ? "/" : `/${path.replace(/^\/+/, "")}`;

  if (base === "/") {
    return normalizedPath;
  }

  return normalizedPath === "/" ? `${base}/` : `${base}${normalizedPath}`;
}

export function normalizePathname(pathname: string) {
  return trimTrailingSlash(pathname);
}
