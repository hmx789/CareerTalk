import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';

import CompanyItem from './presenter';

class Container extends Component {
  componentDidMount() {
    const { company, favorites, notes, likeButton } = this.props;
    const isLiked = favorites.includes(company.id);
    const isNote = notes[company.id] !== undefined;

    this.setState({
      company,
      isLiked,
      isNote,
      displayLike: likeButton,
    });
  }

  componentWillReceiveProps(nextProps) {
    const { favorites, notes } = nextProps;
    const { company } = this.state;
    const isLiked = favorites.includes(company.id);
    const isNote = notes[company.id] !== undefined;

    if (isLiked !== this.state.isLiked) {
      this.setState({
        isLiked,
      });
    }
    if (isNote !== this.state.isNote) {
      this.setState({
        isNote,
      });
    }
  }

  _navigateTo = (key) => {
    const { company } = this.state;
    const { notes } = this.props;
    const params = { companyInfo: company, note: notes[company.id] };

    Actions.push(key, params);
  };

  _handleLike = () => {
    const { isLiked, company } = this.state;
    const { likeCompany, unlikeCompany, company: { fair_id } } = this.props;

    if (!isLiked) {
      likeCompany(company.id, fair_id);
    } else {
      unlikeCompany(company.id, fair_id);
    }

    this.setState({
      isLiked: !isLiked,
    });
  };

  render() {
    const { company } = this.props;
    return (
      <CompanyItem
        {...this.state}
        company={company}
        navigateTo={this._navigateTo}
        handleLike={this._handleLike}
      />
    );
  }
}

export default Container;
