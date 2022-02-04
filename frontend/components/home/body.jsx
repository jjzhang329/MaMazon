import React from 'react';
import { Link } from 'react-router-dom';
import Slider from './carousel';

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
                <div className='card-header'><h2>Let it do the dirty work</h2></div>
                <Link to='/products/1'>
                  <div className='card-body'>
        
                      <img src="https://mamazon-seeds.s3.us-west-1.amazonaws.com/smart-home/smarthome1.jpg" />
                    
                  </div>
                </Link>
                <div className='card-message'>See More</div>
              </div>
            </div>
            <div className='card'>
              <div className='card-detail'>
                <div className='card-header'><h2>BlahBlahBlah</h2></div>
                <div className='card-body-multi'>
                  <div className='card-multi-row'>
                   <img src="https://mamazon-seeds.s3.us-west-1.amazonaws.com/smart-home/smarthome1.jpg" />
                    <img src="https://mamazon-seeds.s3.us-west-1.amazonaws.com/smart-home/smarthome1.jpg" />
                  </div>
                  <div className='card-multi-row'>
                  <img src="https://mamazon-seeds.s3.us-west-1.amazonaws.com/smart-home/smarthome1.jpg" />
                  <img src="https://mamazon-seeds.s3.us-west-1.amazonaws.com/smart-home/smarthome1.jpg" />
                </div>
                </div>
                <div className='card-message'>See More</div>
              </div>
            </div>
            <div className='card'>
              <div className='card-detail'>
                <div className='card-header'><h2>BlahBlahBlah</h2></div>
                <div className='card-body'>
                  <img src="https://mamazon-seeds.s3.us-west-1.amazonaws.com/smart-home/smarthome1.jpg" />
                </div>
                <div className='card-message'>See More</div>
              </div>
            </div>
            <div className='card'>
              <div className='card-detail'>
                <div className='card-header'><h2>BlahBlahBlah</h2></div>
                <div className='card-body'>
                  <img src="https://mamazon-seeds.s3.us-west-1.amazonaws.com/smart-home/smarthome1.jpg" />
                </div>
                <div className='card-message'>See More</div>
              </div>
            </div>
            
          </div>
          
          
        </div>
    
    </div>
  )
};

export default Body;
