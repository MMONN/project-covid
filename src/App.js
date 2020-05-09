import React from 'react';
import logo from './logo.svg';
import axios from 'axios'


let contact = 'MMONN'
class ProductList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: 'chatchanok',
      product: [
        {
          productName: '',
          productDetail: '',
          price: ''
        }
      ],
      persons: [],
      covid: {
        active_cases: '',
        deaths_per_1m_population: '',
        new_cases: '',
        new_deaths: '',
        serious_critical: '',
        statistic_taken_at: '',
        total_cases: '',
        total_cases_per_1m_population: '',
        total_deaths: '',
        total_recovered: '',
      }
    }
  }


// componentDidMount() {
//   axios.get('https://dry-scrubland-02499.herokuapp.com/api/v1/products')
//     .then(res => {
//       const newproducts = res.data;
//       console.log(newproducts)
//       this.setState({ product: newproducts })
//     })
// }
// componentDidMount() {
//   axios.get(`https://jsonplaceholder.typicode.com/users`)
//     .then(res => {
//       const persons = res.data;
//       this.setState({ persons: persons });
//       console.log(persons)
//     })
// }

componentDidMount() {
  const axios = require("axios");

  axios({
    "method": "GET",
    "url": "https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php",
    "headers": {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
      "x-rapidapi-key": "93cc938ca2mshd06030b874a1b28p12983bjsn26c8fec9fd67"
    }
  })
    .then((response) => {
      const inform = response.data;
      this.setState({ covid: inform })
      console.log(inform)
    })
    .catch((error) => {
      console.log(error)
    })
}


render() {
  let users = 'MMONN'
  return (
    <div>
      <div>
        {this.state.product.map((product) => (
          <ProductCard item={product} />
        ))}
        {/* <ul>
            {this.state.persons.map(person => <li>{person.name}</li>)}
          </ul> */}
      </div>
    </div>
  )
}
}

const ProductCard = (props) => {
  return (
    <div className="card">
      <div className="image">
        <img src={props.item.product_image} className="img-product"></img>
      </div>

      <div className="name">
        <p className="product-name">
          {props.item.product_name}
        </p>
      </div>

      <div className="datail">
        <p className="product-detail">
          {props.item.product_detail}
        </p>
      </div>

      <div className="price">
        <p className="product-price">
          {props.item.price} $
        </p>
      </div>
    </div>
  )
}

export default ProductList;
