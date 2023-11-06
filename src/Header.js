import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AiOutlineMenu, AiOutlineMail, AiOutlineLogout, AiOutlinePlusSquare, AiOutlineSearch, AiOutlineTable, AiOutlineDashboard, AiOutlineLayout, AiFillPieChart, AiOutlineBell, AiOutlineForm } from "react-icons/ai";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { MdOutlineWidgets, MdZoomOutMap } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { BsFillImageFill, BsKanban } from "react-icons/bs";
import { RiPagesLine } from "react-icons/ri";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Dashboard from './Dashbord';
import { Routes, Route } from "react-router-dom"
import { FaRegComments } from "react-icons/fa6";
import { FaThLarge, FaDiscourse } from "react-icons/fa";
import { BsThreeDots, BsCircle, BsCircleFill } from "react-icons/bs";
import { HiDocument } from "react-icons/hi";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { FiUserPlus } from "react-icons/fi";
import Adduser from './Adduser';


let Header = ({children}) => {
    let token = localStorage.getItem('token')

    var Navigate = useNavigate()

    let [width, setwidth] = useState(true)
    let [height, setheight] = useState('part1')
    let [margin , setmarrgin] = useState('margins')

    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);

    // let [block,setblock]=useState('block')


    let menu = () => {
        setwidth(true)
        if (width) {
            setheight('part3')
            setmarrgin('margine')
            setwidth(false)
        }
        else {
            setmarrgin('margins')
            setheight('part1')
        }
    }

    const logout = () => {
        // localStorage.clear()
        // window.location = "/";
        // window.location='/'
        // // (token === "")?Navigate('/Header'):Navigate('/log')

        // if(token === "")
        // {
        //     Navigate('/Header')
        // }
        // else
        // {
        //     Navigate('/log')
        // }
    }

    return (
        <>
            <div className="d-flex">
                <div className={height}>
                    <div className="task">
                        <div className="logo d-flex align-items-center">
                            <img src={require('./image/Logo.webp')} width={33} alt="" />
                            <h5 className='m-0 ms-4'> <Link to='login'>AdminLTE 3</Link> </h5>
                        </div>
                        <hr />
                        <div className='fixed'>
                            <div className="logo pt-0 d-flex align-items-center">
                                <img src={require('./image/user160x160.jpg')} width={33} alt="" className='rounded-pill' />
                                <p className='m-0 ms-4'> <a href="">Alexander Pierce</a> </p>
                            </div>
                            <hr />

                            <div>
                                <InputGroup className={`${(width) ? 'd-block' : 'd-none'}`}>
                                    <div className='d-flex'>
                                        <Form.Control id="inlineFormInputGroup" placeholder="Search" className='search ' />
                                        <InputGroup.Text className='search'> <AiOutlineSearch /> </InputGroup.Text>
                                    </div>
                                </InputGroup>
                                {/* <DropdownButton id="dropdown-item-button" title="Dashboard" className='dash'>
                                    <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                                    <Dropdown.Item as="button">Action</Dropdown.Item>
                                    <Dropdown.Item as="button">Another action</Dropdown.Item>
                                    <Dropdown.Item as="button">Something else</Dropdown.Item>
                                    </DropdownButton> */}
                                <ul className='ulpadd'>
                                    {/* <li className='dash dash1 rounded'>
                                        <Link to='dash'><AiOutlineDashboard className='text-white icon me-3 mb-1'></AiOutlineDashboard>
                                            Dashboard</Link>
                                    </li> */}
                                    <li className='dash rounded px-1 py-0 '>
                                        <Button
                                            onClick={() => setOpen(!open)}
                                            aria-controls="example-collapse-text"
                                            aria-expanded={open}
                                            className='dashhover dash1'
                                        >
                                            <Link><AiOutlineDashboard className='text-white icon  me-3 mb-1'></AiOutlineDashboard>Dashboard </Link>
                                        </Button>
                                        <Collapse in={open} className='das'>
                                            <div>
                                                <div id="example-collapse-text" className='dash dash2 rounded '>
                                                    <Link to='/dash'> <BsCircle className='text-white icon me-3 mb-1 circle'></BsCircle> Dashboard V1</Link>
                                                </div>
                                                <div id="example-collapse-text" className='dash dash2 rounded '>
                                                    <Link to='/dash'> <BsCircle className='text-white icon me-3 mb-1 circle'></BsCircle> Dashboard V2</Link>
                                                </div>
                                            </div>
                                        </Collapse>
                                    </li>
                                    <li className='dash rounded px-1 py-0 '>
                                        <Button
                                            onClick={() => setOpen1(!open1)}
                                            aria-controls="example-collapse-text"
                                            aria-expanded={open1}
                                            className='dashhover dash2 '
                                        >
                                            <Link><FiUserPlus className='text-white icon  me-3 mb-1'></FiUserPlus>Manage User </Link>
                                        </Button>
                                        <Collapse in={open1} className='das'>
                                            <div>
                                                <div id="example-collapse-text" className='dash dash2 rounded '>
                                                    <Link to='/adduser'> <BsCircle className='text-white icon me-3 mb-1 circle'></BsCircle>Add User</Link><br />
                                                </div>
                                                <div id="example-collapse-text" className='dash dash2 rounded '>
                                                    <Link to='/viewuser'> <BsCircle className='text-white icon me-3 mb-1 circle'></BsCircle>View User</Link>
                                                </div>
                                            </div>
                                        </Collapse>
                                    </li>
                                    <li className='dash rounded px-1 py-0 '>
                                        <Button
                                            onClick={() => setOpen2(!open2)}
                                            aria-controls="example-collapse-text"
                                            aria-expanded={open2}
                                            className='dashhover dash2 '
                                        >
                                            <Link><FaDiscourse className='text-white icon  me-3 mb-1'></FaDiscourse>Manage Course </Link>
                                        </Button>
                                        <Collapse in={open2} className='das'>
                                            <div>
                                                <div id="example-collapse-text" className='dash dash2 rounded '>
                                                    <Link to='/addcourse'> <BsCircle className='text-white icon me-3 mb-1 circle'></BsCircle> Add Course</Link>
                                                </div>
                                                <div id="example-collapse-text" className='dash dash2 rounded '>
                                                    <Link to='/viewcourse'> <BsCircle className='text-white icon me-3 mb-1 circle'></BsCircle> View Course</Link>
                                                </div>
                                            </div>
                                        </Collapse>
                                    </li>
                                    <li className='dash rounded px-1 py-0 '>
                                        <Button
                                            onClick={() => setOpen3(!open3)}
                                            aria-controls="example-collapse-text"
                                            aria-expanded={open3}
                                            className='dashhover dash2 '
                                        >
                                            <Link><FaDiscourse className='text-white icon  me-3 mb-1'></FaDiscourse>Course Contents </Link>
                                        </Button>
                                        <Collapse in={open3} className='das'>
                                            <div>
                                                <div id="example-collapse-text" className='dash dash2 rounded '>
                                                    <Link to='/addcontent'> <BsCircle className='text-white icon me-3 mb-1 circle'></BsCircle> Add Contentes</Link>
                                                </div>
                                                <div id="example-collapse-text" className='dash dash2 rounded '>
                                                    <Link to='/viewcontent'> <BsCircle className='text-white icon me-3 mb-1 circle'></BsCircle> View Contentes</Link>
                                                </div>
                                            </div>
                                        </Collapse>
                                    </li>
                                    <li className='dash rounded px-1 py-0 '>
                                        <Button
                                            onClick={() => setOpen4(!open4)}
                                            aria-controls="example-collapse-text"
                                            aria-expanded={open4}
                                            className='dashhover dash2 '
                                        >
                                            <Link><FiUserPlus className='text-white icon  me-3 mb-1'></FiUserPlus>Admissions </Link>
                                        </Button>
                                        <Collapse in={open4} className='das'>
                                            <div>
                                                <div id="example-collapse-text" className='dash dash2 rounded '>
                                                    <Link to='/addmition'> <BsCircle className='text-white icon me-3 mb-1 circle'></BsCircle>Add Student</Link>
                                                </div>
                                                <div id="example-collapse-text" className='dash dash2 rounded '>
                                                    <Link to='/viewadd'> <BsCircle className='text-white icon me-3 mb-1 circle'></BsCircle>View Student</Link>
                                                </div>
                                            </div>
                                        </Collapse>
                                    </li>
                                    {/* <li className='dash dash2 rounded'>
                                        <a href=""><MdOutlineWidgets className='text-white icon me-3 mb-1'></MdOutlineWidgets>
                                            Widgets</a>
                                    </li>
                                    <li className='dash dash2 rounded'>
                                        <Link to='lay'><AiOutlineLayout className='text-white icon me-3 mb-1'></AiOutlineLayout>
                                            Layouts Options</Link>
                                    </li>
                                    <li className='dash dash2 rounded'>
                                        <a href=""><AiFillPieChart className='text-white icon me-3 mb-1'></AiFillPieChart>
                                            Charts </a>
                                    </li>
                                    <li className='dash dash2 rounded'>
                                        <a href=""><AiOutlineBell className='text-white icon me-3 mb-1'></AiOutlineBell>
                                            UI Elements </a>
                                    </li> */}
                                    <li className='dash dash2 rounded'>
                                        <a href=""><AiOutlineForm className='text-white icon me-3 mb-1'></AiOutlineForm>
                                            Forms </a>
                                    </li>
                                    <li className='dash dash2 rounded'>
                                        <a href=""><AiOutlineTable className='text-white icon me-3 mb-1'></AiOutlineTable>
                                            Tables </a>
                                    </li>
                                    <p className={`${(width) ? 'd-block' : 'd-none'} examp`}>EXAMPLES</p>
                                    <li className='dash dash2 rounded'>
                                        <a href=""><SlCalender className='text-white icon me-3 mb-1'></SlCalender>
                                            Calender </a>
                                    </li>
                                    <li className='dash dash2 rounded'>
                                        <a href=""><BsFillImageFill className='text-white icon me-3 mb-1'></BsFillImageFill>
                                            Gallary </a>
                                    </li>
                                    <li className='dash dash2 rounded'>
                                        <a href=""><BsKanban className='text-white icon me-3 mb-1'></BsKanban>
                                            Kanban Board </a>
                                    </li>
                                    <li className='dash dash2 rounded'>
                                        <a href=""><AiOutlineMail className='text-white icon me-3 mb-1'></AiOutlineMail>
                                            Mailboxe </a>
                                    </li>
                                    {/* <li className='dash dash2 rounded'>
                                        <a href=""><RiPagesLine className='text-white icon me-3 mb-1'></RiPagesLine>
                                            Pages </a>
                                    </li>
                                    <li className='dash dash2 rounded'>
                                        <a href=""><AiOutlinePlusSquare className='text-white icon me-3 mb-1'></AiOutlinePlusSquare>
                                            Extras </a>
                                    </li>
                                    <li className='dash dash2 rounded'>
                                        <a href=""><AiOutlineSearch className='text-white icon me-3 mb-1'></AiOutlineSearch>
                                            Search </a>
                                    </li>
                                    <p className={`${(width) ? 'd-block' : 'd-none'} examp`}>MISCELLANEOUS</p>
                                    <li className='dash dash2 rounded'>
                                        <a href=""><BsThreeDots className='text-white icon me-3 mb-1'></BsThreeDots>
                                            Tabbed IFrame Plugin </a>
                                    </li>
                                    <li className='dash dash2 rounded'>
                                        <a href=""><HiDocument className='text-white icon me-3 mb-1'></HiDocument>
                                            Documnetaion </a>
                                    </li>
                                    <p className={`${(width) ? 'd-block' : 'd-none'} examp`}>MULTILEVEL EXAMPLES</p>
                                    <li className='dash dash2 rounded'>
                                        <a href=""><BsCircleFill className='text-white icon me-3 mb-1'></BsCircleFill>
                                            Level 1 </a>
                                    </li>
                                    <li className='dash dash2 rounded'>
                                        <a href=""><BsCircleFill className='text-white icon me-3 mb-1'></BsCircleFill>
                                            Leval 1 </a>
                                    </li>
                                    <li className='dash dash2 rounded'>
                                        <a href=""><BsCircleFill className='text-white icon me-3 mb-1'></BsCircleFill>
                                            Leval 1 </a>
                                    </li>
                                    <p className={`${(width) ? 'd-block' : 'd-none'} examp`}>LABLES</p>
                                    <li className='dash dash2 rounded'>
                                        <a href=""><BsCircle className='text-danger icon me-3 mb-1'></BsCircle>
                                            Importent </a>
                                    </li>
                                    <li className='dash dash2 rounded'>
                                        <a href=""><BsCircle className='text-warning icon me-3 mb-1'></BsCircle>
                                            Warning </a>
                                    </li>
                                    <li className='dash dash2 rounded'>
                                        <a href=""><BsCircle className='text-info icon me-3 mb-1'></BsCircle>
                                            Information </a>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ width: '100%' }} className='part2'>
                    <Navbar collapseOnSelect expand="lg" className="bg-white head">
                        <Container fluid>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav" >
                                <Nav className="me-auto navhome">
                                    <Nav.Link href="" className='pe-3'><AiOutlineMenu onClick={menu}></AiOutlineMenu></Nav.Link>
                                    <Link to="/" className='pe-3 py-2'>Home</Link>
                                    <Nav.Link href="#features">Contact</Nav.Link>
                                </Nav>
                                <Nav className='map d-lg-block d-none '>
                                    <div className='d-flex align-items-center'>
                                    <Nav.Link href="#"> <AiOutlineSearch /> </Nav.Link>
                                    <Link to='/' onClick={logout}> <AiOutlineLogout /> </Link>
                                    </div>
                                    {/* <Nav.Link href="#"> <AiOutlineBell /> </Nav.Link>
                                    <Nav.Link href="#"> <MdZoomOutMap /> </Nav.Link>
                                    <Nav.Link href="#"> <FaThLarge /> </Nav.Link> */}
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <div> {children} </div>
                </div>
            </div>
        </>
    )
}

export default Header;