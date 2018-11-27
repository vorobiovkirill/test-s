import { Container, Header, Image, List } from "semantic-ui-react";
import React, { Component, Fragment } from "react";

import { Link } from "react-router-dom";
import UserPagination from "./UserPagination";
import _ from "lodash";
import { connect } from "react-redux";
import { request } from "./api";

class Users extends Component {
  componentDidMount() {
    this.props.loadUsers();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.user !== this.props.user) {
      this.props.loadUsers();
    }
  }
  render() {
    const { users } = this.props;
    return (
      <Fragment>
        <Container text>
          <Header as="h2">Swivl test</Header>
          <List celled size="massive">
            {_.map(users, user => (
              <List.Item key={user.id}>
                <Image avatar src={user.avatar_url} />
                <List.Content>
                  <List.Header>
                    <Link to={`/user/${user.login}`}>{user.login}</Link>
                  </List.Header>
                  <a href={user.html_url}>link</a>
                </List.Content>
              </List.Item>
            ))}
          </List>
          <UserPagination />
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ usersReducer }) => ({
  users: usersReducer.users
});

const mapDispatchToProps = dispatch => {
  return {
    loadUsers: () => {
      dispatch(request());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
