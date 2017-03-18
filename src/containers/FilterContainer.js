
import { connect } from 'react-redux';
import { filter } from '../actions';
import Filter from '../components/Filter';

const mapDispatchToProps = dispatch => ({
  handleFilter: (filterQuery) => {
    dispatch(filter(filterQuery));
  },
});

const FilterContainer = connect(null, mapDispatchToProps)(Filter);

export default FilterContainer;
