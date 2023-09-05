import React from 'react'

export default function Projects() {
  return (
    <>
      <div>
        {/* Projects Section*/}
        <section className="py-5">
          <div className="container px-5 mb-5">
            <div className="text-center mb-5">
              <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Projects</span></h1>
            </div>
            <div className="row gx-5 justify-content-center">
              <div className="col-lg-11 col-xl-9 col-xxl-8">
                {/* Project Card 1*/}
                <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                  <div className="card-body p-0">
                    <div className="d-flex flex-wrap align-items-center">
                      <div className="p-5">
                        <h2 className="fw-bolder">DappGate</h2>
                        <p>I took over the role as a Frontend Developer with using Wagmi React Hook in the development of DappGate, a pioneering #LayerZero solution designed to bridge ONFTs and OFTs across various networks, ultimately empowering users with seamless cross-chain interactions and control over their digital futures.</p>
                      </div>
                      <a className='p-0' href='https://dappgate.io/' target="_blank" rel="noopener noreferrer">
                      <img className="img-fluid" src="assets/projects/dappgate.png" alt="..." />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                  <div className="card-body p-0">
                    <div className="d-flex flex-wrap align-items-center">
                      <div className="p-5">
                        <h2 className="fw-bolder">NFT Marketplace</h2>
                        <p>I have successfully developed my own NFT marketplace, leveraging cutting-edge technologies such as Hash-Lips Art Engine and ThirdWeb. This innovative platform allows users to seamlessly connect their wallets and engage in a multitude of actions on the Mumbai Testnet. Connect your wallet and buy, sell, or claim NFTs.</p>
                      </div>
                      <a className='p-0' href='https://mensarmarkt.vercel.app/' target="_blank" rel="noopener noreferrer">
                      <img className="img-fluid" src="assets/projects/mensarmarkt.png" alt="..." />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Call to action section*/}
        <section className="py-5 bg-gradient-primary-to-secondary text-white">
          <div className="container px-5 my-5">
            <div className="text-center">
              <h2 className="display-4 fw-bolder mb-4">Let's build something together</h2>
              <a className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder" href="/contact">Contact me</a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
