import { connect } from 'react-redux';
import { changeSize } from '../actions';
import Slider from '../components/Slider';

const mapDispatchToProps = dispatch => ({
  changeSize: (size) => {
    dispatch(changeSize(size));
  },
});

const SliderContainer = connect(null, mapDispatchToProps)(Slider);

export default SliderContainer;
