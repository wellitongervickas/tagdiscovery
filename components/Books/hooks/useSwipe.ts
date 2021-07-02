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

  const [touchStartPosition, setTouchStartPosition] = useState(0)
  const [touchLastMovePosition, setTouchLastMovePosition] = useState(0)

  const handleOnTouchStart = (event: TouchEvent): void => {
    const clientX = getFirstToucheClientX(event)
    setTouchStartPosition(clientX)
  }

  const handleOnTouchMove = (event: TouchEvent): void => {
    const clientX = getFirstToucheClientX(event)
    setTouchLastMovePosition(clientX)
  }

  const getFirstToucheClientX = (event: TouchEvent) =>
    event.changedTouches[0].clientX

  const handleTouchEnd = (): void => {
    if (touchStartPosition >= touchLastMovePosition) {
      swipeToPosition(scrollToRightValue)
    }

    if (touchStartPosition <= touchLastMovePosition) {
      swipeToPosition(scrollToLeftValue)
    }

    setTouchStartPosition(0)
    setTouchLastMovePosition(0)
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
