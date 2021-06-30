import orderBy from '@/controllers/helpers/orderBy'

describe('Helpers orderBy', () => {
  it('returns ordened list by asc', () => {
    const list = [1, 2, 3, 4, 5]
    expect(list.sort(orderBy.asc)).toEqual([5, 4, 3, 2, 1])
  })

  it('returns ordened list by dsc', () => {
    const list = [5, 4, 3, 2, 1]
    expect(list.sort(orderBy.dsc)).toEqual([1, 2, 3, 4, 5])
  })
})
