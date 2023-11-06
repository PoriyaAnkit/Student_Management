import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom"
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import { AiOutlineEdit, AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import { useState } from 'react';

function UpdateAdd() {
    var params = useParams()

    let token = localStorage.getItem('token')

    let installment = {
        amount: "",
        installment_date: ""
    }


    // const defaultVal = {
    //     surname: "",
    //     studentname: "",
    //     fathername: "",
    //     stu_contact_no: "",
    //     stu_whatsapp_no: "",
    //     parent_contact_no: "",
    //     parent_whatsapp_no: "",
    //     address: "",
    //     dob: "",
    //     image: "",
    //     qualification: "",
    //     reference: "",
    //     course: "",
    //     course_duration: "",
    //     daily_time: "",
    //     course_content: "",
    //     total_fees: 0,
    //     joining_date: "",
    //     ending_date: "",
    //     job_responsbility: "",
    //     // college_course: "",
    //     installment_details: [{
    //         amount: 0,
    //         installment_date: '',
    //         p_status: "0",
    //     }],
    //     faculty: "",
    //     batch_time: "",
    //     running_topic: "",
    //     pc_laptop: "",
    //     pc_no: "",
    //     laptop_compulsory: "",
    //     gst: "",
    //     extra_note: "",
    //     reception_note: ""
    // }


    let [install, setinstall] = useState(installment)
    let [add, setadd] = useState([])
    let [val, setval] = useState('');
    let [courses, setcourse] = useState([])
    const [content, setContent] = useState("");


    let getvalue = (e) => {
        setinstall({ ...install, [e.target.name]: e.target.value })
        console.log(install);
    }

    let plusdata = () => {

        setadd([...add, install]);
        setinstall(installment)
        // setext();
    }

    let delatedata = (id) => {

        let newdata = add.filter((a, b) => { return id !== b })
        setadd(newdata)
    }

    let studentvalue = (e) => {

        if (e.target.name === "image") {
            setval({ ...val, [e.target.name]: e.target.files[0] })
            alert("")
        }
        else {
            setval({ ...val, [e.target.name]: e.target.value })
        }
        console.log(val);
    }



    useEffect(() => {
        axios.get(`http://localhost:5000/course/viewstudentDetail/${params.id}`, {
            headers: {
                'Authorization': token
            }
        })
            .then((res) => {
                console.log(res.data.data);
                setval(res.data.data)
                setadd(res.data.data.installment_details)
            })
            .catch((err) => {

            });
        axios.get('http://localhost:5000/course/allcourse', {
            headers: {
                Authorization: token
            }
        })
            .then((res) => {
                setcourse(res.data.data1)
            })
    }, [])

    
    let handlecontent = (id) => {
        axios.get(`http://localhost:5000/course/viewsinglecourse/${id}`, {
            headers: {
                Authorization: token
            }
        })
            .then((res) => {
                console.log(res.data);
                let data = res.data.data
                setContent(data)
            })
            .catch((errr) => {
                console.log("error");
            })
    }


    let submitdata = (() => {

        // const installmentDetails = val.installment_details.map((item) => ({
        //     amount: item.amount,
        //     installment_date: item.installment_date,
        //     p_status: item.p_status
        //   }));

        axios.put(`http://localhost:5000/course/updatestudentDetail/${params.id}`, {
            surname: val.surname,
            studentname: val.studentname,
            fathername: val.fathername,
            stu_contact_no: val.stu_contact_no,
            stu_whatsapp_no: val.stu_whatsapp_no,
            parent_contact_no: val.parent_contact_no,
            parent_whatsapp_no: val.parent_whatsapp_no,
            address: val.address,
            dob: val.dob,
            image: val.image,
            qualification: val.qualification,
            reference: val.reference,
            course: val.course,
            course_duration: content.content_id?.duration || val.course_duration,
            course_content: content.content_id?.content || val.course_content,
            total_fees: parseInt(content.content_id?.total_fees || 0),
            daily_time: val.daily_time,
            joining_date: val.joining_date,
            ending_date: val.ending_date,
            job_responsbility: val.job_responsbility,
            college_course: val.college_course,
            installment_details: add,
            faculty: val.faculty,
            batch_time: val.batch_time,
            running_topic: val.running_topic,
            pc_laptop: val.pc_laptop,
            pc_no: val.pc_no,
            laptop_compulsory: val.laptop_compulsory,
            gst: val.gst,
            extra_note: val.extra_note,
            reception_note: val.reception_note
          }, {
            headers: {
              'Authorization': token
            }
          })
          .then((res)=>{
            console.log(res);
          })
          .catch((res)=>{
            console.log('error');
          })
    })

    return (
        <>
            <div className="d-flex align-items-center my-5 mx-5 justify-content-between">
                <h3 className=" m-0 text-decoration-underline">Add Admition</h3>
                <div className='d-flex'>
                    <Link to='/' className='text-black me-2 '> Home </Link> /
                    <p className='ms-2 mb-0'>Add Admition</p>
                </div>
            </div>
            <div className="addmi p-5 mx-5">
                <ul class="nav nav-tabs justify-content-center mb-4 border-dark " id="myTab" role="tablist">
                    <li class="nav-item " role="presentation">
                        <button class="nav-link active fw-bold" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Student Information</button>
                    </li>
                    <li class="nav-item px-5" role="presentation">
                        <button class="nav-link fw-bold" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Course Information</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link fw-bold" id="messages-tab" data-bs-toggle="tab" data-bs-target="#messages" type="button" role="tab" aria-controls="messages" aria-selected="false">Faculty Information</button>
                    </li>
                </ul>


                <div class="tab-content mx-5">
                    <div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                        <Row>
                            <Col lg={4} md={6}>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label className='fw-bold'>Surname</Form.Label>
                                    <Form.Control
                                        name='surname'
                                        value={val.surname}
                                        onChange={studentvalue}
                                        placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col lg={4} md={6}>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label className='fw-bold'>Student name</Form.Label>
                                    <Form.Control
                                        placeholder=""
                                        name='studentname'
                                        value={val.studentname}
                                        onChange={studentvalue}
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={4} md={6} className='mt-lg-0 mt-3'>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label className='fw-bold'> Father name</Form.Label>
                                    <Form.Control
                                        name='fathername'
                                        value={val.fathername}
                                        onChange={studentvalue}
                                        placeholder="" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className='my-4'>
                            <Col lg={3} md={6}>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label className='fw-bold'>Student Contact No</Form.Label>
                                    <Form.Control
                                        name='stu_contact_no'
                                        value={val.stu_contact_no}
                                        onChange={studentvalue}
                                        placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col lg={3} md={6}>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label className='fw-bold'>Whatsapp No</Form.Label>
                                    <Form.Control
                                        name='stu_whatsapp_no'
                                        value={val.stu_whatsapp_no}
                                        onChange={studentvalue}
                                        placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col lg={3} md={6} className='mt-lg-0 mt-3'>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label className='fw-bold'>Parent No</Form.Label>
                                    <Form.Control
                                        name='parent_contact_no'
                                        value={val.parent_contact_no}
                                        onChange={studentvalue}
                                        placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col lg={3} md={6} className='mt-lg-0 mt-3'>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label className='fw-bold'>Whatsapp No</Form.Label>
                                    <Form.Control
                                        name='parent_whatsapp_no'
                                        value={val.parent_whatsapp_no}
                                        onChange={studentvalue}
                                        placeholder="" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4} md={6}>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label className='fw-bold'>Address</Form.Label>
                                    <FloatingLabel
                                        controlId="floatingTextarea"
                                        label="Comments"
                                        className=""
                                    >
                                        <Form.Control as="textarea"
                                            name='address'
                                            value={val.address}
                                            onChange={studentvalue}
                                            placeholder="Leave a comment here" />
                                    </FloatingLabel>
                                </Form.Group>
                            </Col>
                            <Col lg={4} md={6}>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label className='fw-bold'>DOB</Form.Label>
                                    <Form.Control
                                        name='dob'
                                        value={val.dob}
                                        onChange={studentvalue}
                                        placeholder=""
                                        type='date' />
                                </Form.Group>
                            </Col>
                            <Col lg={4} md={6} className='mt-lg-0 mt-3'>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label className='fw-bold'> Image</Form.Label>
                                    <Form.Control
                                        placeholder=""
                                        type='file'
                                        // value={val.image}
                                        name='image'
                                        onChange={studentvalue}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className='my-4'>
                            <Col lg={4} md={6}>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label className='fw-bold'>Qualification</Form.Label>
                                    <Form.Control
                                        name='qualification'
                                        value={val.qualification}
                                        onChange={studentvalue}
                                        placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col lg={4} md={6}>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label className='fw-bold'>Select Referance</Form.Label>
                                    <Form.Select
                                        // name='reference'
                                        // value={val.reference}
                                        // onChange={studentvalue}
                                        aria-label="">
                                        <option></option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col lg={4} md={6} className='mt-lg-0 mt-3'>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label className='fw-bold'> Referance name</Form.Label>
                                    <Form.Control
                                        name='reference'
                                        value={val.reference}
                                        onChange={studentvalue}
                                        placeholder="" />
                                </Form.Group>
                            </Col>
                        </Row>
                    </div>

                    <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                        <Row>
                            <Col lg={4} md={6}>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label className='fw-bold'>Course</Form.Label>
                                    <Form.Select aria-label="" name='course' value={val.course} onChange={(e) => { studentvalue(e); handlecontent(e.target.value) }}>
                                        <option >------- Select Course ------- </option>
                                        {
                                            courses.map((i, id) => {
                                                return (
                                                    <option value={i._id}>{i.coursename}</option>
                                                )
                                            })
                                        }
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col lg={4} md={6}>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label className='fw-bold'>Course Duration</Form.Label>
                                    <Form.Control
                                        name='course_duration'
                                        value={content.content_id?.duration || val.course_duration}
                                        onChange={studentvalue}
                                        placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col lg={4} md={6}>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label className='fw-bold'>Daily Time</Form.Label>
                                    <Form.Control
                                        name='daily_time'
                                        value={val.daily_time}
                                        onChange={studentvalue}
                                        placeholder="" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label className='fw-bold'>Content</Form.Label>
                                    <FloatingLabel
                                        controlId="floatingTextarea"
                                        label="Comments"
                                        className=""
                                    >
                                        <Form.Control as="textarea"
                                            value={content.content_id?.content || val.course_content}
                                            // name='course_content'
                                            // onChange={studentvalue}
                                            placeholder="Leave a comment here" />
                                    </FloatingLabel>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className='my-4'>
                            <Col lg={3} md={6}>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label className='fw-bold'>Total Fees</Form.Label>
                                    <Form.Control
                                        // name='total_fees'
                                        value={content.content_id?.total_fees || val.total_fees}
                                        // onChange={studentvalue}
                                        placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col lg={3} md={6} >
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label className='fw-bold'>Joining Date</Form.Label>
                                    <Form.Control
                                        name='joining_date'
                                        value={val.joining_date}
                                        onChange={studentvalue}
                                        placeholder="" type='date' />
                                </Form.Group>
                            </Col>
                            <Col lg={3} md={6} className='mt-lg-0 mt-3'>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label className='fw-bold'>Ending Date</Form.Label>
                                    <Form.Control
                                        name='ending_date'
                                        value={val.ending_date}
                                        onChange={studentvalue}
                                        placeholder="" type='date' />
                                </Form.Group>
                            </Col>
                            <Col lg={3} md={6} className='mt-lg-0 mt-3'>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label className='fw-bold'>Job Responsibility</Form.Label>
                                    <fieldset onChange={studentvalue} name='job_responsbility' value={val.job_responsbility}>
                                        <Form.Group as={Row} className="mb-3">
                                            <Col sm={10}>
                                                <Form.Check
                                                    type="radio"
                                                    label="Yes"
                                                    value='yes'
                                                    checked = {val.job_responsbility === 'yes'}
                                                    name="job_responsbility"
                                                    id="formHorizontalRadios1"
                                                />
                                                <Form.Check
                                                    type="radio"
                                                    label="No"
                                                    value='No'
                                                    checked = {val.job_responsbility === 'No'}
                                                    name="job_responsbility"
                                                    id="formHorizontalRadios2"
                                                />
                                            </Col>
                                        </Form.Group>
                                    </fieldset>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col >
                                <Form.Label className='fw-bold'>Installment Detail</Form.Label>
                            </Col>
                        </Row>
                        <Row className='align-items-center'>
                            <Col lg={5} md={6}>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Control
                                        name='amount'
                                        value={install.amount}
                                        onChange={getvalue}
                                        placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col lg={5} md={6}>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Control
                                        name='installment_date'
                                        value={install.installment_date}
                                        onChange={getvalue}
                                        type='date' />
                                </Form.Group>
                            </Col>
                            <Col lg={2} className='mt-lg-0 mt-3'>
                                <div className="btn bg-primary" onClick={plusdata}><AiOutlinePlus className='' /></div>
                            </Col>
                        </Row>
                        {
                           add.map((i, id) => {
                                return (
                                    <>
                                        <Row className='mt-3'>
                                            <Col lg={5} md={6}>
                                                <Form.Group as={Col} controlId="formGridEmail">
                                                    <Form.Control
                                                        // name='amount'
                                                        value={i.amount}
                                                        placeholder="" />
                                                </Form.Group>
                                            </Col>
                                            <Col lg={5} md={6}>
                                                <Form.Group as={Col} controlId="formGridEmail">
                                                    <Form.Control placeholder=""
                                                        // name='installment_date'
                                                        value={i.installment_date}
                                                        type='date' />
                                                </Form.Group>
                                            </Col>
                                             <Col lg={2} className='mt-lg-0 mt-3'>
                                            <div className="btn bg-danger" onClick={() => { delatedata(id) }}><AiOutlineDelete className='' /></div>
                                            </Col> 
                                        </Row >
                                    </>
                                )
                            })
                        }
                    </div>
                    <div class="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab" tabindex="0">
                        <Row>
                            <Col lg={4} md={6}>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label className='fw-bold'>Select Faculty</Form.Label>
                                    {/* <Form.Select aria-label="">
                                        <option></option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select> */}
                                    <Form.Control
                                        name='faculty'
                                        value={val.faculty}
                                        onChange={studentvalue}
                                        placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col lg={4} md={6}>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label className='fw-bold'>Batch Time</Form.Label>
                                    {/* <Form.Select aria-label="">
                                        <option></option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select> */}
                                    <Form.Control
                                        name='batch_time'
                                        value={val.batch_time}
                                        onChange={studentvalue}
                                        placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col lg={4} md={6} className='mt-lg-0 mt-3'>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label className='fw-bold'>Running Logic</Form.Label>
                                    <Form.Control
                                        name='running_topic'
                                        value={val.running_topic}
                                        onChange={studentvalue}
                                        placeholder="" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className='my-4'>
                            <Col lg={4} md={6}>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label className='fw-bold'>PC / Laptop</Form.Label>
                                    <fieldset  onChange={studentvalue} name='pc_laptop' value={val.pc_laptop}>
                                        <Form.Group as={Row} className="mb-3" >
                                            <Col sm={10}>
                                                <Form.Check
                                                    type="radio"
                                                    label="PC"
                                                    value='PC'
                                                    checked = {val.pc_laptop === 'PC'}
                                                    name="pc_laptop"
                                                    id="formHorizontalRadios1"
                                                />
                                                <Form.Check
                                                    type="radio"
                                                    label="Laptop"
                                                    value='Laptop'
                                                    checked = {val.pc_laptop === 'Laptop'}
                                                    name="pc_laptop"
                                                    id="formHorizontalRadios2"
                                                />
                                            </Col>
                                        </Form.Group>
                                    </fieldset>
                                </Form.Group>
                            </Col>
                            <Col lg={4} md={6}>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label className='fw-bold'>PC No</Form.Label>
                                    {/* <Form.Select aria-label="">
                                        <option></option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select> */}
                                    <Form.Control
                                        name='pc_no'
                                        value={val.pc_no}
                                        onChange={studentvalue}
                                        placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col lg={4} md={6} className='mt-lg-0 mt-3'>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label className='fw-bold'>Laptop Compalsory</Form.Label>
                                    <fieldset onChange={studentvalue} name='laptop_compulsory' value={val.laptop_compulsory}>
                                        <Form.Group as={Row} className="mb-3">
                                            <Col sm={10}>
                                                <Form.Check
                                                    type="radio"
                                                    label="Yes"
                                                    value='Yes'
                                                    checked = {val.laptop_compulsory === 'Yes'}
                                                    name='laptop_compulsory'
                                                    id="formHorizontalRadios1"
                                                />
                                                <Form.Check
                                                    type="radio"
                                                    label="No"
                                                    value='No'
                                                    checked = {val.laptop_compulsory === 'No'}
                                                    name='laptop_compulsory'
                                                    id="formHorizontalRadios2"
                                                />
                                            </Col>
                                        </Form.Group>
                                    </fieldset>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label className='fw-bold'>Extra Note</Form.Label>
                                    <FloatingLabel
                                        controlId="floatingTextarea"
                                        label=""
                                        className=""
                                    >
                                        <Form.Control as="textarea"
                                            name='extra_note'
                                            value={val.extra_note}
                                            onChange={studentvalue}
                                            placeholder="Leave a comment here" />
                                    </FloatingLabel>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='mt-lg-0 mt-3'>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label className='fw-bold'>Reception Note</Form.Label>
                                    <FloatingLabel
                                        controlId="floatingTextarea"
                                        label=""
                                        className=""
                                    >
                                        <Form.Control as="textarea"
                                            name='reception_note'
                                            value={val.reception_note}
                                            onChange={studentvalue}
                                            placeholder="Leave a comment here" />
                                    </FloatingLabel>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className='text-center'>
                            <Col>
                                <Button variant="primary" onClick={submitdata} className='mt-3'>
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div >
        </>
    )
}

export default UpdateAdd
