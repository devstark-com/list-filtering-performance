export const update = (list, filters, sortings) => {
  let arrayCopy = _getReadonlyArrayCopy(list)
  let arrFiltered = _applyFilters(arrayCopy, filters)
  let arrayResults = arrFiltered
  return arrayResults
}

const _getReadonlyArrayCopy = (list) => {
  let arr = []
  for (let k in list) {
    let listItem = list[k]
    arr.push(listItem)
  }

  return arr
}

const _isItemFiltered = (item, filters) => {
  for (let key in filters) {
    if (item[key] !== filters[key]) {
      return true
    }
  }

  return false
}

const _applyFilters = (arr, filters) => {
  if (Object.keys(filters).length === 0) {
    return arr
  }

  let arrFiltered = []
  for (let n in arr) {
    let itemCurrent = arr[n]
    if (_isItemFiltered(itemCurrent, filters)) {
      continue
    }

    arrFiltered.push(itemCurrent)
  }

  return arrFiltered
}
