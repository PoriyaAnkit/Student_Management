import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useEffect, useState } from 'react';
import { HiViewfinderCircle } from "react-icons/hi2";
import axios from 'axios';
import Header from "./Header";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { AiOutlineSearch } from "react-icons/ai";

let Viewadd = () => {

    let token = localStorage.getItem("token")
    let [view,setview] = useState([])

    let [none , setnone] = useState(true)
    let [block , setblock] = useState('none')

    useEffect(()=>{
        viewdata()
    },[])

    let viewdata = ()=>{
        axios.get("http://localhost:5000/course/allstudent_detail",{
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
    }

    let datadelete = (id)=>{

        axios.delete(`http://localhost:5000/course//deletestudentDetail/${id}`,{
            headers:{
                Authorization : token
            }
        })
        .then((res)=>{
            if(none)
            {
                setblock('block')
            }
            setTimeout(() => {
                setblock('none')
            }, 2000);
            viewdata()
        })
        .catch((err)=>{
            console.log("error");
        })
    }

    return (
        <>
            <div className="d-flex align-items-center mt-5 mx-5 justify-content-between">
                <h3 className=" m-0 text-decoration-underline">View Admition</h3>
                <div className='d-flex'>
                    <Link to='/' className='text-black me-2 '> Home </Link> /
                    <p className='ms-2 mb-0'>View Admition</p>
                </div>
            </div>
            <h3 className={block} style={{textAlign:"center" ,color:"red" , paddingTop:'20px' , width:"250px" , margin:"auto"}}>Delete Successfully</h3>
            <div className="login1">
                <div className="viewsize d-flex rounded-2 p-5 mx-5">
                    <div className=' w-100'>
                        <h2 className='text-center text-decoration-underline mb-4'>Addmition Detail</h2>
                        <Table bordered className=" overflow-scroll overflow-hidden" >
                            <thead>
                                <tr className='text-center table-dark fs-5'>
                                    <th>No</th>
                                    <th>Surname</th>
                                    <th>Student</th>
                                    <th>Father Name</th>
                                    <th>total_fees</th>
                                    <th>joining_date</th>
                                    <th>batch_time</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {/* ? meaning value not show that time value are not pass */}
                            <tbody>
                                {
                                    view.map((i, id) => {
                                        return (
                                            <tr className='table-secondary text-center' key={id}>
                                                <td className='text-center pt-3'>{id + 1}</td>
                                                <td className='pt-3'>{i.surname}</td>
                                                <td className='pt-3'>{i.studentname}</td>
                                                <td className='pt-3'>{i.fathername}</td>
                                                <td className='pt-3'>{i.total_fees}</td>
                                                <td className='pt-3'>{i.joining_date}</td>
                                                <td className='pt-3'>{i.batch_time}</td>
                                                <td className=' justify-content-around d-flex'>
                                                    <div className="btn " >  <Link to={`/updatedata/${i._id}`} className="text-primary"> <AiOutlineEdit className='fs-4' /> </Link> </div>
                                                    <div className="vr h-auto"></div>
                                                    <div className="btn text-danger" onClick={()=>{datadelete(i._id)}} ><AiOutlineDelete className='fs-4' /></div>
                                                    <div className="vr h-auto"></div>
                                                    <div className="btn " > <Link to={`/studentdata/${i._id}`} className="text-secondary"> <HiViewfinderCircle className='fs-4' /></Link></div>
                                                </td>
                                            </tr >
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Viewadd