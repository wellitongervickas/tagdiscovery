import { renderHook, act } from '@testing-library/react-hooks'
import useSwipe from '@/components/Books/hooks/useSwipe'

describe('Hooks useSwipe', () => {
  it('swipes on mouse wheel with default range', async () => {
    const {
      result: { current },
    } = renderHook(() => useSwipe())

    current.ref.current = () => (
      <div>
        <div>some list item</div>
      </div>
    )

    current.ref.current.scrollBy = jest.fn()

    await act(async () => {
      current.handleOnWheel({ deltaY: 53 })
    })

    expect(current.ref.current.scrollBy).toHaveBeenCalledWith(350, 0)
  })

  it('swipes with default range', async () => {
    const {
      result: { current },
    } = renderHook(() => useSwipe())

    current.ref.current = () => (
      <div>
        <div>some list item</div>
      </div>
    )

    current.ref.current.scrollBy = jest.fn()

    await act(async () => {
      current.handleOnTouchStart({ changedTouches: [{ clientX: 300 }] })
      current.handleOnTouchMove({ changedTouches: [{ clientX: 0 }] })
      current.handleTouchEnd()
    })

    expect(current.ref.current.scrollBy).toHaveBeenCalledWith(350, 0)
  })

  it('swipes to right', async () => {
    const swipeRange = 200

    const {
      result: { current },
    } = renderHook(() => useSwipe({ swipeRange }))

    current.ref.current = () => (
      <div>
        <div>some list item</div>
      </div>
    )

    current.ref.current.scrollBy = jest.fn()

    await act(async () => {
      current.handleOnTouchStart({ changedTouches: [{ clientX: 300 }] })
      current.handleOnTouchMove({ changedTouches: [{ clientX: 0 }] })
      current.handleTouchEnd()
    })

    expect(current.ref.current.scrollBy).toHaveBeenCalledWith(swipeRange, 0)
  })

  it('swipes to left', async () => {
    const swipeRange = 200

    const {
      result: { current },
    } = renderHook(() => useSwipe({ swipeRange }))

    current.ref.current = () => (
      <div>
        <div>some list item</div>
      </div>
    )

    current.ref.current.scrollBy = jest.fn()

    await act(async () => {
      current.handleOnTouchStart({ changedTouches: [{ clientX: 0 }] })
      current.handleOnTouchMove({ changedTouches: [{ clientX: 300 }] })
      current.handleTouchEnd()
    })

    const negativeSwipeRange = -swipeRange
    expect(current.ref.current.scrollBy).toHaveBeenCalledWith(
      -negativeSwipeRange,
      0
    )
  })
})
