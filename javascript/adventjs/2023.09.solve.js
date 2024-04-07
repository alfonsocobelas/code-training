const ICON = {
  RED: '🔴',
  GREEN: '🟢'
}

export function adjustLights(lights) {
  const size = lights.length

  if (_thereIsOnlyOneColor({ size, lights })) {
    return Math.floor(size / 2)
  }

  const iconsInPosEven = lights.filter(_isEven)
  const iconsInPosOdd = lights.filter(_isOdd)

  const totalChanges = _calculateChanges(iconsInPosOdd) + _calculateChanges(iconsInPosEven)

  return totalChanges
}

function _thereIsOnlyOneColor({ size, lights }) {
  const sizeColor = lights.filter(color => color === ICON.RED).length

  if (sizeColor === 0 || sizeColor === size) {
    return true
  }

  return false
}

function _isEven(icon, index) {
  return index % 2 === 0
}

function _isOdd(icon, index) {
  return index % 2 !== 0
}

function _calculateChanges(icons) {
  const size = icons.length
  const iconsRed = icons.filter(icon => icon === ICON.RED).length
  const iconsGreen = icons.filter(icon => icon === ICON.GREEN).length

  const max = Math.max(...[iconsRed, iconsGreen])
  const changes = size - max

  return changes
}