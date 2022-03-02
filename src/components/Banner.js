import {Button, Row, Col} from 'react-bootstrap'
 
const Banner = ({bannerProp}) => {
   return (
 
       <Row>
           <Col className="p-5">
               <h1 className="mb-3">{bannerProp.title}</h1>
               <p className="my-3">{bannerProp.description}</p>
               <a href={bannerProp.destination} className="btn btn-primary">{bannerProp.buttonText}</a>
           </Col>
       </Row>
 
   )
}
export default Banner;
