import { isTxPageRegex } from "./getPageType";
import { expect } from "chai";

describe("isTxPageRegex", () => {
  it("should work only on overview tab", () => {
    function matchRegex(s: string, r: RegExp): boolean {
      return s.match(r) !== null;
    }

    expect(
      matchRegex(
        "https://etherscan.io/tx/0xfe6df15dc7d5c26cd69edafd5925cfe271b6cc67540623fba52bc8c0bac6b3e3",
        isTxPageRegex,
      ),
    ).to.be.true;
    expect(
      matchRegex(
        "https://etherscan.io/tx/0xfe6df15dc7d5c26cd69edafd5925cfe271b6cc67540623fba52bc8c0bac6b3e3#eventlog",
        isTxPageRegex,
      ),
    ).to.be.false;
  });
});
