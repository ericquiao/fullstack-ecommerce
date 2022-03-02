import { Row, Col, Card } from "react-bootstrap";

const Highlights = ({ highlightsProp }) => {
  return (
    <Row className='my-3'>
      <Col xs={12} md={4}>
        <Card className='p-3 cardHighlight'>
          <Card.Body>
            <Card.Title>
              <h2>Learn From Home</h2>
            </Card.Title>
            <Card.Text>
              Non est fugiat dolore officia id labore laborum in enim mollit
              consequat sint quis in non ea quis fugiat.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} md={4}>
        <Card className='p-3 cardHighlight'>
          <Card.Body>
            <Card.Title>
              <h2>Study Now, Pay Later</h2>
            </Card.Title>
            <Card.Text>
              Labore exercitation ut esse labore ut excepteur sit adipisicing in
              adipisicing labore dolore occaecat elit reprehenderit do ad fugiat
              in cillum nostrud ut excepteur ea laborum mollit magna et ullamco
              excepteur elit dolor dolor.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} md={4}>
        <Card className='p-3 cardHighlight'>
          <Card.Body>
            <Card.Title>
              <h2>Be Part of Our Community</h2>
            </Card.Title>
            <Card.Text>
              Aliqua in eiusmod pariatur fugiat cupidatat incididunt veniam
              deserunt consectetur exercitation ad enim culpa nisi duis nostrud
              commodo dolor dolor proident id dolore id duis dolore tempor
              mollit tempor irure in.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
export default Highlights;
