'use client'
import React, { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { useAppDispatch, type RootState } from '../store/store'
import type { ToastmessageType } from '../store/modules/toast'
import { deleteToast } from '../store/modules/toast'
import { Check, Close } from '@/assets'

const variants = {
  init: { y: -50, scale: 0, opacity: 0, originY: -1 },
  open: { y: 0, scale: 1, opacity: 1, originY: 0 },
  closed: { y: -50, scale: 0, opacity: 0, transition: { duration: 0.3, delay: 0.1 }, originY: -1 },
}

const toastStyle: { [key in ToastmessageType]: string } = {
  info: 'bg-gray50',
  loading: 'bg-gray50',
  success: 'bg-successBackground',
  error: 'bg-criticalBackground'
}

const Toaster = () => {
  const dispatch = useAppDispatch()
  const data = useSelector((state: RootState) => state.toast)
  const animationFrame = useRef<number | undefined>(undefined)
  const beforeTime = useRef<number | undefined>(undefined)
  const sortedData = useRef<RootState['toast']>([])
  const isHover = useRef<boolean>(false)

  const animationStep = (timeStamp: DOMHighResTimeStamp) => {
    if (!beforeTime.current) {
      beforeTime.current = timeStamp
    }

    const deleteDataId: string[] = []

    if (!isHover.current) {
      const elapsed = timeStamp - beforeTime.current

      sortedData.current = sortedData.current.map(value => {
        const duration = value.duration - elapsed
        if (duration <= 0) {
          deleteDataId.push(value.id)
        }
        return {
          ...value,
          duration,
        }
      })
    }

    deleteDataId.forEach(id => dispatch(deleteToast({ id })))
    beforeTime.current = timeStamp
    requestAnimationFrame(animationStep)
  }

  useEffect(() => {
    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current)
    }
    const key = sortedData.current.map(value => value.id)

    sortedData.current = data.map(value => {
      const dataIndex = key.indexOf(value.id)
      const data = sortedData.current[dataIndex]
      return {
        ...value,
        duration: (dataIndex === -1 || data.duration === Infinity ? value : sortedData.current[dataIndex]).duration,
      }
    })
    animationFrame.current = requestAnimationFrame(animationStep)
  }, [data])

  return (
    <motion.nav
      className="fixed w-full h-full top-0 pt-10 flex flex-col-reverse items-center justify-end gap-3 pointer-events-none box-border z-50"
      layout
      layoutRoot
    >
      <AnimatePresence mode="popLayout">
        {data.map(value => (
          <motion.div
            className={`px-4 py-3 rounded-xl flex gap-2 pointer-events-auto origin-[top_center] box-border border border-[rgba(0,0,0,0.08)] ${toastStyle[value.type]}`}
            initial={'init'}
            layout
            animate={'open'}
            exit={'closed'}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
            }}
            variants={variants}
            key={value.id}
            layoutId={value.id}
            style={{ originX: 0.5 }}
            onMouseEnter={() => {
              isHover.current = true
            }}
            onMouseLeave={() => {
              isHover.current = false
            }}
          >
            {
              value.type === 'loading' ?
                <div className="w-5 h-5 border-2 border-gray100 border-t-gray900 rounded-full animate-spin" />
                : value.type === 'error' ?
                  <Close size={20} className="text-critical" />
                  : value.type === 'success' &&
                  <Check size={20} className="text-success" />
            }
            <span className="text-labelMedium text-black whitespace-nowrap">{value.message}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Toaster
