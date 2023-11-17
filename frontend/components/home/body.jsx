import React from 'react';
import { Link } from 'react-router-dom';
import Slider from './carousel';
import Footer from '../footer';
const Body = () => {
  return (
    <div className='home-body'>
      
        <div className='carousel-container'>
          {/* <img className="carousel" src="https://mamazon-seeds.s3.us-west-1.amazonaws.com/amazon_filretv.jpg"/> */}
          <Slider/>
          
        </div>
        <div className='card-container'>
          <div className='card-row'>
            
            <div className='card'>
              <div className='card-detail'>
                <div className='card-header'><h2>Time to treat yourself</h2></div>
                <div className='card-body-multi'>
                  <div className='card-multi-row'>
                    <Link to='/products/66'>
                      
                      <img src="https://mamazon-seeds.s3.us-west-1.amazonaws.com/fashion/fashion2.jpg" />
          
                    </Link>
                    <Link to="/products/67">
                      
                        <img src="https://mamazon-seeds.s3.us-west-1.amazonaws.com/fashion/fashion3.jpg" />
                      
                    </Link>
                  </div>
                  <div className='card-multi-row'>
                    <Link to="/products/69">
                    <img src="https://mamazon-seeds.s3.us-west-1.amazonaws.com/fashion/fashion5.jpg" />
                    
                  </Link>
                  <Link to="/products/70">
                    
                    <img src="https://mamazon-seeds.s3.us-west-1.amazonaws.com/fashion/fashion6.jpg" />
                  </Link>
                </div>
                </div>
                {/* <div className='card-message'>See More</div> */}
              </div>
            </div>
            <div className='card'>
              <div className='card-detail'>
                <div className='card-header'><h2>Let it do the dirty work</h2></div>
              <Link to='/products/86'>
                  <div className='card-body'>
                  <img src="https://mamazon-seeds.s3.us-west-1.amazonaws.com/smart-home/smarthome1.jpg" />
                </div>
              </Link>

                 
                
                {/* <div className='card-message'>See More</div> */}
              </div>
            </div>
            <div className='card'>
              <div className='card-detail'>
                <div className='card-header'><h2>Morning start with the coffee</h2></div>
                
                <Link to='/products/78'>
                <div className='card-body'>
                  <img src="https://mamazon-seeds.s3.us-west-1.amazonaws.com/kitchen/bodumreplace_.jpg" />
                  
                </div>
                </Link>
                {/* <div className='card-message'>See More</div> */}
              </div>
            </div>
            <div className='card'>
              <div className='card-detail'>
                
                <div className='card-header'><h2>Home Sweet home</h2></div>
              <Link to="/products/76">
                <div className='card-body'>
                  <img src="https://mamazon-seeds.s3.us-west-1.amazonaws.com/home+decor/homedecor1.jpg" />
                
                </div>
              </Link>
                {/* <div className='card-message'>See More</div> */}
              </div>
            </div>
            
          </div>
          {/*  */}
          <div className='card-row'>
            <div className='card wider-box'>
              <div className='card-detail'>
                <div className='card-header'><h2>Hair Product set</h2></div>
                <Link to='/products/53'>
                  <div className='card-body wider-box-image'>
                    <img src="https://mamazon-seeds.s3.us-west-1.amazonaws.com/splash/splash1.jpg" />
                    
                  </div>
                </Link>
                {/* <div className='card-message'>See More</div> */}
              </div>
            </div>
            
            <div className='card'>
              <div className='card-detail'>
                <div className='card-header'><h2>Baby on the way</h2></div>
              <Link to="/products/85">
                <div className='card-body'>
                <img src="https://mamazon-seeds.s3.us-west-1.amazonaws.com/maternity/maternity4.jpg" />
                
                </div>
              </Link>
                {/* <div className='card-message'>See More</div> */}
              </div>
            </div>
            <div className='card'>
              <div className='card-detail'>
                <div className='card-header'><h2>Baby Swing</h2><p>baby is not inclued !</p></div>
              <Link to="/products/59">
                <div className='card-body'>
                <img src="https://mamazon-seeds.s3.us-west-1.amazonaws.com/baby/baby4.jpg" />
                  
                </div>
              </Link>
                {/* <div className='card-message'>See More</div> */}
              </div>
            </div>
            
          </div>
          
        </div>
      {/* <footer>
        <Footer />
      </footer> */}
    
    </div>
  )
};

export default Body;
