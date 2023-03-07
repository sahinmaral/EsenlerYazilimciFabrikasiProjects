import axios from "axios";
import { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import "./App.css";
import Foods from "./components/Foods";
import Categories from "./components/Categories";
import LikedFoods from "./components/LikedFoods";
import { toast, ToastContainer } from "react-toastify";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.setCurrentCategory = this.setCurrentCategory.bind(this);
    this.pushFoodIntoLikedFoods = this.pushFoodIntoLikedFoods.bind(this);
    this.popFoodFromLikedFoods = this.popFoodFromLikedFoods.bind(this);

    this.state = {
      categories: [],
      foods: [],
      currentCategory: null,
      likedFoods: [],
    };
  }

  componentDidMount() {
    this.getCategories();
  }

  getCategories() {
    axios.get("http://localhost:3000/categories").then((res) => {
      this.setState({ categories: res.data });
    });

    axios.get("http://localhost:3000/foods").then((res) => {
      this.setState({ foods: res.data });
    });
  }

  setCurrentCategory(category) {
    this.setState({ currentCategory: category });
  }

  pushFoodIntoLikedFoods(food) {
    this.setState({ likedFoods: [...this.state.likedFoods, food] });
    toast.success(`${food.name} successfully added to your favourite`)
  }

  popFoodFromLikedFoods(food) {
    this.setState({
      likedFoods: this.state.likedFoods.filter((item) => item.id !== food.id),
    });
    toast.error(`${food.name} successfully removed to your favourite`)
  }

  render() {
    return (
      <Container className="mt-5">
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Row>
          <Col xs="3">
            <Categories
              categories={this.state.categories}
              setCurrentCategory={this.setCurrentCategory}
              currentCategory={this.state.currentCategory}
            />
            <LikedFoods likedFoods={this.state.likedFoods} />
          </Col>
          <Col xs="9">
            <Foods
              foods={this.state.foods}
              likedFoods={this.state.likedFoods}
              categories={this.state.categories}
              popFoodFromLikedFoods={this.popFoodFromLikedFoods}
              pushFoodIntoLikedFoods={this.pushFoodIntoLikedFoods}
              currentCategory={this.state.currentCategory}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
