import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function App() {
  var districts = [
    {
      "id": 1,
      "title": "Kasargod",
      "description": "land of gods",
      "image": "https://www.weekendthrill.com/wp-content/uploads/2016/07/Kasargod-compressed.jpg"    },



    {
      "id": 2,
      "title": "KANNUR",
      "description": "manchester of kerala",
      "image": "https://lh3.googleusercontent.com/p/AF1QipPOOvtFNsLw-HEG0bxGtfIzlzTj6NQ14KkLLv9y=s680-w680-h510"
    },



    {
      "id": 3,
      "title": "WaAYANAD",
      "description": "home to en number of flora and fauna",
      "image": "https://www.keralatourism.org/images/microsites/wayanad/major-places.jpg"
    },



    {
      "id": 4,
      "title": "KOZHIKODE",
      "description": "Vasco-da-Gama first landed and the legendary Spice Route came into existence. ",
      "image": "https://www.keralatourism.org/images/destination/large/kozhikode_beach20150811065516_256_1.jpg"
    },



    {
      "id": 5,
      "title": "MALAPPURAM",
      "description": "Bounded by the Nilgiris hills on the east and the Arabian Sea on the west, the district of Malappuram literally the land atop the hills",
      "image": "https://www.keralatourism.org/images/enchanting_kerala/large/thirunavaya_malappuram20230105140626_1260_1.jpg"
    },



    {
      "id": 6,
      "title": "PALAKKAD",
      "description": "home to the Silent Valley National Park",
      "image": "https://i0.wp.com/www.maverickbird.com/wp-content/uploads/2016/07/IMG_37611.2.jpg?w=720"
    },



    {
      "id": 7,
      "title": "THRISSUR",
      "description": "ancient temples, churches, and mosques. Thrissur Pooram is the most colourful temple festival in Kerala.",
      "image": "https://images.hindustantimes.com/img/2022/05/10/550x309/thrissur_pooram_1652190197958_1652190207167.jpg"
    },



    {
      "id": 8,
      "title": "ERNAKULAM",
      "description": "Queen of Arabian Sea",
      "image": "https://upload.wikimedia.org/wikipedia/commons/4/4a/INS_Vikrant_under_construction_at_Cochin_Shipyard.png"
      
    },
  ];
  return (


    <Container>
      <Row>
        {
          districts.map((district,index)=>{
            return(
        
        <Col>
        <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={district.image} />
    <Card.Body>
      <Card.Title>{district.title}</Card.Title>
      <Card.Text>
      {district.description}
      </Card.Text>
      <Button variant="primary">click</Button>
    </Card.Body>
    </Card>
    </Col>
            )
          }
          )
        }
        
      </Row>
    </Container>
    



    
  
  
  );
}



export default App;





