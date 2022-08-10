import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { MdLibraryBooks } from 'react-icons/md';
import './NewCard.css';

function GroupExample() {
  return (
    <>
    <CardGroup style={{borderRadius:'none'}}>
      <Card className='maincard' >
        <div className='cardIcon' >
        <MdLibraryBooks size={30} color="aqua"/>
        
        
        <Card.Body>
          <Card.Title style={{fontSize:'2rem',fontWeight:"600"}}>View Reports</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        </div>
      </Card>
      <Card className='maincard' >
        <div className='cardIcon' >
        <MdLibraryBooks size={30} color="aqua"/>
        
        
        <Card.Body>
          <Card.Title style={{fontSize:'2rem',fontWeight:"600"}}>View Reports</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        </div>
      </Card>
      <Card  className='maincard'>
        <div className='cardIcon' >
        <MdLibraryBooks size={30} color="aqua"/>
        
        
        <Card.Body>
          <Card.Title style={{fontSize:'2rem',fontWeight:"600"}}>View Reports</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        </div>
      </Card>
    </CardGroup>
    <br/><br/>
    <CardGroup>
      <Card className='maincard' >
        <div className='cardIcon' >
        <MdLibraryBooks size={30} color="aqua"/>
        
        
        <Card.Body>
          <Card.Title style={{fontSize:'2rem',fontWeight:"600"}}>View Reports</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        </div>
      </Card>
      <Card className='maincard' >
        <div className='cardIcon' >
        <MdLibraryBooks size={30} color="aqua"/>
        
        
        <Card.Body>
          <Card.Title style={{fontSize:'2rem',fontWeight:"600"}}>View Reports</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        </div>
      </Card>
      <Card className='maincard' >
        <div className='cardIcon' >
        <MdLibraryBooks size={30} color="aqua"/>
        
        
        <Card.Body>
          <Card.Title style={{fontSize:'2rem',fontWeight:"600"}}>View Reports</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        </div>
      </Card>
    </CardGroup>
    </>
  );
}

export default GroupExample;