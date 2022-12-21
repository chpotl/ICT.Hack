export const freeCashFlowConverter = (value: number) => {
  return value < 1000000 ? `${value} р.` : `${Math.round(value / 1000000)} млн.`
}
