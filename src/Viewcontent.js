import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {AiOutlineDoubleLeft ,AiOutlineDoubleRight} from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";

let Viewcontent = () => {
    let token = localStorage.getItem('token')

    const [show, setShow] = useState(false);
    let [view, setview] = useState([])

    let [none , setnone] = useState(true)
    let [block , setblock] = useState('none')

    let [arr,setarr] = useState([])
    let [page,setpage] = useState(1)
    let [starts , setstart] = useState(1)
    let [totalpage , settotalpage] = useState()
    let newarr = []

    useEffect(() => {
        getdata()
        for(let i=1 ; i<=totalpage ; i++)
        {
            newarr.push(i)
        }
        setarr(newarr)
    }, [page,totalpage])

    let getdata = () => {
        axios.get(`http://localhost:5000/course/allcontent?page_no=${page}`,{
            headers : {
                Authorization:token
            }
        })
            .then((res) => {
                console.log(res.data);
                setview(res.data.data)
                settotalpage(res.data.lastpage)
                console.log(res.data.start);
                setstart(res.data.start);
                // console.log(res.data.data.content_id)
            })
            .catch((err) => {
                console.log('error');
            })
    }

    let deletecontent = (content_id) => {
        console.log(content_id);
        axios.delete(`http://localhost:5000/course/contentdelete/${content_id}`,{
            headers : {
                Authorization:token
            }
        })
        .then((rep) => {
            console.log(rep.data);
            if(none)
            {
                setblock('block')
            }
            setTimeout(() => {
                setblock('none')
            }, 2000);
            getdata()
        })
        .catch((err) => {
            console.log("error");
        })
    }

    let searchcourse= ((e)=>{
        axios.get(`http://localhost:5000/course/searchcontent?&search=${e.target.value}`,{
            headers : {
                Authorization:token
            }
        })
        .then((res)=>{
            console.log(res);
            setview(res.data.data)
        })
        .catch((err)=>{
            console.log("error");
        })
    })

    let [edit , setedit] = useState([]);
    // let [coures , setcoursename] = useState()

    let editvalue = ((e)=>{
        setedit({...edit, [e.target.name] : e.target.value})
        console.log(edit);
    })

    let handleShow = ((id)=>{
        // alert(id)
        setShow(true)
        axios.get(`http://localhost:5000/course/viewsinglecontent/${id}`,{
            headers : {
                Authorization:token
            }
        })
        .then((res)=>{

            console.log(res.data);
            let datas = res.data.data;
            console.log(datas);
            // let couresnames = res.data.coursename;
            // setcoursename(couresnames)
            setedit(datas);
        })
        .catch((err)=>{
            console.log("error");
        })
    })

    let handleClose= (()=>{
        setShow(false)
        axios.put('http://localhost:5000/course/updatecontent',{
            content_id : edit._id,
            content : edit.content,
            duration : edit.duration,
            total_fees : edit.total_fees
        },{
            headers : {
                Authorization:token
            }
        })
        .then((res)=>{
            getdata()
        })
        .catch((err)=>{
            console.log("error");
        })
    })

   

    return (
        <>
            <div className=" mt-5 ">
                <div className="d-flex align-items-center mt-5 mx-5 justify-content-between">
                    <h3 className=" m-0 text-decoration-underline">View Content</h3>
                    <div className='d-flex'>
                        <Link to='/' className='text-black me-2 '> Home </Link> /
                        <p className='ms-2 mb-0'>View Content</p>
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
                            <h2 className='text-center text-decoration-underline mb-4'>Content Detail</h2>
                            <Table bordered className="table-responsive">
                                <thead>
                                    <tr className='text-center table-dark fs-5'>
                                        <th>No</th>
                                        <th>Coursename</th>
                                        <th>Content</th>
                                        <th>Fees</th>
                                        <th>Duration</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                {/* ? meaning value not show that time value are not pass */}
                                <tbody>
                                    {
                                        view.map((i, id) => {
                                            return (
                                                <tr key={id} className='table-secondary text-center'>
                                                    <td className='text-center pt-3'>{id + 1 + starts}</td>
                                                    <td className='pt-3'>{i.coursename}</td>
                                                    <td className='pt-3'>{i.content_id?.content}</td>
                                                    <td className='pt-3'>{i.content_id?.total_fees}</td>
                                                    <td className='pt-3'>{i.content_id?.duration}</td>
                                                    <td className=' justify-content-around d-flex'>
                                                        <div className="btn text-primary" onClick={()=>{handleShow(i.content_id?._id)}}><AiOutlineEdit className='fs-4' /></div>
                                                        <div className="vr h-auto"></div>
                                                        <div className="btn text-danger " onClick={() => { deletecontent(i.content_id?._id) }}><AiOutlineDelete className='fs-4' /></div>
                                                    </td>
                                                </tr >
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
                                        {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Coursename</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Update Course"
                                                autoFocus
                                                name="coursename"
                                                value={coures}
                                                disabled
                                            />
                                        </Form.Group> */}
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Content</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Update content"
                                                autoFocus
                                                name="content"
                                                value={edit.content}
                                                onChange={editvalue}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Duration</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Update duration"
                                                autoFocus
                                                name="duration"
                                                value={edit.duration}
                                                onChange={editvalue}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Total Fees</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Update fees"
                                                autoFocus
                                                name="total_fees"
                                                value={edit.total_fees}
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
                </div >
            </div >
        </>
    )
};

export default Viewcontent;