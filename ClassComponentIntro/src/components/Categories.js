import{ Component,Fragment } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class Categories extends Component {

  render() {
    return (
      <Fragment>
        <ListGroup>
        {
          this.props.categories.map((category) => {
            return <ListGroupItem active={this.props.currentCategory!= null && this.props.currentCategory.name === category.name}
            key={category.id} onClick={() => this.props.setCurrentCategory(category)}>{category.name}</ListGroupItem>
          })
        }
        </ListGroup>
      </Fragment>
    )
  }
}
