
import { ref } from 'vue'
export const useState = val => {
  const state = ref(val)
  // eslint-disable-next-line no-return-assign
  const setState = newVal => state.value = newVal
  return [state, setState]
}
