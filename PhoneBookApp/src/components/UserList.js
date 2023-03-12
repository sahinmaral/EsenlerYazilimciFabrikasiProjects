import React, { Component, Fragment } from "react";
import UserCard from "./UserCard";

export default class UserList extends Component {
  render() {
    return (
      <Fragment>
        {
          this.props.users
            .filter((user) => {
              return user.name.toLowerCase().search(this.props.filter) !== -1
            })
            .map((user, index) => {
              return (
                <UserCard
                  key={index}
                  user={user}
                  setCurrentUser={this.props.setCurrentUser}
                />
              );
            })}
      </Fragment>
    );
  }
}
