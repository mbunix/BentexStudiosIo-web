import { Link } from "@next/Link";
import Image from 'next/image';
import { ArrowRight } from 'react-bootstrap-icons'
import Carousel from 'react-bootstrap/Carousel'
export default function Homepage() {
    return (
        <div>
            {/* navbar-section */}
            <div className="navbar">
                <div className="navbar__logo">
                    <Link href="../../public/next.svg">
                        <a>Logo</a>
                    </Link>
                </div>
                <div className="navbar__links">
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                    <Link href="/services">
                        <a>Services</a>
                    </Link>
                    <Link href="/pricing">
                        <a>Pricing</a>
                    </Link>
                    <Link href="/contact-us">
                        <a>Contact</a>
                    </Link>
                    <Link href="/products">
                        <a>Products</a>
                    </Link>
                    <Link href="/sign-in">
                        <a>Sign In</a>
                    </Link>
                </div>
            </div>
            {/* intro-section */}
            <div className="intro">
                <div className="intro__title">
                    <h1>
                        <span>
                            <i className="fas fa-code">
                                Transform  Your Business
                            </i>
                            <Image src={ "../../public/intro-ai.svg"} width={ 300} height={ 200} alt="into-section-ai-image"/>
                        </span>
                        <span>
                            <i className="fas fa-code">
                                Our team of experts has years of experience in the it industry
                                and has a passion for innovative technology,we are dedicated to delivering 
                                solutions that are tailored to your business unique needs and budget that excee your expectaton 
                            </i>
                        </span>
                        <span>
                            <i className="fas fa-code">
                                <h3 className="intro__subtitle">About</h3>
                                <h4>We believ that technology can transform the world</h4>
                                <p>
                                    That is  why we are commited to delivering IT Solutions to businesses of all sizes.
                                    Our Team of experienced professionals is dedicated to helping ou achieve your business goals
                                    and thrive in a rapily evolving digital landscape. Our goal is to help businesses of all sizes
                                    Succeed by providing customized solutions that meet their unique needs
                                </p>
                            </i>
                        </span>
                        <span>
                            <i className="fas fa-code-company-slider">
                                <div className="company-slider">
                                    <h3>Trusted by</h3>
                                    <div className="company-slider__google">
                                        <image src={ "../../public/google.svg"} width={ 50} height={ 50} alt="google-logo"/>
                                    </div>
                                    <div className="company-slider__amazon">
                                        <image src={ "../../public/amazon.svg"} width={ 50} height={ 50} alt="amazon-logo"/>
                                    </div>
                                    <div className="company-slider__safaricom">
                                        <image src={"../../public/safaricom.svg"} width={50} height={50} alt="safaricom-logo" />
                                    </div>
                                </div>
                            </i>
                        </span>
                        <span>
                            <i className="fas fa-code-why-us">
                                <h3 className="why-us__subtitle">Why Us</h3>
                                <div className="expertise">
                                    <image src={"../../public/expertise.svg"} width={50} height={50} alt="expertise-profile" />
                                    <h4>Expertise</h4>
                                    <p>
                                        Our team of experienced engineers have the knowledge and expertise to deliver
                                        innovative solutions that are tailored to your business unique needs and budget
                                    </p>
                                </div>
                                <div className="technology">
                                    <image src={"../../public/technology.svg"} width={50} height={50} alt="technology-profile" />
                                    <h4>Technology</h4>
                                    <p>
                                        We stay upto ate with the latest trends and technologies in the industry
                                        as you can get the most advanced solutions available 
                                    </p>
                                </div>
                                <div className="solutions">
                                    <image src={"../../public/solutions.svg"} width={50} height={50} alt="technology-profile" />
                                    <h4>Technology</h4>
                                    <p>
                                        We take a personalized approach to every project, working closely with you to understand 
                                        your business and create solutions
                                    </p>
                                </div>
                                <div className="results">
                                    <image src={"../../public/results.svg"} width={50} height={50} alt="technology-profile" />
                                    <h4>Results</h4>
                                    <p>
                                        Our track record speaks for itself, we have delivered over 100 successful projects
                                        and helped businesses of all sizes and industries achieve their goals with our IT solutions
                                    </p>
                                </div>
                            </i>
                        </span>
                        <span>
                            <i className="fas fa-code-our-services-hover">
                                <canvas id="web-development" width="30" height="30">Web Development</canvas>
                                <canvas id="mobile-development" width="30" height="30">Mobile Development</canvas>
                                <canvas id="cloud-computing" width="30" height="30">Cloud Computing</canvas>
                                <canvas id="digital-marketing" width="30" height="30">Digital Marketing</canvas>
                                <canvas id="software-development" width="30" height="30">Software Development</canvas>
                                <canvas id="cyber-security" width="30" height="30">Cyber Security</canvas>
                            </i>
                            <div className="our-services">
                                <h3>Services</h3>
                                <p className="service">
                                    We are dedicated to providing that meeet our clients unique needs
                                    and help them Succeed in the agile business space.
                                </p>
                                <button className="btn-services">Learn More</button>
                            </div>
                        </span>
                        <span>
                            <i className="fas fa-code-projects">
                                <h3 className="projects__subtitle">Projects</h3>
                                <button onClick={this.toggleProjects} className="btn-projects">Read More</button>
                                <div className="projects">
                                    <div className="project-company">
                                        <h3>Telcos </h3>
                                    </div>
                                    <div className="project-title">
                                        <h4>{ project.year} year</h4>
                                        <p>{ project.description} description</p>                
                                    </div>
                                    <div className="project-image"></div>
                                        <Image src={ "../../public/projectOne.png"} width={ 60} height={ 40} alt="project-image"/>
                                    </div>
                            </i>
                        </span>
                    </h1>
                </div>
            </div>
            {/* call to action */}
            <div className="meet-our-team">
                <span>
                    <h3>Ready To Meet Our Team? </h3>
                    <button>Request A demo </button>
                    <i>
                        <div className="statistics-section">
                            <h4>25+ successful projects</h4>
                            <h4>100+ satisfied clients</h4>
                            <h4>35+ countries</h4>
                        </div>
                    </i>
                </span>
            </div>
            {/* blog section */}
            <div className="blog-section-quotes" >
                <p className="blog-section-quotes__text">
                    <strong>
                        working with bentexstudiosio has been a great experience for our business
                        their expertise in cloud computing  has helped us grow nd scale our operations
                        exponentally and their personalized approach ensured we got what we needed
                    </strong>
                </p>
                    <Image className="avater-image" src = "../../public/avater.png" width={ 20} height={ 20} alt="avater"/>
            </div>
            {/* our team */}
            <div className='meet our teams'>
                <h2>Meet the teeam</h2>
                <div className="carousel-ceo">
                <Carousel>
                    <Carousel.item>
                            <Image  className = 'd-block w-100'src={'../../public/team/ceo.png' width={20} height={20} alt="ceo-image" } />
                        </Carousel.item>
                        <Carousel.caption>
                            <h3> More About our C.E.0</h3>
                            <p> Our ceo has been the inspiration ;<i ><ArrowRight/></i> </p>
                        </Carousel.caption>
                </Carousel>
                </div>
                <div className="carousel-cto">
                    <Carousel>
                        <Carousel.item>
                            <Image  className = 'd-block w-100'src={'../../public/team/cto.png' width={20} height={20} alt="cto-image" } />
                        </Carousel.item>
                        <Carousel.caption>
                            <h3> More About our C.T.O</h3>
                            <p> Meet our CTO an amaizing leader;<i ><ArrowRight/></i> </p>
                        </Carousel.caption>
                    </Carousel>
                </div>
                <div className="carousel-engineering lead">
                    <Carousel>
                        <Carousel.item>
                            <Image  className = 'd-block w-100'src={'../../public/team/engineering.png' width={20} height={20} alt="engineer-image" } />
                        </Carousel.item>
                        <Carousel.caption>
                            <h3> More About our Engineering lead</h3>
                            <p> Our engineering manager ensures team success;<i ><ArrowRight /></i> </p>
                        </Carousel.caption>
                    </Carousel>
                </div>
                <div className="carousel-marketing">
                    <Carousel>
                        <Carousel.item>
                            <Image  className = 'd-block w-100'src={'../../public/team/marketing.png' width={20} height={20} alt="marketing-image" } />
                        </Carousel.item>
                        <Carousel.caption>
                            <h3> More About our Marketing team</h3>
                            <p> Our marketing professional are the face of the company<i ><ArrowRight /></i> </p>
                        </Carousel.caption>
                    </Carousel>
                </div>
                <div className="carousel-customer-sucess">
                    <Carousel>
                        <Carousel.item>
                            <Image  className = 'd-block w-100'src={'../../public/team/customer-sucess.png' width={20} height={20} alt="marketing-image" } />
                        </Carousel.item>
                        <Carousel.caption>
                            <h3> More About our Customer Success team</h3>
                            <p> Our customer success team , they ensure each customer is satisfied<i ><ArrowRight /></i> </p>
                        </Carousel.caption>
                    </Carousel>
                </div>
            </div>
            {/* faq section */}
            <div className="faq-section">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-section-content">
                    <div className="faq-section-content-title">
                        <h3>Which services does bentexstudiosio offer?</h3>
                    </div>
                    <div className="faq-section-content-content">
                        <p>
                            We offer a wide range of IT solutions that are tailored to your business unique needs and budget,from cloud computing, mobile development, web development, software development and more
                            also custom software intergration and payment systems intergration on top of Enterprise resource software
                        </p>
                    </div>
                    <div className="faq-section-content-title">
                        <h3>Which IT solution is for my business?</h3>
                    </div>
                    <div className="faq-section-content-content">
                        <p>
                            We offer custom services based on your specific company needs.Find more about our services
                            <Link to="/services">here</Link>
                        </p>
                    </div>
                    <div className="faq-section-content-title">
                        <h3>How much does it cost?</h3>
                        <div className="faq-section-content-content">
                            <p>
                                our pricing varies based on the specific services and needs of your business,we offer flexible 
                                pricing options to suit your budget and requiremets, we struggle to provide clear an consice answers
                                so that our clients have seemless experience <Link to="/pricing">here</Link>
                            </p>
                        </div>
                    </div>
                        <div className="faq-section-content-title">
                            <h3>How do i get started with the solutions?</h3>
                        
                        <div className="faq-section-content-content">
                            <p>
                                we offer a free 30 minute consultation to help you determine the best solution for your business
                                Get started here <Link to="/get-started"><ArrowRight /></Link>
                            </p>
                        </div>
                        </div>
                </div>
            </div>
            {/* FOOTER SECTION */}
            <footer>
                <div className="footer-content">
                    <div className="footer-content-title">
                        <h3>Bentexstudiosio</h3>
                    </div>
                    <div className="footer-content-content">
                        <p>
                            Bentexstudiosio is a full-service IT solutions provider, we offer a wide range of IT solutions that are tailored to your business unique needs and budget,from cloud computing, mobile development, web development, software development and more
                            also custom software intergration and payment systems intergration on top of Enterprise resource software
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}