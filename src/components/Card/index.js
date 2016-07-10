import React from 'react'
// import style from './style.css'

class Card extends React.Component {
  render() {
    // console.log(this.props.logo);
    return (
      <div className="card">
        <img src={this.props.logo}/>
        <h1>{this.props.name}</h1>
      </div>
    )
  }
}

export default Card
Card.propTypes = {
  logo: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired
}
