export type TPageType = "unknown" | "tx";

export const isTxPageRegex = /\/tx\/([0-9a-fx]*)$/;

export function getPageType(url: string): TPageType {
  if (url.match(isTxPageRegex)) {
    return "tx";
  }

  // return more page types here
  return "unknown";
}
