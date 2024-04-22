import './Style.css'

function ContactUs() {
        
        return (<>
                <div className='container'>
                        <form>
                                <div className='formData'>
                                        <h2 className='text-center text-success'> Leave Your Msg </h2>

                                        <label> Name </label>
                                        <br />
                                        <input type='text'/>
                                        <br />
                                        <label> E-mail </label>
                                        <br />
                                        <input type='text'/>
                                        <br />
                                        <label> Your msg </label>
                                        <br />
                                        <input type='text'/>

                                        <br />
                                        {/*  Button trigger modal  */}
                                        <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                Send
                                        </button>
                                </div>
                                {/* < Modal  */}
                                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                                <div className="modal-content">
                                                        <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id="exampleModalLabel"> Done !</h1>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                                Your msg is  sent successfully!
                                                        </div>
                                                        <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                                        
                        </form>
                </div>
                
        </>) ;
}

export default ContactUs;