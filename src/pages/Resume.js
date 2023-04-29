import React from 'react';

export default function Resume() {
  return (
    <>
      {/* Page Content*/}
      <div className="container px-5 my-5">
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Resume</span></h1>
        </div>
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-11 col-xl-9 col-xxl-8">
            {/* Experience Section*/}
            <section>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h2 className="text-primary fw-bolder mb-0">Experience</h2>
                {/* Download resume button*/}
                {/* Note: Set the link href target to a PDF file within your project*/}
                <a className="btn btn-primary px-4 py-3" href="https://coursera.org/share/358e7429999cc8829a86044abf4282d8">
                  <div className="d-inline-block bi bi-download me-2" />
                  Download Resume
                </a>
              </div>
              {/* Experience Card 1*/}
              <div className="card shadow border-0 rounded-4 mb-5">
                <div className="card-body p-5">
                  <div className="row align-items-center gx-5">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                      <div className="bg-light p-4 rounded-4">
                        <div className="text-primary fw-bolder mb-2">2022 - Present</div>
                        <div className="small fw-bolder">Web Developer</div>
                        <div className="small text-muted">USTechacademy</div>
                        <div className="small text-muted">Connecticut, US</div>
                      </div>
                    </div>
                    <div className="col-lg-8"><div>As a member of USTechacademy, I have been taking training to become a Blockchain Developer.  I am currently working as a Web Developer and producing applications with React.</div></div>
                  </div>
                </div>
              </div>
            </section>
            {/* Education Section*/}
            <section>
              <h2 className="text-secondary fw-bolder mb-4">Education</h2>
              {/* Education Card 1*/}
              <div className="card shadow border-0 rounded-4 mb-5">
                <div className="card-body p-5">
                  <div className="row align-items-center gx-5">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                      <div className="bg-light p-4 rounded-4">
                        <div className="text-secondary fw-bolder mb-2">2022 - Present</div>
                        <div className="mb-2">
                          <div className="small fw-bolder">USTechacademy</div>
                          <div className="small text-muted">Connecticut, US</div>
                        </div>
                        <div className="fst-italic">
                          <div className="small text-muted">Certificate Program</div>
                          <div className="small text-muted">Web3 Development</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8"><div>Currently, as an extra, I am learning new programming languages in the field of Web3. With this training, we aim to become a developer in Web3 by using the Solidity, Web3.js and Ether.js.</div></div>
                  </div>
                </div>
              </div>
              {/* Education Card 2*/}
              <div className="card shadow border-0 rounded-4 mb-5">
                <div className="card-body p-5">
                  <div className="row align-items-center gx-5">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                      <div className="bg-light p-4 rounded-4">
                        <div className="text-secondary fw-bolder mb-2">2019 - 2020</div>
                        <div className="mb-2">
                          <div className="small fw-bolder">HiCoders</div>
                          <div className="small text-muted">Zurich, CH</div>
                        </div>
                        <div className="fst-italic">
                          <div className="small text-muted">Certificate Program</div>
                          <div className="small text-muted">Web Development</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8"><div>I first started my Web Developer journey with HiCoders to produce Web Applications. We learned the basic topics of HTML/CSS, Javascript, and then the use of Node.js, React.js, MySQL and Postman to develop a website.</div></div>
                  </div>
                </div>
              </div>
              {/* Education Card 3*/}
              <div className="card shadow border-0 rounded-4 mb-5">
                <div className="card-body p-5">
                  <div className="row align-items-center gx-5">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                      <div className="bg-light p-4 rounded-4">
                        <div className="text-secondary fw-bolder mb-2">2012 - 2018</div>
                        <div className="mb-2">
                          <div className="small fw-bolder">Ankara University</div>
                          <div className="small text-muted">Ankara, TR</div>
                        </div>
                        <div className="fst-italic">
                          <div className="small text-muted">Faculty of Law</div>
                          <div className="small text-muted">Lawyer</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8"><div>Before moving to Europe, I completed the undergraduate program at Ankara University Faculty of Law. I have studied extensively in Civil Law, Law of Obligations, Property Law, Tax Law, Criminal Law and many other areas.</div></div>
                  </div>
                </div>
              </div>
            </section>
            {/* Divider*/}
            <div className="pb-5" />
            {/* Skills Section*/}
            <section>
              {/* Skillset Card*/}
              <div className="card shadow border-0 rounded-4 mb-5">
                <div className="card-body p-5">
                  {/* Professional skills list*/}
                  <div className="mb-5">
                    <div className="d-flex align-items-center mb-4">
                      <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i className="bi bi-tools" /></div>
                      <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Professional Skills</span></h3>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 mb-4">
                      <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Web Development</div></div>
                      <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">UI Design</div></div>
                      <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Smart Contract</div></div>
                    </div>
                  </div>
                  {/* Languages list*/}
                  <div className="mb-0">
                    <div className="d-flex align-items-center mb-4">
                      <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i className="bi bi-code-slash" /></div>
                      <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Languages</span></h3>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 mb-4">
                      <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">HTML/CSS</div></div>
                      <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">JavaScript</div></div>
                      <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">React.js</div></div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3">
                      <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">MySQL</div></div>
                      <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Node.js</div></div>
                      <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Solidity</div></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

    </>
  )
}
