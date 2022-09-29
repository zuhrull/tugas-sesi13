import {useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {
  const [comments, setComments] = useState([]);

  useEffect(
    () => {
      fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(data => setComments(data));
    },
    []
  );

  return(
    <Container fluid>
      <Table striped bordered hover variant="dark" >
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Comment</th>
        </tr>
      </thead>
      <tbody>
        {
          comments.map(comment => (
            <tr key={comment.id}>
              <td>{comment.id}</td>
              <td>{comment.name}</td>
              <td>{comment.email}</td>
              <td>{comment.body}</td>
            </tr>
          ))
        }
      </tbody>
      </Table>
    </Container>
    
  )
}
