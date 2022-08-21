/**
 * 防抖
 */

export const useDebouce = (callback, delay = 500, firstFlag = true) => {
  let timeout = null
  return (...rest) => {
    if (!firstFlag) {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        // eslint-disable-next-line node/no-callback-literal
        callback(...rest)
      }, delay)
    }
    firstFlag = false
  }
}
