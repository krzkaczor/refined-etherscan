import { getPageType } from "./getPageType";
import { setGasUsedPercentage } from "./views/txView";
const jquery = require("jquery") as JQueryStatic;

function main(): void {
  console.log("----- refined etherscan");

  const pageType = getPageType(window.location.href);

  switch (pageType) {
    case "tx":
      refineTxView(jquery);
  }
}

function refineTxView($: JQueryStatic): void {
  setGasUsedPercentage($);

  console.log("Refining tx view done");
}

jquery.ready.then(main);
