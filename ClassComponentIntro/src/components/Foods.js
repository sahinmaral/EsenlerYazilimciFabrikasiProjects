import React, { Component } from "react";
import { Table,Button } from "reactstrap";

export default class Foods extends Component {
  render() {
    return (
      <>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Category Name</th>
              <th>Add favourite</th>
              <th>Remove from favourite</th>
            </tr>
          </thead>
          <tbody>
            {this.props.currentCategory != null &&
              this.props.foods
                .filter(
                  (food) => this.props.currentCategory.id === food.categoryId
                )
                .map((food) => {
                  return (
                    <tr key={food.id}>
                      <th scope="row">{food.id}</th>
                      <td>{food.name}</td>
                      <td>
                        {
                          this.props.categories.find(
                            (category) => category.id === food.categoryId
                          ).name
                        }
                      </td>
                      <td><Button color="success">Add</Button></td>
                      <td><Button color="danger">Remove</Button></td>
                    </tr>
                  );
                })}
            {this.props.currentCategory == null &&
              this.props.foods.map((food) => {
                return (
                  <tr key={food.id}>
                    <th scope="row">{food.id}</th>
                    <td>{food.name}</td>
                    <td>
                      {
                        this.props.categories.find(
                          (category) => category.id === food.categoryId
                        ).name
                      }
                    </td>
                    <td><Button color="success" disabled={this.props.likedFoods.findIndex((likedFood) => likedFood.id === food.id) !== -1} onClick={() => this.props.pushFoodIntoLikedFoods(food)}>Add</Button></td>
                    <td><Button color="danger" disabled={this.props.likedFoods.findIndex((likedFood) => likedFood.id === food.id) === -1} onClick={() => this.props.popFoodFromLikedFoods(food)}>Remove</Button></td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </>
    );
  }
}
