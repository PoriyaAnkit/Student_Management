import Table from 'react-bootstrap/Table';
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Header from './Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { AiOutlineSearch ,AiOutlineDoubleLeft ,AiOutlineDoubleRight} from "react-icons/ai";
import Modal from 'react-bootstrap/Modal';

import Button from 'react-bootstrap/Button';

let Viewcourse = () => {
    
    let token = localStorage.getItem("token")

    const [show, setShow] = useState(false);
    let [edit , setedit] = useState([])
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    let [none , setnone] = useState(true)
    let [block , setblock] = useState('none')
    let [page,setpage] = useState(1)
    let [view, setview] = useState([])
    let [starts , setstart] = useState(1)
    let [totalpage , settotalpage] = useState()
    let [arr,setarr] = useState([])
    let newarr = []

    useEffect(() => {
        dataget()
        for(let i=1 ; i<=totalpage ; i++)
        {
            newarr.push(i)
        }
        setarr(newarr)

    }, [page,totalpage])

    let dataget = (() => {
        axios.get(`http://localhost:5000/course/allcourse?page_no=${page}`,{
            headers : {
                Authorization:token
            }
        })
            .then((res) => {
                // console.log(res.data);
                if (res.data.status === "All Course Find Successfully") {
                    setview(res.data.data)
                    settotalpage(res.data.lastpage)
                    console.log(res.data.start);
                    setstart(res.data.start);
                }
            })
            .catch((err) => {

            })
    })

    let deletecourse = (id) => {
        console.log(id);
        axios.delete(`http://localhost:5000/course/coursedelete/${id}`,{
            headers : {
                Authorization:token
            }
        })
            .then((res) => {
                console.log(res.data);
                    if(none)
                    {
                        setblock('block')
                    }
                    setTimeout(() => {
                        setblock('none')
                    }, 2000);
                dataget();
            })
            .catch((err) => {
                console.log('error');
            })
    }

    let searchcourse = (e) => {
        // alert(e.target.value)
        axios.get(`http://localhost:5000/course/searchcourse?&search=${e.target.value}`,{
            headers : {
                Authorization:token
            }
        })
            .then((res) => {
                setview(res.data.data)
            }).catch((err) => {

            })
    }

    let editvalue = ((e)=>{
        setedit({...edit , [e.target.name]:e.target.value})
    })

   let handleShow = ((id)=>{
        axios.get(`http://localhost:5000/course/viewsinglecourse/${id}`,{
            headers : {
                Authorization:token
            }
        })
        .then((res)=>{
            setShow(true)
            let datas = res.data.data;
            setedit(datas)
            console.log(res.data);
        }).catch((err)=>{
            console.log('error');
        })
    })

    let handleClose = (()=>{
        axios.put('http://localhost:5000/course/updatecourse', {
            course_id: edit._id,
            coursename: edit.coursename
        },{
            headers : {
                Authorization:token
            }
        })
        .then((res)=>{
            setShow(false)
            dataget()
        })
        .catch((err)=>{
            console.log("error");
        })

    })
    return (
        <>
            <div className=" mt-5 ">
                <div className="d-flex align-items-center mt-5 mx-5 justify-content-between">
                    <h3 className=" m-0 text-decoration-underline">View Course</h3>
                    <div className='d-flex'>
                        <Link to='/' className='text-black me-2 '> Home </Link> /
                        <p className='ms-2 mb-0'>View Course</p>
                    </div>
                </div>
                <InputGroup className='d-flex justify-content-end w-25 mx-auto mt-3'>
                    <Form.Control id="inlineFormInputGroup" placeholder="Search Course" onChange={searchcourse} className='w-25' />
                    <InputGroup.Text  > <AiOutlineSearch /> </InputGroup.Text>
                </InputGroup>
                <h3 className={block} style={{textAlign:"center" ,color:"red" , paddingTop:'20px' , width:"250px" , margin:"auto"}}>Delete Successfully</h3>
                <div className="login1">
                    <div className="viewpage d-flex rounded-2 p-5">
                        <div className=' w-100'>
                            <h2 className='text-center text-decoration-underline mb-4'>Course Detail</h2>
                            <Table bordered className='table-responsive' >
                                <thead>
                                    <tr className='fs-5 text-center table-dark'>
                                        <th>No</th>
                                        <th>Username</th>
                                        <th>Action</th> 
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        view.map((i, id) => {
                                            return (
                                                <tr key={id} className='table-secondary'>
                                                    <td className='text-center pt-3'>{id + 1 + starts} </td>
                                                    <td className='pt-3 text-center'> {i.coursename} </td>
                                                    <td className=' justify-content-around d-flex'>
                                                        <div className="btn text-primary " onClick={()=>{handleShow(i._id)}}><AiOutlineEdit className='fs-4' /></div>
                                                        <div className="vr h-auto"></div>
                                                        <div className="btn text-danger " onClick={() => { deletecourse(i._id) }} ><AiOutlineDelete className='fs-4' /></div>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>

                            <div className="text-center">
                                <AiOutlineDoubleLeft className='fs-2 me-2'/>
                            {
                                arr.map((i,id)=>{
                                    return(
                                        <button key={id} className='btn btn-outline-primary rounded-pill me-2' value={i} onClick={(e)=>{setpage(e.target.value)}}> {i}  </button>
                                    )
                                })
                            }
                                <AiOutlineDoubleRight className='fs-2 me-2'/>
                            </div>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Data Edit</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Coursename</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Update Course"
                                                autoFocus
                                                name="coursename"
                                                value={edit.coursename}
                                                onChange={editvalue}
                                            />
                                        </Form.Group>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={handleClose}>
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Viewcourse;