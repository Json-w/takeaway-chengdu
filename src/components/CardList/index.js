import React from 'react'
import Card from '../Card'

const mockData = [
  {
    logo: 'http://img.sj33.cn/uploads/allimg/201402/7-140206204500561.png',
    name: 'KFC',
    rate: 4
  },
  {
    logo: 'http://img3.liansuo.com/html/images/20151026/93751445850129.jpg',
    name: '7-11',
    rate: 3
  }
];
class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.setState({ data: mockData })
  }

  render() {
    var cardNodes = this.state.data.map((card) => {
      return (
        <Card name={card.name} logo={card.logo} rate={card.rate}/>
      );
    });
    return (
      <div className="cardList">
        {cardNodes}
      </div>
    );
  }
}

export default CardList

CardList.propTypes = {
  data: React.PropTypes.array
}
