import React from 'react'

function Contact() {
  return (
    <section class="contact-section">
        <div class="auto-container">
            <div class="contact-title">
                <h2>Drop us message</h2>
                <div class="text">Praising pain was born and I will give you a complete account of the system, and </div>
            </div>
            <div class="row clearfix">
                
                <div class="form-column col-lg-7">
                    <div class="inner-column">
                        <div class="contact-form">
                            <form method="post" action="sendemail.php" id="contact-form">
                                <div class="row clearfix">
                                    <div class="form-group col-md-12">
                                        <input type="text" name="form_name" value="" placeholder="Your Name" required/>
                                    </div>
                                    
                                    <div class="form-group col-md-12">
                                        <input type="text" name="email" value="" placeholder="Your Email" required/>
                                    </div>
                                    
                                    <div class="form-group col-md-12">
                                        <input type="text" name="form_subject" value="" placeholder="Subject" required/>
                                    </div>
                                    
                                    <div class="form-group col-md-12">
                                        <textarea name="form_message" placeholder="Massage"></textarea>
                                    </div>
                                    
                                    <div class="form-group col-md-12">
                                        <input id="form_botcheck" name="form_botcheck" class="form-control" type="hidden" value=""/>
                                        <button class="theme-btn btn-style-one" type="submit" data-loading-text="Please wait..."><span>Submit now</span></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                
                <div class="info-column col-lg-5">
                    <div class="inner-column">
                        <h4>Our Address</h4>
                        <div class="text">Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service.</div>
                        <ul>
                            <li><i class="flaticon-pin"></i><span>Address:</span> 54B, Tailstoi Town 5238 MT, La city, IA 5224</li>
                            <li><i class="flaticon-email"></i><span>email:</span> contact@buildtruck.com</li>
                            <li><i class="flaticon-phone"></i><span>phone:</span> 1800 456 7890  /  1254 897 3654</li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Contact
