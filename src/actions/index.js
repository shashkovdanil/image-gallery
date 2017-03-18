export const filter = filterQuery => ({
  type: 'FILTER',
  filterQuery,
});

export const changeSize = size => ({
  type: 'CHANGE_SIZE',
  size,
});
