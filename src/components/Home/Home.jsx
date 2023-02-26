import React, { useState } from 'react'
import { Col, Container, Row, Form } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';

export default function Home() {
  const arr = ["uzbekistan", "korea", "germany", "usa", "turkey", "uk"]
  const [value, setValue] = useState("")
  return (
    <>

    
      <Container>
        <Row className='justify-content-center mt-5'>
          <Col xs={6}>

            <Form.Group type='text'>
              <Form.Control placeholder="search" onChange={(e) => setValue(e.target.value)} />
            </Form.Group>

            <Table striped bordered hover>
              <thead>
                <tr>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#</td>
                  <td>Country</td>
                </tr>
                {arr.filter((res) => {
                 return res.toLocaleLowerCase() === ""  ? value : res.toLocaleLowerCase().includes(value)                
                }).map((item, index) => {
                  return (
                    <>
                    <tr>
                    <td>{index}</td>
                    <td>{item}</td>
                  </tr>
                  </>
                  )
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  )
}
