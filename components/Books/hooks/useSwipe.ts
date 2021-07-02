import { TouchEvent, useRef, useState } from 'react'

type Options = {
  swipeRange?: number
}

type ListWheelEvent = Pick<WheelEvent, 'deltaY'>

const useSwipe = (options: Options = {}) => {
  const ref = useRef<any>()

  const { swipeRange = 350 } = options
  const scrollToRightValue = swipeRange
  const scrollToLeftValue = -scrollToRightValue

  const [touchStartPositionX, setTouchStartPositionX] = useState(0)
  const [touchLastPositionX, setTouchEndPositionX] = useState(0)

  const handleOnTouchStart = (event: TouchEvent): void => {
    const clientX = getFirstTouchClientX(event)
    setTouchStartPositionX(clientX)
  }

  const handleOnTouchMove = (event: TouchEvent): void => {
    const clientX = getFirstTouchClientX(event)
    setTouchEndPositionX(clientX)
  }

  const getFirstTouchClientX = (event: TouchEvent) =>
    event.changedTouches[0].clientX

  const handleTouchEnd = (): void => {
    const touchMoveLeftToRight = touchStartPositionX >= touchLastPositionX
    const touchMoveRightToLeft = touchStartPositionX <= touchLastPositionX

    if (touchMoveLeftToRight) {
      swipeToPosition(scrollToRightValue)
    }

    if (touchMoveRightToLeft) {
      swipeToPosition(scrollToLeftValue)
    }

    setTouchStartPositionX(0)
    setTouchEndPositionX(0)
  }

  const swipeToPosition = (value: number): void =>
    ref.current?.scrollBy(value, 0)

  const handleOnWheel = (event: ListWheelEvent): void => {
    ref.current?.scrollBy(
      event.deltaY > 0 ? scrollToRightValue : scrollToLeftValue,
      0
    )
  }

  return {
    ref,
    handleOnWheel,
    handleOnTouchStart,
    handleOnTouchMove,
    handleTouchEnd,
  }
}

export default useSwipe
