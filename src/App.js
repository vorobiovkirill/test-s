import "./App.css";

import { Container, Header } from "semantic-ui-react";
import React, { Component } from "react";

import UserPagination from "./UserPagination";
import UsersList from "./UsersList";
import { connect } from "react-redux";
import { request } from "./api";
import { withRouter } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    this.props.loadUsers();
  }
  render() {
    console.log("users", this.props.users);
    return (
      <Container text>
        <Header as="h2">Swivl test</Header>
        <UsersList users={this.props.users} />
        <UserPagination updateRoute={this.props.updateRoute} />
      </Container>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  users
});

const mapDispatchToProps = dispatch => {
  return {
    loadUsers: () => {
      dispatch(request());
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
