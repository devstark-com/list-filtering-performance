export const update = (list, filters, sortings) => {
  let arrayCopy = _getReadonlyArrayCopy(list)
  console.time('filtering')
  let arrFiltered = _applyFilters(arrayCopy, filters)
  console.timeEnd('filtering')
  console.time('sorting')
  let arrayResults = _applySortings(arrFiltered, sortings)
  console.timeEnd('sorting')
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

const _applySortings = (arr, sortings) => {
  arr.sort(function (a, b) {
    let sParam = sortings.param
    let sDir = sortings.dir
    if (sDir === '1') {
      return a[sParam] > b[sParam] ? 1 : a[sParam] < b[sParam] ? -1 : 0
    } else {
      return a[sParam] > b[sParam] ? -1 : a[sParam] < b[sParam] ? 1 : 0
    }
  })

  return arr
}

