import { Card, Container, Header, Icon, Image } from "semantic-ui-react";
import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchOneUser } from "./api";

class User extends Component {
  componentDidMount = () => {
    console.log("-------------------------------");
    this.props.loadUser(this.props.match.params.userLogin);
  };

  render() {
    console.log("-----", this.props.user);
    if (this.props.loading) {
      return <div>Loaaadiing.......</div>;
    }

    // const {
    //   user: {
    //     name,
    //     followers,
    //     following,
    //     created_at,
    //     company,
    //     email,
    //     location,
    //     blog,
    //     bio,
    //     avatar_url
    //   }
    // } = this.props;

    return (
      <Container text>
        <Header as="h2">USER</Header>
        <Card>
          <Image src={this.props.user.avatar_url} />
          <Card.Content>
            <Card.Header>{this.props.user.name}</Card.Header>
            <Card.Meta>
              <span>{this.props.user.created_at}</span>
              <span>{this.props.user.company}</span>
              <span>{this.props.user.email}</span>
              <span>{this.props.user.location}</span>
            </Card.Meta>
            <Card.Description>{this.props.user.bio}</Card.Description>
            <Card.Description>{this.props.user.blog}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a href="">
              <Icon name="user" />
              {this.props.user.followers}/{this.props.user.following}
            </a>
          </Card.Content>
        </Card>
      </Container>
    );
  }
}

const mapStateToProps = ({ usersReducer }) => ({
  user: usersReducer.user,
  loading: usersReducer.loading
});

const mapDispatchToProps = dispatch => {
  return {
    loadUser: name => {
      dispatch(fetchOneUser(name));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
