import { Image, List } from "semantic-ui-react";

import React from "react";

const UsersList = ({ users }) => {
  return (
    <List celled size="massive">
      {users.map(user => (
        <List.Item key={user.id}>
          <Image avatar src={user.avatar_url} />
          <List.Content>
            <List.Header>{user.login}</List.Header>
            <a href={user.html_url}>link</a>
          </List.Content>
        </List.Item>
      ))}
    </List>
  );
};

export default UsersList;
