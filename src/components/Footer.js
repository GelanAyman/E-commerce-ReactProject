import './Style.css'

function Footer() {

        return(<>
                <div className="footer bg-dark mt-5"> 
                        <div className="container">
                                <div className="row">
                                        <div className="col-md-6">
                                                <h4> contact Us </h4>
                                                <p> Cairo, Egypt </p>
                                                <p> E-mail: gelan99ayman@gmail.com </p>
                                        </div>

                                        <div className="col-md-6">
                                                <h4> Follow Us </h4>
                                                <a href="#"> Facebook </a>
                                                <br />
                                                <a href="#"> Linkedin </a>
                                                <br />
                                                <a href="#"> Github </a>
                                        </div>
                                </div>

                                <div className='text-center p-5'> 
                                        <p> &copy; Designed by 
                                                <i> Gelan Ayman Galal </i>
                                                &hearts;
                                        </p>
                                </div>
                        </div>
                </div>
        </>);
}

export default Footer;