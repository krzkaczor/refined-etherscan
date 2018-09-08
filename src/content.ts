import { getPageType } from "./getPageType";

function main() {
  console.log("----- refined etherscan");
  const pageType = getPageType(window.location.href);

  if (pageType === "unknown") {
    return;
  }

  console.log({ pageType });
}

main();
