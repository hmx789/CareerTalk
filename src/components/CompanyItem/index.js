import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as userActions } from '../../redux/modules/user';

const mapStateToProps = (state) => {
  const { user: { favorites, notes, numOfFavorites, numOfNotes } } = state;
  return {
    favorites,
    notes,
    numOfFavorites,
    numOfNotes
  };
};

const mapDispatchToProps = dispatch => ({
  likeCompany: (cmpId) => {
    dispatch(userActions.likeCompany(cmpId));
  },
  unlikeCompany: (cmpId) => {
    dispatch(userActions.unlikeCompany(cmpId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
