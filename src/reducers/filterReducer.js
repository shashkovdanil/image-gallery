import images from '../images';

const filterReducer = (state = images, action) => {
  switch (action.type) {
    case 'FILTER':
      if (action.filterQuery !== '') {
        return images.filter(
          i => i.name.toLowerCase().indexOf(action.filterQuery.toLowerCase()) !== -1,
        );
      } else {
        return images;
      }
    default:
      return images;
  }
};

export default filterReducer;
