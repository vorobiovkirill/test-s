import {
	Card,
	Container,
	Header,
	Icon,
	Image
} from 'semantic-ui-react'
import React, { Component } from 'react'

import {
	connect
} from "react-redux";
import {
	fetchOneUser
} from "./api";

class User extends Component {

	componentDidMount = () => {
	  this.props.loadUser(this.props.match.params.userLogin)
	}
	

	render(){
		
		console.log('-----', this.props.user);

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
    			<Header as='h2'>USER</Header>
				<Card>
					<Image src={avatar_url} />
					<Card.Content>
						<Card.Header>{name || 'no name'}</Card.Header>
						<Card.Meta>
							<span className='date'>Joined in 2015</span>
						</Card.Meta>
						<Card.Description>{bio}</Card.Description>
					</Card.Content>
					<Card.Content extra>
						<a href="">
							<Icon name='user' />
							{followers}
						</a>
					</Card.Content>
				</Card>
			</Container>
			)
		}
}

const mapStateToProps = ({ user }) => ({
  user
});

const mapDispatchToProps = dispatch => {
  return {
    loadUser: (name) => {
      dispatch(fetchOneUser(name));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User)