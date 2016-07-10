import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Button from '../components/Button'
import Card from '../components/Card'

class HomePage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };
  render() {
    return (
      <div>
        <div>HomePage!</div>
        <Button />
        <Card name="KFC" logo="http://img.sj33.cn/uploads/allimg/201402/7-140206204500561.png" rate="3" />
      </div>
    )
  }
}

const mapState = (state) => ({})

export default connect(mapState)(HomePage)
