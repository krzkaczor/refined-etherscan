import { getPageType } from "./getPageType";

function main(): void {
  console.log("----- refined etherscan");
  const pageType = getPageType(window.location.href);

  if (pageType === "unknown") {
    return;
  }

  console.log({ pageType });
}

main();
