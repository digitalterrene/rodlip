import Carousel from 'react-bootstrap/Carousel';
import poverty from '../assets/poverty.jpg'
import war from '../assets/war.jpg'
import crime from '../assets/crime.jpg'
import abuse from '../assets/abuse.jpg'

const Carousell = ()=> {
  return (
    <Carousel className='w-full lg:w-1/2 h-96'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={war}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>War</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={poverty}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Poverty</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={crime}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Crime</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={abuse}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Abuse</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousell;