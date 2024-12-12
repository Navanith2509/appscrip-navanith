import { Component } from "react";
import "./index.css"; 
import { FaChevronDown } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

class Product extends Component {
  state = { showFilter: true, sort: "recommended", videoData: {} };

  componentDidMount() {
    this.getBlogItemData();
  }

  getBlogItemData = async () => {
    const url = `https://fakestoreapi.com/products`;
    const options = {
      method: "GET",
    };
    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      this.setState({ videoData: data });
    }
  };

  handleFilterChange = () =>
    this.setState((prevState) => ({ showFilter: !prevState.showFilter }));

  render() {
    const { showFilter, sort, videoData } = this.state;
    return (
      <>
        <div className="show-filter">
          
          <div className=" gd">
          <p>3425 Items     </p>
            {showFilter ? (
              <p onClick={this.handleFilterChange}>    HIDE FILTER</p>
            ) : (
              <p onClick={this.handleFilterChange}>    SHOW FILTER</p>
            )}
          </div>
          <select>
            <option value="recommended">Recommended</option>
            <option value="NEWewestFirst">Newest first</option>
            <option value="popular">Popular</option>
            <option value="highToLow">Price : high to low</option>
            <option value="lowToHigh">Price : low to high</option>
          </select>
        </div>
        <div className="show-filter">
          <div >
        {showFilter ? (
          <div className="filter-list">
            <input value="test" type="checkbox" onChange={this.handleChange} />
            <span> CUSTOMIZABLE</span>
            <hr></hr>
            <div>
              <h2>IDEAL FOR</h2>
              <FaChevronDown />
              <p>ALL</p>
              <hr></hr>
            </div>
            <div>
              <h2>OCCASION</h2>
              <FaChevronDown />
              <p>ALL</p>
              <hr></hr>
            </div>
            <div>
              <h2>WORK</h2>
              <FaChevronDown />
              <p>ALL</p>
              <hr></hr>
            </div>
            <div>
              <h2>FABRIC</h2>
              <FaChevronDown />
              <p>ALL</p>
              <hr></hr>
            </div>
            <div>
              <h2>SEGMENT</h2>
              <FaChevronDown />
              <p>ALL</p>
              <hr></hr>
            </div>
            <div>
              <h2>SUITABLE FOR</h2>
              <FaChevronDown />
              <p>ALL</p>
              <hr></hr>
            </div>
            <div>
              <h2>RAW MATERIALS</h2>
              <FaChevronDown />
              <p>ALL</p>
              <hr></hr>
            </div>
            <div>
              <h2>PATTERN</h2>
              <FaChevronDown />
              <p>ALL</p>
              <hr></hr>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        </div>
        
        <div className={showFilter ? "product-con2" : "product-con"}>
          <h1>NEW PRODUCT</h1>
          {videoData.length > 0 && (
            <div className="product-con3">
              {videoData.map((each) => (
                <div className="product-card" key={each.id}>
                  <img src={each.image} />
                  <h1 className="heading">{each.title}</h1>
                  <a className="anc">Sign in or Create an account to see pricing</a>
                  < CiHeart />
                </div>
              ))}
            </div>
          )}
        </div>
        </div>
      </>
    );
  }
}
export default Product;
