import axios from "axios";
import { Component, Fragment } from "react";
import { Container, Row, Col, Alert } from "reactstrap";
import "./App.css";
import FilterUsers from "./components/FilterUsers";
import Header from "./components/Header";
import Loading from "./components/Loading";
import UserList from "./components/UserList";
import UserModal from "./components/UserModal";

export default class App extends Component {

  constructor(props) {
    super(props);

    this.setCurrentUser = this.setCurrentUser.bind(this);
    this.setModalToggle = this.setModalToggle.bind(this);
    this.setFilter = this.setFilter.bind(this);

    this.state = {
      users: [],
      currentUser: null,
      loading: true,
      errorMessage: "",
      modalToggle: false,
      filter:""
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        this.setState({ users: res.data });
      })
      .catch((err) => {
        console.log(err)
        this.setState({ errorMessage: `Fetch couldn't loaded correctly. ${err.message}` });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  setFilter(filter){
    this.setState({filter:filter})
  }

  setCurrentUser(user) {
    this.setState({ currentUser: user });
    this.setModalToggle(true);
  }

  setModalToggle(status) {
    this.setState({ modalToggle: status });
  }

  render() {
    return (
      <Fragment>
        {this.state.loading && (
          <Fragment>
            <Header />
            <Loading />
          </Fragment>
        )}
        {!this.state.loading && this.state.errorMessage && (
          <Fragment>
            <Header />
            <Alert color="danger">{this.state.errorMessage}</Alert>
          </Fragment>
        )}
        {!this.state.loading && !this.state.errorMessage && (
          <Fragment>
            <Header />
            {this.state.currentUser !== null && (
              <UserModal
                currentUser={this.state.currentUser}
                setModalToggle={this.setModalToggle}
                modalToggle={this.state.modalToggle}
              />
            )}
            <Container className="main-container">
              <Row>
                <Col>
                  <FilterUsers setFilter={this.setFilter}/>
                </Col>
              </Row>
              <Row>
                <UserList
                  filter={this.state.filter}
                  users={this.state.users}
                  setCurrentUser={this.setCurrentUser}
                />
              </Row>
            </Container>
          </Fragment>
        )}
      </Fragment>
    );
  }
}
