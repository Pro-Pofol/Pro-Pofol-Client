import { nanoid } from '@reduxjs/toolkit'
import { createToast, showToastAsync } from '../store/modules/toast'
import type { ToastmessageType } from '../store/modules/toast'
import store from '../store/store'

/**
 * toast hook입니다.
 * 
 * 첫번째 파라미터에 들어가는 type은 `info` | `success` | `error` | `loading`만 들어가야합니다.
 * 
 * toast는 호출되면 id를 반환합니다.
 * 
 * 그 반환된 id로 toast의 type과 message를 변경할 수 있습니다.
 * 
 * loading은 호출 후 다른 타입의 toast로 호출했을 당시의 id를 넣어서 다시 호출해줘야합니다!!
 * 
 * 각각의 type은 toast의 prototype으로 있기 때문에 `toast.success('메세지')`형태로 호출할 수 있습니다.
 */
export const toast = (type: ToastmessageType, message: string, toastId?: string) => {
  const id = toastId || nanoid()
  switch (type) {
    case 'info':
    case 'success':
    case 'error':
      store.dispatch(showToastAsync({
        id,
        message,
        type,
        duration: 2000
      }))
      return id
    case 'loading':
      store.dispatch(createToast({
        id,
        message,
        type,
        duration: Infinity
      }))
      return id
  }
}

toast.info = (message: string, toastId?: string) => toast('info', message, toastId)
toast.success = (message: string, toastId?: string) => toast('success', message, toastId)
toast.error = (message: string, toastId?: string) => toast('error', message, toastId)
toast.loading = (message: string, toastId?: string) => toast('loading', message, toastId)