import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { AiOutlineGooglePlus } from "react-icons/ai";
import { BiLogoFacebook, BiLogoLinkedinSquare, BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState ,useEffect } from 'react';
import axios from 'axios';

let Login = () => {

    var navigate = useNavigate()

    let [pass, setpass] = useState(true)

    let [email, setemail] = useState()
    let [password, setpassword] = useState()

    let passicon = () => {

        if (pass) {
            setpass(false)
        }
        else {
            setpass(true)
        }

    }

    useEffect(() => {
        console.log(localStorage.getItem('token'))
},[])

let token = localStorage.getItem('token');

    let loginsubmit = () => {


        axios.post("http://localhost:5000/Login", {
            password: password,
            email: email
        }
        )

            .then((res) => {
                // console.log(res)
                if (res.data.status === "Login Successfully") {
                    localStorage.setItem('token',res.data.token)
                    navigate('/dash')
                }
            }).catch((error) => {
                console.log(error);
                alert("Enter a Correct Password")
            })
    }

    return (
        <>
            {/* <div className="d-flex align-items-center mt-5 mx-5 justify-content-between">
                <h3 className=" m-0 text-decoration-underline">Login Page</h3>
                <div className='d-flex'>
                    <Link to='/' className='text-black me-2 '> Home </Link> /
                    <p className='ms-2 mb-0'>Login Pager</p>
                </div>
            </div> */}
            <div className="d-flex vh100 bg-opacity-25 border bg-primary align-items-center justify-content-center rounded-4" >
                <div>
                    <img src={require('./image/loginimg.avif')} alt="" style={{width:"80%"}}/>
                </div>
                <div className="login mt-0">
                    <div className="loginshadow d-flex justify-content-center rounded-4">
                        <div className='loginpage'>
                            <h2 className='text-center text-decoration-underline mb-3'>LOGIN FORM</h2>
                            <Form>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label className='fw-bold'>Email </Form.Label>
                                    <Form.Control type="email" placeholder="Email" onChange={(e) => { setemail(e.target.value) }} />
                                </Form.Group>
                                <Form.Label className='fw-bold'>Password </Form.Label>
                                <InputGroup className='mb-3'>
                                    <Form.Control
                                        placeholder="Password"
                                        type={pass ? 'password' : 'text'}
                                        onChange={(e) => { setpassword(e.target.value) }}
                                    />
                                    <InputGroup.Text onClick={passicon}>
                                        {
                                            pass ? <BiHide /> : <BiShow />
                                        }
                                    </InputGroup.Text>
                                </InputGroup>
                                <p className='text-end '> <Link className='text-secondary'>Forget Password?</Link> </p>
                                <Button variant="primary" className='w-100' onClick={loginsubmit}>
                                    SIGN UP
                                </Button>
                            </Form>
                            <hr />
                            <div className="text-center ">
                                <div className=" btn rounded border"> <AiOutlineGooglePlus className='fs-3' /> </div>
                                <div className=" btn rounded border mx-2"> <BiLogoFacebook className='fs-3' /> </div>
                                <div className=" btn rounded border"> <BiLogoLinkedinSquare className='fs-3' /> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Login;