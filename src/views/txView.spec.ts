import { readFileSync } from "fs";
import { join } from "path";
import { JSDOM } from "jsdom";
import * as jquery from "jquery";
import { getGasLimit, getGasUsed, setGasUsedPercentage } from "./txView";
import { expect } from "chai";

function loadFixture(name: string): JQueryStatic {
  const fixture = readFileSync(join(__dirname, "./__fixtures/", `${name}.html`));

  const { window: jsdomWindow } = new JSDOM(fixture);

  return (jquery(jsdomWindow) as any) as JQueryStatic;
}

describe("tx-view", () => {
  it("should getGasLimit", () => {
    const $ = loadFixture("txView");
    const gasLimit = getGasLimit($);

    expect(gasLimit).to.be.eq(90000);
  });

  it("should getGasUsed", () => {
    const $ = loadFixture("txView");
    const gasUsed = getGasUsed($);

    expect(gasUsed).to.be.eq(83725);
  });

  it("should setGasUsed", () => {
    const $ = loadFixture("txView");

    setGasUsedPercentage($);

    const newGasUsedValue = $(`:contains(Gas Used By Txn:)`)
      .next()
      .last()
      .text();
    expect(newGasUsedValue).to.be.eq("83725 (93%)");
  });
});
