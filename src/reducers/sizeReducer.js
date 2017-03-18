const sizeReducer = (state = '250px', action) => {
  switch (action.type) {
    case 'CHANGE_SIZE':
      switch (action.size) {
        case '1':
          return '1000px';
        case '2':
          return '500px';
        case '3':
          return '333px';
        case '4':
          return '250px';
        case '5':
          return '200px';
      }
      break;
    default:
      return '250px';
  }
};

export default sizeReducer;
