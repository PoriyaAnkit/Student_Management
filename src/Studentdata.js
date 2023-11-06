import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';

function Studentdata() {
  let token = localStorage.getItem("token")
  let params = useParams()
  let [view, setview] = useState([])
  let [coure, setcourse] = useState()
  let [installment , setinstallment] = useState([])
  console.log(params);

  useEffect(() => {
    axios.get(`http://localhost:5000/course/viewstudentDetail/${params.id}`, {
      headers: {
        'Authorization': token
      }
    })
      .then((res) => {
        console.log(res);
        setview(res.data.data)
        setcourse(res.data.coursename)
        setinstallment(res.data.data.installment_details)
      })
      .catch((err) => {
        console.log("error");
      })
  }, [token])

  return (
    <>
      <div className="d-flex align-items-center mt-5 mx-5 justify-content-between">
        <h3 className=" m-0 text-decoration-underline">Student Data</h3>
        <div className='d-flex'>
          <Link to='/' className='text-black me-2 '> Home </Link> /
          <p className='ms-2 mb-0'>Student data</p>
        </div>
      </div>
      <div className='mt-5'>
        <h2 className='text-center text-decoration-underline mb-4'>Student Profile</h2>
      </div>
      <div className="login1">
        <div className="viewsize d-flex rounded-2 p-5 mx-5">
          <Container>
            <Row className='align-items-center'>
              <Col lg={3}>
                <img src= {
                  view.image ? 'http://localhost:5000/images/' + view.image :""
                } alt="" className='w-75' />
              </Col>
              <Col lg={9}>
                <h2 className='text-danger'> {view.surname + " " + view.studentname + " " + view.fathername} </h2>
                <h4>{coure}</h4>
              </Col>
            </Row>
            <h3 className='my-3 text-danger text-center'>Personal Information</h3>
            <Row className='border p-4 border-black rounded-4'>
              <Col lg={3}>
                <h5 className='text-black m-0'>Student Contact No :</h5>
              </Col>
              <Col lg={3}>
                <p className='m-0 '>{view.stu_contact_no}</p>
              </Col>
              <Col lg={3}>
                <h5 className='text-black m-0'>Student Whats No  : </h5>
              </Col>
              <Col lg={3}>
                <p className='m-0'>  {view.stu_whatsapp_no} </p>
              </Col>
              <Col lg={3} className='pt-3'>
                <h5 className='text-black m-0'>Parents Contact No :</h5>
              </Col>
              <Col lg={3} className='pt-3'>
                <p className='m-0'>  {view.parent_contact_no} </p>
              </Col>
              <Col lg={3} className='pt-3'>
                <h5 className='text-black m-0'>Parents Whats No :</h5>
              </Col>
              <Col lg={3} className='pt-3'>
                <p className='m-0'>  {view.parent_whatsapp_no} </p>
              </Col>
              <Col lg={3} className='pt-3'>
                <h5 className='text-black m-0'>Address :</h5>
              </Col>
              <Col lg={3} className='pt-3'>
                <p className='m-0'>  {view.address} </p>
              </Col>
              <Col lg={3} className='pt-3'>
                <h5 className='text-black m-0'>DOB :</h5>
              </Col>
              <Col lg={3} className='pt-3'>
                <p className='m-0'>  {view.dob} </p>
              </Col>
              <Col lg={3} className='pt-3'>
                <h5 className='text-black m-0'>Qualification :</h5>
              </Col>
              <Col lg={3} className='pt-3'>
                <p className='m-0'>  {view.qualification} </p>
              </Col>
            </Row>
            <h3 className='my-3 text-danger text-center'>Course Information</h3>
            <Row className='border p-4 border-black rounded-4'>
              <Col lg={3}>
                <h5 className='text-black m-0'>Course Name :</h5>
              </Col>
              <Col lg={3}>
                <p className='m-0'>  {coure} </p>
              </Col>
              <Col lg={3}>
                <h5 className='text-black m-0'>Course Content :</h5>
              </Col>
              <Col lg={3}>
                <p className='m-0'>  {view.course_content} </p>
              </Col>
              <Col lg={3} className='pt-3'>
                <h5 className='text-black m-0'>Course Duration :</h5>
              </Col>
              <Col lg={3} className='pt-3'>
                <p className='m-0'>  {view.course_duration} </p>
              </Col>
              <Col lg={3} className='pt-3'>
                <h5 className='text-black m-0'>Referance :</h5>
              </Col>
              <Col lg={3} className='pt-3'>
                <p className='m-0'>  {view.reference} </p>
              </Col>
              <Col lg={3} className='pt-3'>
                <h5 className='text-black m-0'>Daily Time :</h5>
              </Col>
              <Col lg={3} className='pt-3'>
                <p className='m-0'>  {view.ending_date} </p>
              </Col>
              <Col lg={3} className='pt-3'>
                <h5 className='text-black m-0'>Batch Time</h5>
              </Col>
              <Col lg={3} className='pt-3'>
                <p className='m-0'>  {view.batch_time} </p>
              </Col>
              {/* <Col lg={3} className='pt-3'>
                <h5 className='text-black m-0'>Collage Course:</h5>
              </Col>
              <Col lg={3} className='pt-3'>
                <p className='m-0'>  </p>
              </Col> */}
              <Col lg={3} className='pt-3'>
                <h5 className='text-black m-0'>GST :</h5>
              </Col>
              <Col lg={3} className='pt-3'>
                <p className='m-0'>  {view.gst} </p>
              </Col>
              <Col lg={3} className='pt-3'>
                <h5 className='text-black m-0'>Total Fees :</h5>
              </Col>
              <Col lg={3} className='pt-3'>
                <p className='m-0'>  {view.total_fees} </p>
              </Col>   {/* <Col lg={3} className='pt-3'>
                <h5 className='text-black m-0'>Reamaining Fees :</h5>
              </Col>
              <Col lg={3} className='pt-3'>
                <p className='m-0'></p>
              </Col>
            */}
              <Col lg={3} className='pt-3'>
                <h5 className='text-black m-0'>Extra Note</h5>
              </Col>
              <Col lg={3} className='pt-3'>
                <p className='m-0'>  {view.extra_note} </p>
              </Col>
              <Col lg={3} className='pt-3'>
                <h5 className='text-black m-0'>Reception Note:</h5>
              </Col>
              <Col lg={3} className='pt-3'>
                <p className='m-0'>  {view.reception_note} </p>
              </Col>
            </Row>
            <h3 className='my-3 text-danger text-center'>Installment Details</h3>
            <Row className='border p-4  border-black rounded-4'>
              <Table bordered  >
                <thead>
                  <tr className='fs-5 text-center table-dark'>
                    <th>No</th>
                    <th>Amount</th>
                    <th>Installment Date</th>
                    <th>Payment Status</th>
                  </tr>
                  {
                    installment.map((i,id)=>{
                      return(
                        <tr key={id} className='text-center'>
                          <td> {id + 1} </td>
                          <td> {i.amount} </td>
                          <td> {i.installment_date} </td>
                          <td> Yes </td>
                        </tr>
                      )
                    })
                  }
                </thead>
              </Table>
            </Row>
          </Container>
        </div>
      </div>
    </>
  )
}

export default Studentdata
