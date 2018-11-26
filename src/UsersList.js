import { Image, List } from "semantic-ui-react";
import { Link, Route } from 'react-router-dom'
import React, {Fragment} from "react";

import User from "./User";

const UsersList = ({ users }) => {
  return (
    <Fragment>
      <List celled size="massive">
        {users.map(user => (
          <List.Item key={user.id}>
            <Image avatar src={user.avatar_url} />
            <List.Content>
              <List.Header><Link to={`/users/${user.login}`}>{user.login}</Link></List.Header>
              <a href={user.html_url}>link</a>
            </List.Content>
          </List.Item>
        ))}
      </List>
      <Route path={`/users/:userLogin`} component={User} />
    </Fragment>
  );
};

export default UsersList;
