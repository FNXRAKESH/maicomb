import React, { useEffect } from 'react';
import styles from '../styles/contact.module.scss'
import TicketTape from '@/components/ticketTape/page';

const Contact = () => {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
    return (
      <div id={styles.contact}>
        <div className={styles.header}>
          <h3 className={styles.title}>THE FUTURE OF SCALP CARE</h3>
        </div>
        <TicketTape />
        <div className="container-fluid py-5">
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className={styles.video}>
                <video autoPlay loop muted controls>
                  <source src="/productpage1.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="col-md-6">
              <div className={styles.formData}>
                <h5 className="text-center pb-4">Send us your comment</h5>
                <form action="https://formspree.io/f/mdovbebd" method="POST">
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="fullName"
                      name="fullName"
                      placeholder="Full Name"
                      required
                    />
                  </div>

                  <div class="mb-3">
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      name="email"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      type="number"
                      class="form-control"
                      id="phone"
                      name="phone"
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <textarea
                      type="text"
                      class="form-control"
                      id="Comment"
                      name="Comment"
                      placeholder="Comment"
                      required
                    />
                  </div>

                  <div class="d-flex justify-content-end mt-4">
                    <button className="btn" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
                <div className="row pt-4">
                  <div className="col-lg-6">
                    <h5>Write to us</h5>
                    <p>
                      You can write to us at our email address:{" "}
                      <a href="mailto:irieventure@gmail.com">
                        irieventure@gmail.com
                      </a>
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <h5>Give us a call</h5>
                    <p>
                      You can also call us at
                      <br />
                      <a href="tel:(407) 300-2740">(407) 300-2740</a> with
                      questions or comments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div style={{ position: 'relative', height:'100vh'}}>
          <div className={styles.video}>
            <video autoPlay loop muted controls>
              <source src="/productpage1.mp4" type="video/mp4" />
            </video>
          </div>
        </div> */}
      </div>
    );
}
 
export default Contact;