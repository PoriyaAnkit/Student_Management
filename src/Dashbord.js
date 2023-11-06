import { Col, Container, Row } from "react-bootstrap";
import { PiHandbag } from "react-icons/pi";
import { BsFillArrowRightCircleFill, BsBarChart } from "react-icons/bs";
import { FiUserPlus } from "react-icons/fi";
import { IoMdPie } from "react-icons/io";
import Header from "./Header";

let Dashboard = () => {
    return (
        <>
            <div className=" mt-5" >
                <h2 className="board ">Dashboard</h2>
                <div className="">
                    <Container fluid>
                        <Row>
                            <Col lg={3} md={6}>
                                <div className="bg-info rounded">
                                    <div className="text-white d-flex bags align-items-center justify-content-between">
                                        <div>
                                            <h3>150</h3>
                                            <p>New Orders</p>
                                        </div>
                                        <PiHandbag className="bag" />
                                    </div>
                                    <div className="more text-white">
                                        <p className="text-center mb-0 py-1">More Info <BsFillArrowRightCircleFill /> </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6} className="mt-md-0 mt-3">
                                <div className="bg-success rounded">
                                    <div className="gap-2  text-white d-flex bags align-items-center justify-content-between">
                                        <div>
                                            <h3>53 %</h3>
                                            <p>Bounce Rate</p>
                                        </div>
                                        <BsBarChart className="bag" />
                                    </div>
                                    <div className="more text-white">
                                        <p className="text-center mb-0 py-1">More Info <BsFillArrowRightCircleFill /> </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6} className="mt-lg-0 mt-3">
                                <div className="bg-warning rounded">
                                    <div className="gap-2  text-black d-flex bags align-items-center justify-content-between">
                                        <div>
                                            <h3>44</h3>
                                            <p>User Registrations</p>
                                        </div>
                                        <FiUserPlus className="bag" />
                                    </div>
                                    <div className="more text-black">
                                        <p className="text-center mb-0 py-1">More Info <BsFillArrowRightCircleFill /> </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6} className="mt-lg-0 mt-3">
                                <div className="bg-danger rounded">
                                    <div className="gap-2  text-white d-flex bags align-items-center justify-content-between">
                                        <div>
                                            <h3>65</h3>
                                            <p>Unique Visitors</p>
                                        </div>
                                        <IoMdPie className="bag" />
                                    </div>
                                    <div className="more text-white">
                                        <p className="text-center mb-0 py-1">More Info <BsFillArrowRightCircleFill /> </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default Dashboard;