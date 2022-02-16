import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div>
          <h2>
            Mahima <br />
            Motors
          </h2>
          <p>
            Pahartali,Raozan <br /> Chittagong
          </p>
        </div>
        <div>
          <h3>About Us</h3>
          <p>
            Mahima Motors is one of the first and largest website about
            motorcycle in Bangladesh. We have started our journey since 25th
            January 2012. We have experienced and hard working team and our
            prime goal is to provide motorcycle related necessary information to
            the visitors in easy way
          </p>
        </div>

        <div>
          <h3>Join With Us</h3>
          <i class="fas fa-phone-alt"></i> 01830082347 <br />
          <i class="far fa-envelope"></i> mahima@m.com <br />
          <i class="fab fa-facebook"></i> facebook.com
        </div>
      </div>
      <p className="footer-p">
        Copyright © 2021Mahima Motor A Company subject to the Management and
        Coordination activities of AUDI AG. All rights reserved. VAT 05113870967
      </p>
    </div>
  );
};

export default Footer;
