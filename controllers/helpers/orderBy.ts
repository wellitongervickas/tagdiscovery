type Value = string | number

const sort = (firstValue: Value, secondValue: Value) => {
  if (firstValue < secondValue) {
    return -1
  }

  if (firstValue > secondValue) {
    return 1
  }

  return 0
}

const orderBy = {
  asc: (firstValue: Value, secondValue: Value): number =>
    sort(secondValue, firstValue),

  dsc: (firstValue: Value, secondValue: Value): number =>
    sort(firstValue, secondValue),
}

export default orderBy
