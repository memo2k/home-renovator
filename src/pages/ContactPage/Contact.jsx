import React from 'react';
import "./contact.scss";

const Contact = () => {
    return (
        <section className="contact-form">
            <div className="contact-form__inner">
                <div className="form">
                    <div className="form__heading">
                        <div className="form__title">
                            <h1>Let's build something great together</h1>
                        </div>

                        <div className="form__description">
                            <p>Whatever your ambition, we'd love to design
                                and build your next big home addition or lend a
                                hand with a major renovation.</p>
                        </div>
                    </div>

                    <div className="form__body">
                        <div className="form__row">
                            <div className="form__field">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" />
                            </div>

                            <div className="form__field">
                                <label htmlFor="email">Email address</label>
                                <input type="text" id="email" />
                            </div>
                        </div>

                        <div className="form__row">
                            <div className="form__field">
                                <label htmlFor="phone">Phone number</label>
                                <input type="text" id="phone" />
                            </div>

                            <div className="form__field">
                                <label htmlFor="address">Physical address (optional)</label>
                                <input type="text" id="address" />
                            </div>
                        </div>

                        <div className="form__row">
                            <div className="form__field">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" cols="30" rows="10"></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="form__actions">
                        <button className='btn btn--dark-blue'>Send</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact