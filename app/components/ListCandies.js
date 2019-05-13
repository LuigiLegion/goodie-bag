import React, { Component } from 'react';
import { connect } from 'react-redux';
import getCandiesThunkCreator from '../reducers';

export class DisconnectedListCandies extends Component {
  componentDidMount() {
    this.props.getCandiesThunk();
  }
  render() {
    return (
      <div className="contained">
        <h2>Look at all the candies!</h2>
        {this.props.candies.map(curCandy => (
          <div key={curCandy.id}>
            <h4>{curCandy.name}</h4>
            <img src={curCandy.imageUrl} />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({ candies: state.candies });

const mapDispatchToProps = dispatch => ({
  getCandiesThunk: () => dispatch(getCandiesThunkCreator()),
});

export const ListCandies = connect(
  mapStateToProps,
  mapDispatchToProps
)(DisconnectedListCandies);
