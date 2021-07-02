import getBookHref from '@/components/Books/helpers/getBookHref'

describe('Helpers getBookHref', () => {
  it('returns a valid book href from objectId', () => {
    const href = getBookHref('my_object_id')
    expect(href).toBe('/my_object_id')
  })
})
