export function optimizeIntervals(intervals) {
    const optimize = []
    
    intervals.sort()
    let reference = intervals[0]

    for (let i = 1; i < intervals.length; i++) {
      const interval    = intervals[i]
      const intervalMin = interval[0]
      const intervalMax = interval[1]

      if(_isInRange({ range: reference, number: intervalMin })) {
        const min = reference[0] 
        const max = Math.max(reference[1], intervalMax)

        reference = [ min, max ]
      } else {
        optimize.push(reference)
        reference = interval
      }

      if (i === intervals.length - 1) {
        optimize.push(reference)
      }
    }

    return optimize
}

function _isInRange({ range, number }) {
  const min = range[0]
  const max = range[1]

  return number > min && number < max
}