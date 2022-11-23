import React from 'react';
import "./company.scss";

const Company = () => {

    return (
        <div className="content-body-div" style={{ display: "block", padding: "50px 150px" }}>
            <div className="page-heading">
                <div className="page-company">Company</div>
                <img alt="" src="https://techsophy.com/assets/images/iso_image.png" />
            </div>
            <p className="page-sub" >Vision</p>
            <div className="row" style={{ display: "flex" }}>
                <div className="col-6" style={{ fontSize: "48px", lineHeight: "1.1" }}>
                    <span className="grey-text">Inspired</span> Decision Making<br />
                    <span className="grey-text">based on</span><br />
                    Trusted Technology,<br />
                    <span className="grey-text">powered by</span><br />
                    Passionate Individuals.
                </div>

                <div style={{ textAlign: "center", marginLeft: "10%" }}>
                    <div className="row">
                        <div className="achv">
                            <img alt="" src="https://techsophy.com/assets/images/achievement1.png" />
                            <div className="achv-text">2009</div>
                            <label className="achv-desc">Vision to Innovate &amp; Incubate Startup’s</label>
                        </div>

                        <div className="achv">
                            <img alt="" src="https://techsophy.com/assets/images/achievement2.png" />
                            <div className="achv-text">150+</div>
                            <label className="achv-desc">Associates</label>
                        </div>

                        <div className="achv">
                            <img alt="" src="https://techsophy.com/assets/images/achievement3.png" />
                            <div className="achv-text">60+</div>
                            <label className="achv-desc">Customers</label>
                        </div>
                    </div>

                    <div className="row" style={{ marginTop: "30px" }}>
                        <div className="achv">
                            <img alt="" src="https://techsophy.com/assets/images/achievement4.png" />
                            <div className="achv-text">30%</div>
                            <label className="achv-desc">Y-o-Y Growth</label>
                        </div>

                        <div className="achv">
                            <img alt="" src="https://techsophy.com/assets/images/achievement5.png" />
                            <div className="achv-text">8</div>
                            <label className="achv-desc">Partnerships</label>
                        </div>

                        <div className="achv">
                            <img alt="" src="https://techsophy.com/assets/images/achievement6.png" />
                            <div className="achv-text">10+</div>
                            <label className="achv-desc">Innovations &amp; Investments</label>
                        </div>
                    </div>
                </div>
            </div>

            <p className="page-sub" style={{ marginTop: "30px" }}>Journey</p>
            <div className="row ">
                <div className="journey-row row">
                    <div className="col-5">
                        <img alt="" className="img-fluid" src="https://techsophy.com/assets/images/2009to2015.png" />
                    </div>

                    <div className="col-7" style={{ paddingLeft: "0" }}>
                        <label className="journey-label">BPM &amp; ECM as Core</label>
                        <ul className="journey-list">
                            <li>BPM &amp; ECM services</li>
                            <li>Support</li>
                            <li>System Generation</li>
                        </ul>

                        <label className="journey-label">Products &amp; Solutions</label>
                        <ul className="journey-list">
                            <li>AutoRABIT</li>
                            <li>Xbox Kinetic</li>
                            <li>SocialConnext</li>
                        </ul>
                    </div>
                </div>
                <div className="journey-row row">
                    <div className="col-5">
                        <img alt="" className="img-fluid" src="https://techsophy.com/assets/images/2016to2020.png" />
                    </div>

                    <div className="col-7" style={{ paddingLeft: "0" }}>
                        <label className="journey-label">BPM &amp; ECM as Core</label>
                        <ul className="journey-list">
                            <li>MiGile</li>
                            <li>Social Connext</li>
                            <li>DoBPM</li>
                        </ul>

                        <label className="journey-label">Products &amp; Solutions</label>
                        <ul className="journey-list">
                            <li>Alfresco</li>
                            <li>Decooda</li>
                            <li>Block Chain</li>
                        </ul>
                    </div>
                </div>
                <div className="journey-row row">
                    <div className="col-5">
                        <img alt="" className="img-fluid" src="https://techsophy.com/assets/images/2021to2025.png" />
                    </div>

                    <div className="col-7" style={{ paddingLeft: "0" }}>
                        <label className="journey-label">Digital Process Automation</label>
                        <ul className="journey-list">
                            <li>Low Code, No Code</li>
                            <li>Robotic Process Automation</li>
                            <li>iBPMS</li>
                        </ul>

                        <label className="journey-label">Products &amp; Solutions</label>
                        <ul className="journey-list">
                            <li>Service Experience Platform</li>
                            <li>Process Context Integration</li>
                            <li>Omni Health</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Company;