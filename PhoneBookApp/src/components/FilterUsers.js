import React, { Component } from "react";
import { Form, FormGroup, Input } from "reactstrap";

export default class FilterUsers extends Component {
  render() {
    return (
      <Form className="filter-user-form">
        <FormGroup>
          <Input
            type="text"
            placeholder="Enter name and surname to filter phone numbers"
            onChange={(e) => {
              this.props.setFilter(e.target.value);
            }}
          />
        </FormGroup>
      </Form>
    );
  }
}
