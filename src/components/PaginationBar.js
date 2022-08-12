import React,{Component} from 'react';
import Pagination from "react-js-pagination";
import Reviews,{productID} from './Reviews';
import './paginationbar.css';
import ProductData from '../data/data.json';


class PaginationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      search:'',review:''
    };
  }
 
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
    
  }

  changeText(event) {
    this.setState({
      search:event.target.value
     
  });
  }
  changeReview(event){
    this.setState({
      review:event.target.value
     
  });
}
 
  render() {
    console.log(productID.length);
    return (
      <div>
        <div className="Search_By_Product_Id">  
        <div className="searchbox">
        <input id="search" className="search" list="products" type="text" placeholder="Search for Reviews of Product Id"  onChange={this.changeText.bind(this)} required />        
        <datalist id="products">
          <option value="1">Malasian Egg Plate by Health Zingo</option>
          <option value="11" >Jain Egg Combo by Ammi's</option>
          <option value="13" >Masala Fish Meal by Europa's</option>
          <option value="15" >Kashmiri Fish Meal by Ambur's</option>
          <option value="20" >Hyderabadi Fish Salad by Europa's</option>
          <option value="2">Thai Mushroom Roll by Bakasur</option>
          <option value="12" >Thai Vegetable Pack by Health Zingo</option>

          <option value="14" >South Indian Paneer Plate by Lal Mirchi</option>
          <option value="16" >Bengali Fish Plate by Fasoos</option>
          <option value="17" >Jain Egg Combo by Ammi's</option>
        </datalist>
        <span className="material-icons">search</span>
        </div>
       
      </div>
        <div className="sorting">
      
      <select name="Rating" id="rates" onChange={this.changeReview.bind(this)}  >
      <option disabled selected value> -- select an option -- </option>
      <option value="high">Highest to Lowest</option>
      <option value="low">Lowest to Highest</option>  
      </select>
    
    </div>
    
        <Reviews no={this.state.search} ro={this.state.review} ac={this.state.activePage}/>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={3}
          totalItemsCount={productID.length}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
        />
        
      </div>
    );
  }
}
export default PaginationBar;