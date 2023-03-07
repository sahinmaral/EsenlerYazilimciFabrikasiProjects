import React, { Component,Fragment } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class LikedFoods extends Component {
  render() {
    return (
      <Fragment>
        <h3 className='mt-3'>Liked Foods</h3>
        <ListGroup>
            {
                this.props.likedFoods.map((food,index) => {
                    return <ListGroupItem key={index}>{food.name}</ListGroupItem>
                })
            }
        </ListGroup>
      </Fragment>
    )
  }
}
