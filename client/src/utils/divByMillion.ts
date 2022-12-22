export const divByMillion = (value: number) => {
  return value < 1000000 ? `${value}` : `${Math.round(value / 1000000)} млн.`
}
