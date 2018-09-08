export function getGasLimit($: JQueryStatic): number {
  const gasLimitAsString = $(`:contains(Gas Limit:)`)
    .next()
    .last()
    .text();

  return parseInt(gasLimitAsString);
}

export function getGasUsed($: JQueryStatic): number {
  const gasLimitAsString = $(`:contains(Gas Used By Txn:)`)
    .next()
    .last()
    .text();

  return parseInt(gasLimitAsString);
}

export function setGasUsedPercentage($: JQueryStatic): void {
  const gasLimit = getGasLimit($);
  const gasUsed = getGasUsed($);

  const gasUsedPercentage = gasUsed / gasLimit;
  const gasUsedPercentageFormatted = `(${(gasUsedPercentage * 100).toFixed(0)}%)`;

  $(`:contains(Gas Used By Txn:)`)
    .next()
    .last()
    .text(`${gasUsed} ${gasUsedPercentageFormatted}`);
}
