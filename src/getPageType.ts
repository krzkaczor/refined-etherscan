export type TPageType = "unknown" | "tx";

export function getPageType(url: string): TPageType {
  const isTxPage = /\/tx\//;
  if (url.match(isTxPage)) {
    return "tx";
  }

  // return more page types here
  return "unknown";
}
