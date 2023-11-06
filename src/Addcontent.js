import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


let Addcontent = ()=>{
    let token = localStorage.getItem('token')

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let [courses , setcourses] = useState([])
    let [seleccourse , setseleccourse ] = useState()
    let [content , setcontent] = useState()
    let [fees , setfees] = useState()
    let [duration , setduration] = useState()
 
    useEffect(()=>{
        axios.get('http://localhost:5000/course/allcourse'
        ,{
            headers : {
                Authorization:token
            }
        })
        .then((res)=>{
            // console.log(res.data);
            const dataco = res.data.data1;
            setcourses(dataco)
        })
        .catch((err)=>{
            console.log('error');
        })
    }, [])


    let addcontent = (()=>{
        axios.post("http://localhost:5000/course/addcontent",
        {
            course_id: seleccourse,
            content: content,
            duration: duration,
            total_fees: fees 
        },{
            headers : {
                Authorization:token
            }
        })
        .then((res)=>{  
            console.log(res);
            if(res.data.status === "Content Add Successfully")
            {
                setcontent("")
                setseleccourse("")
                setduration("")
                setfees("")
                handleShow()
            }
        })
        .catch((err)=>{

        })
    })

    return(
        <>
            <div className=" mt-5 ">
            <div className="d-flex align-items-center mt-5 mx-5 justify-content-between">
                <h3 className=" m-0 text-decoration-underline">Add Course Content</h3>
                <div className='d-flex'>
                    <Link to='/' className='text-black me-2 '> Home </Link> /
                    <p className='ms-2 mb-0'>Add Content</p>
                </div>
            </div>
            <div className="login2">
                <div className="loginshadow d-flex justify-content-center rounded-2">
                    <div className='loginpage'>
                        <h2 className='text-center text-decoration-underline mb-4'>Course Detail</h2>
                        <Form>
                            <Form.Group controlId="formGridEmail"> 
                                <Form.Label className='fw-bold'>Select Course</Form.Label>
                                <Form.Select aria-label="" value={seleccourse} onChange={(e)=>{setseleccourse(e.target.value)}}>
                                    <option defaultValue disabled> ------ Select Course ------- </option>
                                    {
                                        courses.map((i,id)=>{
                                            return(
                                                <option key={id} value={i._id}>{i.coursename}</option>
                                            )
                                        })
                                    }
                                </Form.Select>
                            </Form.Group>
                            <Form.Group  controlId="formGridEmail">
                                <Form.Label className='fw-bold'>Content</Form.Label>
                                <Form.Control placeholder="" value={content} onChange={(e)=>{setcontent(e.target.value)}} />
                            </Form.Group>
                            <Form.Group  controlId="formGridEmail">
                                <Form.Label className='fw-bold'>Fees</Form.Label>
                                <Form.Control placeholder="" value={fees} onChange={(e)=>{setfees(e.target.value)}}/>
                            </Form.Group>
                            <Form.Group  controlId="formGridEmail">
                                <Form.Label className='fw-bold'>Duration</Form.Label>
                                <Form.Control placeholder="" value={duration} onChange={(e)=>{setduration(e.target.value)}} />
                            </Form.Group>
                            <Button variant="primary" onClick={addcontent} className='w-100 mt-4'>
                                Submit
                            </Button>
                        </Form>
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
}
export default Addcontent;