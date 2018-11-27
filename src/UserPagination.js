import React, { PureComponent } from "react";

import { Pagination } from "semantic-ui-react";
import { connect } from "react-redux";
import { request } from "./api";

class UserPagination extends PureComponent {
  state = { activePage: 1 };

  handlePaginationChange = (e, { activePage }) => {
    this.props.changePage(activePage);
    this.setState(() => ({ activePage }));
  };

  render() {
    return (
      <Pagination
        defaultActivePage={1}
        onPageChange={this.handlePaginationChange}
        totalPages={10}
        value={this.state.activePage}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changePage: page => {
      dispatch(request(page));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(UserPagination);
