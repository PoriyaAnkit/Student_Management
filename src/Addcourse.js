import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Header from './Header';
import { useState } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';

let Addcourse = () => {

    let [course, setcourse] = useState()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let token = localStorage.getItem("token")

    let coursesubmmit = () => {

        axios.post('http://localhost:5000/course/addcourse', {
            coursename: course
        },{
            headers : {
                Authorization:token
            }
        })

            .then((res) => {
                console.log(res.data);
                if (res.data.status === 'Course Add Successfully') {
                    setcourse("");
                    handleShow()
                }
            })
            .catch((err) => {
                console.log('error');
            })

    }

    return (
        <>
            <div className=" mt-5 ">
                <div className="d-flex align-items-center mt-5 mx-5 justify-content-between">
                    <h3 className=" m-0 text-decoration-underline">Add Course </h3>
                    <div className='d-flex'>
                        <Link to='/' className='text-black me-2 '> Home </Link> /
                        <p className='ms-2 mb-0'>Add Course</p>
                    </div>
                </div>
                <div className="login1">
                    <div className="loginshadow d-flex justify-content-center rounded-2">
                        <div className='loginpage'>
                            <h2 className='text-center text-decoration-underline mb-4'>Course Detail</h2>

                            <Form.Group controlId="formGridEmail">
                                <Form.Label className='fw-bold'>Select Course</Form.Label>
                                <Form.Control placeholder="" value={course} onChange={(e) => { setcourse(e.target.value) }} />
                            </Form.Group>
                            <Button variant="primary" onClick={coursesubmmit} className='w-100 mt-4'>
                                Submit
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className='justify-content-center'>
                    <Modal.Title>
                        <img src={require('./image/gif.gif')} alt="" />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-center text-success fw-bold'>
                    Data Added Successfully
                </Modal.Body>
                <Modal.Footer className='justify-content-center' >
                    <Button variant="success" onClick={handleClose}>
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
};

export default Addcourse;