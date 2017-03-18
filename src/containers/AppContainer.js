import { connect } from 'react-redux';
import ImagesGrid from '../components/ImagesGrid';

const mapStateToProps = state => ({
  store: state,
});

const AppContainer = connect(mapStateToProps)(ImagesGrid);

export default AppContainer;
