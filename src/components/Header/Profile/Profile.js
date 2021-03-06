import React, {Component} from "react";
import "./Profile.css";
import { Container, Row, Col} from 'reactstrap';
import { Animated } from "react-animated-css";


class Profile extends Component {
   
    
    render() {

        const profilePic = "./assets/images/profilePic.jpg"
        
        return(
            <div>
                <Container>
                    <Row className="pt-3">
                        <Col lg="4">
                            <Animated animationIn="zoomIn" animationInDelay="100" isVisible={true}>
                                <Row className="title-row"></Row>
                                <Row >
                                    <Container className="img-container">
                                        <img src={profilePic} alt="profilePic" className="prof-pic" />
                                    </Container>
                                </Row>
                            </Animated>
                        </Col>
                        <Col lg="4">
                            <Animated animationIn="fadeIn" animationInDelay="500" isVisible={true}> 
                                <Row className="title-row">
                                    <h4>About Me</h4>
                                </Row>
                                <Row className="body-row  flex-column">
                                    <p className="text-secondary blurb"> As a Full Stack Developer, I have built web applications from the ground up requiring Node runtime-environments, relational and non-relational databases, RESTful API architecture and front-end JavaScript frameworks, such as React and Handlebars.
                                        </p>
                                        <p className="text-secondary blurb">
                                        I am eager to build new features and applications as I enjoy untangling complex logical processes and pride myself on my ability to foresee issues and exercise prevention rather than remedy when writing code. Learning new frameworks and more efficient ways to create usable and useful tools for people to enjoy is my forte.
                                    </p>
                                </Row>
                            </Animated>
                        </Col>
                        <Col lg="4">
                            <Animated animationIn="fadeIn" animationInDelay="900" isVisible={true}>
                                <Row className="title-row">
                                    <h4>Technical Skills</h4>
                                </Row>
                                <Row className="body-row flex-column">
                                    <div id="skills">
                                    <p><strong><u>Languages:</u></strong> <br/><i>JavaScript, HTML/CSS, MongoDB, SQL (MySQL/PostGres) </i></p>
                                    <p><strong><u>Front-End Tools:</u></strong> <br/><i>React, JQuery, Handlebars, Bootstrap, Chrome DevTools </i></p>
                                    <p><strong><u>Back-End Tools:</u></strong> <br /><i>Node, Express, Sequelize, Mongoose, AJAX </i></p>
                                    <p><strong><u>Deployment:</u></strong> <br/><i>Github Pages, Heroku</i></p>
                                    <p><strong><u>Project Tools:</u></strong><br/> <i>Git, VSCode, Chrome Developer Tools</i></p>
                                    </div>
                                </Row>
                            </Animated>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}


export default Profile;