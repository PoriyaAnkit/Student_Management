import Table from 'react-bootstrap/Table';
import { AiOutlineEdit ,AiOutlineDelete} from "react-icons/ai";
import { Link } from 'react-router-dom';

let Viewuser = () => {
    return (
        <>
           <div className="d-flex align-items-center mt-5 mx-5 justify-content-between">
                <h3 className=" m-0 text-decoration-underline">View User</h3>
                <div className='d-flex'>
                    <Link to='/' className='text-black me-2 '> Home </Link> /
                    <p className='ms-2 mb-0'>View User</p>
                </div>
            </div>
            <div className="login1">
                <div className="viewpage d-flex rounded-2 p-5">
                    <div className=' w-100'>
                    <h2 className='text-center text-decoration-underline mb-4'>User Detail</h2>
                        <Table  bordered>
                            <thead >
                                <tr className='text-center table-dark fs-4' >
                                    <th>No</th>
                                    <th>Username</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='table-secondary text-center'>
                                    <td className='text-center pt-3'>1</td>
                                    <td className='pt-3'>User</td>
                                    <td className=' justify-content-around d-flex'>
                                        <div className="btn text-primary"><AiOutlineEdit className='fs-4'/></div>
                                        <div className="vr h-auto "></div>
                                        <div className="btn text-danger "><AiOutlineDelete className='fs-4'/></div>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Viewuser;