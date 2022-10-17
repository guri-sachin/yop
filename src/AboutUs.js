import React, { Component } from 'react'

import Typing from 'react-typing-animation';
import img20 from '../../../src/assests/contact-us2.PNG'
import about from '../../assests/second-image-about-team.png'
import laptop from '../../assests/lthird-image-about-team.png'
import image1 from '../../assests/first-new-make-differenet.png'
import image2 from '../../assests/support-about-team.png'
import image3 from '../../assests/four-new-make-differenet.png'
import image4 from '../../assests/five-new-make-fifferent.png'
import image5 from '../../assests/secondnew-make-differenet.png'
import client from '../../assests/client-about-team.png'
import website from '../../assests/website-about-team.png'
import mobile from '../../assests/mobile-about-us-team.png'
import ScrollAnimation from 'react-animate-on-scroll';
import img19 from '../../../src/assests/founder-team-about-us.png'
import coFounder from '../../../src/assests/co-founder-team-about-us.png'
import designer from '../../../src/assests/designer-team-about-us.png'
import developer from '../../../src/assests/developer-team-about-us.png'
import CountUp from 'react-countup';
import { Formik, ErrorMessage } from 'formik';
import swal from 'sweetalert';

import axios from 'axios'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchAboutData } from '../../Redux/Actions/aboutAction'
import store from '../../store';

class AboutUs extends Component {

    componentDidMount() {
        store.dispatch(fetchAboutData());
        console.log(fetchAboutData);        
        window.scrollTo(0, 0)
    }


    onSubmit = async (values) => {


        let formData = new FormData();
        formData.append('firstname', values.firstname);
        formData.append('email', values.email);
        formData.append('phone', values.phone);
        formData.append('resume', values.resume);
        formData.append('lastname', values.lastname);
        formData.append('skype', values.skype);
        formData.append('position', values.position);
        formData.append('message', values.message);

        axios.post('http://localhost:3302/getInTouch', formData)
            .then((res) => {
                console.log(res);
               
                // toast.success('Thank You ', {
                //     autoClose: 4000,
                // });
                 swal({
                     title: "Thank you!",
                     text: "We give feedback as soon as possible!",
                     icon: "success",
                   });
                store.dispatch(fetchAboutData());

                // setTimeout(() => {
                //     this.setState({ isError: false, errors: res.message });
                //     this.setState({ isSuccess: false, successMsg: '' });

                // }, 2000)
            })
            .catch((err) => {
                // toast.error('Please try again ', {
                //     autoClose: 4000,
                // });
                swal({
                    title: "Network error!",
                    text: "Please try again!",
                    icon: "error",
                  });
                this.setState({ isError: true, errors: err.message });
            });
    }


    render() {
        const { touchData } = this.props;
        console.log(touchData);
        return (
            <div>
                <Header {...this.props} />
                <section id="banner-about-us" >
                    <div class="container" id="container-banner">
                        <div class="row ">
                            <div id="banner-content-homepage" class="col-md-6">

                                <h1>About Omka Tech</h1>

                                <div class="button-left-about-us">
                                    <button type="button" class="btn" style={{ fontSize: '20px', fontFamily: 'Roboto' }}>Talk to an Expert</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="expert-about-us">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h1 className = "about-main-h1" style={{fontWeight  :'700' , fontSize: '2rem', fontFamily: 'Roboto'}}>OMKA TECH BELIEVES THAT THE WORLD REVOLVES AROUND TECHNOLOGY  </h1>
                                <p className = "about-main-p" style={{fontSize  :'16px' , marginTop : '20px' , fontFamily: 'Roboto'}}>At OMKA TECH we provide end to end business solutions for our clients. We help our clients convert their REQUIREMENT DOCUMENT TO THE FUNCTIONAL TECHNOLOGY. Here we take responsibility for the final end project, we make sure it is developed as per the Client’s taste and preference. We work very closely with our clients to ensure the Agile Development and the best suited business solution to their business.</p>
                            </div>
                            <div className="col-md-6 " >

                                <img src={about} />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="service-homepage-about-us">
                    <div class="container" >
                        <p class="newAboutUs">Why<strong style={{ color: '#ff511f' }}> We are Different</strong></p>
                        <hr />
                    </div>
                </section>

                <section id="omkatech-different-about-us">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <img className = "about-us-laptop-image" src={laptop} />
                                <div className="circle-about-different">
                                    <img id="test-about" src={image1} />
                                    <h5 style={{ fontSize: '20px', marginLeft: '100px', marginTop: '-50px', fontFamily: 'Roboto'}}>Guaranteed On-Time<br/> Delivery </h5>
                                </div>
                                <div className="circle-about-different-second">
                                    <img id="test-about" src={image5} />
                                    <h5 style={{ fontSize: '20px', marginLeft: '100px', marginTop: '-50px', fontFamily: 'Roboto' }}>Free Cost <br/>Analysis</h5>
                                </div>
                                <div className="circle-about-different-third">
                                    <img id="test-about" src={image2} />
                                    <h5 style={{ fontSize: '20px', marginLeft: '100px', marginTop: '-50px', fontFamily: 'Roboto' }}>24*7 Guaranteed<br/> Customer Support </h5>
                                </div>
                                <div className="circle-about-different-forth">
                                    <img id="test-about" src={image3} />
                                    <h5 style={{ fontSize: '20px', marginLeft: '100px', marginTop: '-50px', fontFamily: 'Roboto' }}>Dedicated "Team" for<br/> your "Project"</h5>
                                </div>
                                <div className="circle-about-different-five">
                                    <img id="test-about" src={image4} />
                                    <h5 style={{ fontSize: '20px', marginLeft: '100px', marginTop: '-50px', fontFamily: 'Roboto' }}>Certified Quality<br/> Work</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <section id="service-homepage-about-us">
                    <div class="container" >
                        <p class="newAboutUs">Our <strong style={{ color: '#ff511f' }}>Team</strong></p>
                        <hr />
                    </div>
                </section>

                <section id="our-team">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="img-area-our-team">
                                    <img src={img19} />
                                </div>
                                <div className="carousel-caption-our-team">
                                    <h3>Deepak Aggrawal</h3>
                                    <h4>FOUNDER</h4>
                                </div>

                                <div className="img-area-our-team-co-founder">
                                    <img src={coFounder} />
                                </div>
                                <div className="carousel-caption-our-team-co-founder">
                                    <h3>Aastha Gautam</h3>
                                    <h4>CO-FOUNDER</h4>
                                </div>
                                <div className="img-area-our-team-designer">
                                    <img src={designer} />
                                </div>
                                <div className="carousel-caption-our-team-designer">
                                    <h3>Sandhya Kumari</h3>
                                    <h4>UI/UX DESIGNER</h4>
                                </div>
                                <div className="img-area-our-team-developer">
                                    <img src={developer} />
                                </div>
                                <div className="carousel-caption-our-team-developer">
                                    <h3>Nitish Kumar</h3>
                                    <h4>DEVELOPER</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}


                <section id="banner-about-us-team">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div class="rectangle-get-about-us-banner">
                                    <img src={client} />
                                    <CountUp style={{ marginLeft: '15px', fontSize: '35px' }}
                                        start={0}
                                        end={1000}
                                        duration={15}
                                        redraw={true}
                                    />
                                    <h1>+</h1>
                                    <h5>Clients</h5>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div class="rectangle-get-about-us-banner">

                                    <img src={website} />
                                    <CountUp id="testCount" style={{ marginLeft: '25px', fontSize: '35px' }}
                                        start={0}
                                        end={400}
                                        duration={15}
                                    />
                                    <h1>+</h1>
                                    <h5>Website</h5>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div class="rectangle-get-about-us-banner">
                                    <img src={mobile} />
                                    <CountUp style={{ marginLeft: '25px', fontSize: '35px' }}
                                        start={0}
                                        end={700}
                                        duration={15}
                                    />
                                    <h1>+</h1>
                                    <h5>Mobile Apps</h5>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Setup A Free Consultation To Know How To Take Your <br /> Ideas From Concept To Reality
                                </h2>
                                <div class="button-left-aboutUs-new" id="desktop-view">
                                    <button type="button" class="btn" style={{ fontSize: '20px', fontFamily: 'Roboto' }} onClick={() => { this.props.history.push('Contact-us'); }}>know more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section id="service-homepage-about-us">
                    <div class="container" >
                        <p class="newAboutUs"><strong style={{ color: '#ff511f' }}>Career</strong> with OMKATECH</p>
                        <hr />
                    </div>
                </section>

                <section id="get-in-touch-about-us">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                {/* <h1 style={{fontFamily : 'Roboto' , fontWeight:'700'}}>GET IN TOUCH</h1> */}
                            </div>
                        </div>

<Formik
                                initialValues={{ firstname: '', email: '', phone: '', lastname: '', skype: '', position: '', message: '' }}
                                validate={values => {
                                    const errors = {};

                                    if (!values.email.trim()) {
                                        errors.email = 'Email Required';
                                    } else if (
                                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                    ) {
                                        errors.email = 'Invalid email address';
                                    }

                                    if (!values.firstname.trim()) {
                                        errors.firstname = 'First Name is Required';
                                    }

                                    if (!values.phone.trim()) {
                                        errors.phone = 'Mobile Number is Required';
                                     }
                                    //   else if (values.phone.length > 9) {
                                    //      errors.phone = 'Phone Number Minimum be 10 digit';
                                    // }
                                    // else if (values.phone.length > 9) {
                                    //     errors.phone = 'Phone Number Minimum be 10 digit';
                                    // }

                                    if (!values.lastname.trim()) {
                                        errors.lastname = 'Last Name is Required';
                                    }
                                    if (!values.position.trim()) {
                                       errors.position = 'Position Field is Required';
                                     }

                                    return errors;
                                }}
                                onSubmit={(values, actions) => {
                                    this.onSubmit(values).then(() => {
                                        actions.setSubmitting(false);
                                        actions.resetForm({
                                            values: {
                                                firstname: '',
                                                email: '',
                                                phone: '',
                                                lastname: '',
                                                skype: '',
                                                position: '',
                                                message: '',
                                                resume : ''
                                            },
                                        });
                                    });
                                }}
                            >
                                {({
                                    values,
                                    errors,
                                    touched,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                    isSubmitting,
                                    handleReset
                                    /* and other goodies */
                                }) => (
                                    <form onSubmit={handleSubmit}>
                                    <div className="row">
        
        
                                        <div className="col-md-6">
                                            <div class="form-group">
                                                <label className = "about-us-label1" style={{    marginLeft: '-440px' , fontFamily : 'Roboto'}}>First Name</label>
                                                <input type="text" name="firstname" id="firstname" value={values.firstname} onBlur={handleBlur} onChange={handleChange} class="form-control" placeholder=" First name" />
                                                <ErrorMessage name="firstname" component="div" />
                                            </div>
                                            <div class="form-group" >
                                                <label className = "about-us-label2" style={{    marginLeft: '-480px' , fontFamily : 'Roboto'}}>Email</label>
                                                <input type="text" name="email" id="email" value={values.email} onBlur={handleBlur} onChange={handleChange} class="form-control" placeholder=" Email" />
                                                <ErrorMessage name="email" component="div" />
                                            </div>
                                            <div class="form-group">
                                                <label className = "about-us-label3" style={{    marginLeft: '-440px' , fontFamily : 'Roboto'}}>Mobile No.</label>
                                                <input type="text" name="phone" id="phone" value={values.phone} onBlur={handleBlur} onChange={handleChange} class="form-control" placeholder=" Mobile No." />
                                                <ErrorMessage name="phone" component="div" />
                                            </div>
                                             <div class="form-group">
                                                <label className = "about-us-label4" style={{    marginLeft: '-420px' , fontFamily : 'Roboto'}}>Attach resume</label>
                                                <input type="file" name="resume" id="resume"   value={values.resume} onBlur={handleBlur} 
                                                onChange={handleChange} class="form-control" placeholder="Attach Resume" />
                                            </div> 
        
        
        
                                        </div>
                                        <div className="col-md-6" >
                                            <div class="form-group">
                                                <label className = "about-us-label5" style={{    marginLeft: '-440px', fontFamily : 'Roboto'}}>Last Name</label>
                                                <input type="text" name="lastname" id="lastname" value={values.lastname} onBlur={handleBlur} onChange={handleChange} class="form-control " placeholder=" Last name" />
                                                <ErrorMessage name="lastname" component="div" />
                                            </div>
                                            <div class="form-group">
                                                <label className = "about-us-label6" style={{    marginLeft: '-450px', fontFamily : 'Roboto'}}>Skype ID</label>
                                                <input type="text" name="skype" id="skype" value={values.skype} onBlur={handleBlur} onChange={handleChange} class="form-control" placeholder="Skype ID" />
                                             
                                            </div>
                                            <div class="form-group">
                                                <label className = "about-us-label7" style={{    marginLeft: '-370px', fontFamily : 'Roboto'}}>Position Applying For</label>
                                                <input type="text" name="position" id="position" value={values.position} onBlur={handleBlur} onChange={handleChange} class="form-control" placeholder="Position Applying For" />
                                                <ErrorMessage name="position" component="div" />
                                            </div>
                                            <div class="form-group">
        
                                                <label className = "about-us-label8" style={{    marginLeft: '-360px', fontFamily : 'Roboto'}}>Additional Infomation</label>
                                                <textarea rows="3" name="message" id="message" value={values.message} onBlur={handleBlur} onChange={handleChange} class="form-control" placeholder=" Additional Infomation"></textarea>
                                              
                                            </div>
        
                                        </div>
                                    </div>
                                    <div class="rectangle-get-about-us">
                            <button type="submit" className="btn">Submit</button>
                        </div>

                                </form>
                                    )}
                            </Formik>

                       
                      


                    </div>
                </section>

                 <section id="contact" style={{marginTop  :'-70px'}}>
                    <div class="container ">
                        <div class="row">
                            <div class="col-md-6">
                                <h3 >CONTACT US</h3>
                                <h2 class="mt-3" >Let's Work Together and Start A New Project</h2>
                                <h5 class="mt-3">India</h5>
                                <p style={{fontFamily : 'Roboto'}} id="desktop-address-view"> Address - Plot No. 183, Sector-28, Faridabad, Haryana, 121008<br/>
                 <new style={{marginLeft : '66px' , fontFamily : 'Roboto'}}>A Block, Sector-46, Noida, Uttar Pradesh, 201303</new></p>
                                <p id="mobile-address-view"> Address : Plot No. 183, Sector-28,<br /> Faridabad, Haryana & A Block,<br /> Sector-46, Noida, Uttar Pradesh</p>
                                <p style={{fontFamily : 'Roboto'}}><strong style={{ fontWeight: 'bold' , color: "black" , fontFamily : 'Roboto'}}>Email</strong> - info@omkatech.com</p>
                                <p style={{fontFamily : 'Roboto'}}><strong style={{ fontWeight: 'bold' , color: "black" , fontFamily : 'Roboto'}}>Sales </strong>:  +91 97175 11913 (GLOBAL) <br/> <new style={{marginLeft : '48px'}}>+1 786 855 1172 (USA)</new></p>
                            </div>
                           
                            <div class="col-md-6">                           
                                <img src={img20} />
                            </div>
                           
                        </div>
                    </div>
                </section>



 {/* <section id="contact" style={{marginTop  :'-70px'}} >
                    <div class="container ">
                        <div class="row">
                            <div class="col-md-6">
                                <h3 >CONTACT US</h3>
                                <h2 class="mt-3" >Let's Work Together and Start A New Project</h2>
                                <h5 class="mt-3">India</h5>
                                <p  style={{fontFamily : 'Roboto'}}id="desktop-address-view"> Address - Plot No. 183, Sector-28, Faridabad, Haryana, 121008<br/>
                 <new style={{marginLeft : '66px' ,  fontFamily : 'Roboto'}}>A Block, Sector-46, Noida, Uttar Pradesh, 201303</new></p>
                                <p id="mobile-address-view"> Address : Plot No. 183, Sector-28,<br /> Faridabad, Haryana & A Block,<br /> Sector-46, Noida, Uttar Pradesh</p>
                                <p><strong style={{ fontWeight: 'bold' , color: "black"}}>Email</strong> - info@omkatech.com</p>
                                <p><strong style={{ fontWeight: 'bold' , color: "black"}}>Sales </strong>:  +91 97175 11913 (GLOBAL) <br/> <new style={{marginLeft : '48px'}}>+1 786 855 1172 (USA)</new></p>
                            </div>
                           
                            <div class="col-md-6">                           
                                <img src={img20} />
                            </div>
                           
                        </div>
                    </div>
                </section> */}
                <Footer {...this.props} />
            </div>
        )
    }
}

AboutUs.propTypes = {
    fetchAboutData: PropTypes.func
}

const mapStateToProps = state => ({
    touchData: state.touchData.touchData
})

export default connect(mapStateToProps, { fetchAboutData })(AboutUs);