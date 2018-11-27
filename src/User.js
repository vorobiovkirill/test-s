import { Card, Container, Header, Icon, Image } from "semantic-ui-react";
import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchOneUser } from "./api";

class User extends Component {
	
  componentDidMount = () => {
    this.props.loadUser(this.props.match.params.userLogin);
	}

  render() {
    if (this.props.loading) {
      return <div>Loaaadiing.......</div>;
    }

    const {
      user: {
        name,
        followers,
        following,
        created_at,
        company,
        email,
        location,
        blog,
        bio,
        avatar_url
      }
    } = this.props;

    return (
      <Container text>
        <Header as="h2">USER</Header>
        <Card>
          <Image src={avatar_url} />
          <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Meta>
              <span>{created_at}</span>
              <span>{company}</span>
              <span>{email}</span>
              <span>{location}</span>
            </Card.Meta>
            <Card.Description>{bio}</Card.Description>
            <Card.Description>{blog}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a href="">
              <Icon name="user" />
              {followers}/{following}
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
