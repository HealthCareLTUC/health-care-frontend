import React from 'react'
import Image from 'react-bootstrap/Image';
import imagedoctor1 from '../assests/image1.PNG'
import imagedoctor2 from '../assests/image2.jpg'
import imagedoctor3 from '../assests/image3.jpg'
const Imagewithparagh = () => {
  return (
    <div>
      

      <div className="containerdesign">
          <div className="left">
          <p>FIND THE DOCTORS <br />
              "you are in the safe hands" </p>
              
          </div>
          <div className="right">
            <div className="image-wrapper">
              <Image className='img1' src={imagedoctor1} alt="Image 1" />
            </div>
            <div className="image-wrapper">
              <Image className='img2' src={imagedoctor2} alt="Image 2" />
            </div>
            <div className="image-wrapper">
              <Image className='img3' src={imagedoctor3} alt="Image 3" />
            </div>
          </div>
        </div>

    </div>
  )
}

export default Imagewithparagh
