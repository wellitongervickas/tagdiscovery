const getRatingScore = ({
  totalRatings,
  numRatings,
}: Pick<Books.Book, 'numRatings' | 'totalRatings'>): string =>
  (totalRatings / numRatings).toFixed(1)

export default getRatingScore
