import axios from 'axios'
import { isRef, ref, unref, watchEffect } from 'vue'

axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL

const defaultConfig = {
  method: 'get',
}

export const useAxios = (url, config = {}, options = {}) => {
  const response = ref(null)
  const data = ref(null)
  const error = ref(null)
  const loading = ref(false)

  const defaultOption = {
    immediate: true,
  }

  const { onSuccess, onError, immediate } = { ...defaultOption, ...options }

  const { params } = config
  const execute = body => {
    data.value = null
    error.value = null
    loading.value = true
    axios(url, { ...defaultConfig, ...config, params: unref(params), ...body })
      .then(res => {
        response.value = res
        data.value = res.data
        if (onSuccess) {
          onSuccess(res)
        }
      })
      .catch(err => {
        error.value = err
        if (onError) {
          onError(err)
        }
      })
      .finally(() => {
        loading.value = false
      })
  }

  if (isRef(params)) {
    watchEffect(execute)
  } else {
    if (immediate) {
      execute()
    }
  }

  return {
    response,
    data,
    error,
    loading,
    execute,
  }
}
