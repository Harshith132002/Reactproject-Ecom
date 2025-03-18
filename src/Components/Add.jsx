import Carousel from 'react-bootstrap/Carousel';


function ExampleCarouselImage({src,text}){
  return(
  <img className="d-block w-100 h-full object-cover" src={src} alt={text}
  
  />
  )
}

function UncontrolledExample() {
  return (
    <div className='carousel h-[300px] w-1/2 overflow-hidden absolute left-[290px]'>
    <Carousel className='h-100%'>
      <Carousel.Item>
        <ExampleCarouselImage src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-model-unselect-gallery-1-202409_FMT_WHH?wid=1280&hei=492&fmt=p-jpg&qlt=80&.v=aWs5czA5aDFXU0FlMGFGRlpYRXk2UWFRQXQ2R0JQTk5udUZxTkR3ZVlpTDBZWFRnV2wyTWZmOFczZysrOWJqeHVqay8zY0s4VHBsVmhRS2dCdnNPUHBwYUdQQkdYL0crTjZtOXJzeHgrYU1lRU5sQktPWHNQdlFYSkxPRnV4eDJ4Mmh1S2IxRFVaYXZjK211UFFKS2pn&traceId=1" text="First slide" />
        <Carousel.Caption>
          <h2 className='text-[#C0C0C0] font-extrabold' >Up to 10% Off Voucher</h2>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src="https://www.machines.com.my/cdn/shop/files/iPhone_16_Pro_Max_Desert_Titanium_PDP_Image_Position_1a_Desert_Titanium_Colour__MY-EN.jpg?v=1725954235 " text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src="https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pink_PDP_Image_Position-1__en-IN.jpg?v=1694605258" text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default UncontrolledExample;