import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

let Adduser = () => {
    return (
        <>
                <div className="d-flex align-items-center mt-5 mx-5 justify-content-between">
                    <h3 className=" m-0 text-decoration-underline">Add User</h3>
                    <div className='d-flex'>
                        <Link to='/' className='text-black me-2 '> Home </Link> 
                        <p className='ms-2 mb-0'>Add User</p>
                    </div>
                </div>
                <div className="login1">
                    <div className="loginshadow d-flex justify-content-center rounded-2">
                        <div className='loginpage'>
                            <h2 className='text-center text-decoration-underline mb-3'>User Detail</h2>
                            <Form>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label className='fw-bold'>Username </Form.Label>
                                    <Form.Control type="email" placeholder="Username" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label className='fw-bold'>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Button variant="primary" type="submit" className='w-100'>
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Adduser;