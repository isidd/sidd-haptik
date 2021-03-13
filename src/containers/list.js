import { connect } from "react-redux";
import {List} from './../components'
import {addFriend , setStar , deleteFriend} from './../store/dispach'



export const mapStateToProps = state => {
  return {
    state : state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    _addFriend : data => dispatch(addFriend(data)),
    _setStar : data => dispatch(setStar(data)),
    _deleteFriend : data => dispatch(deleteFriend(data))
  }
};

const ListContainer = connect(mapStateToProps,mapDispatchToProps)(
    List
);

export default ListContainer;
