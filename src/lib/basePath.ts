export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function withBase(path: string): string {
  if (!path) return path;
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("mailto:")) {
    return path;
  }
  if (path.startsWith(BASE_PATH)) return path;
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}