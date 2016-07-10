import React from 'react'
import StarRatingComponent from 'react-star-rating-component'
// import style from './style.css'

class Card extends React.Component {
  render() {
    // console.log(this.props.logo);
    return (
      <div className="card">
        <img src={this.props.logo}/>
        <h1>{this.props.name}</h1>
        <StarRatingComponent className="rate"
          name="rating"
          editing={false}
          starCount={5}
          value={this.props.rate}
        />
      </div>
    )
  }
}

export default Card
Card.propTypes = {
  logo: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  rate: React.PropTypes.string.isRequired
}
