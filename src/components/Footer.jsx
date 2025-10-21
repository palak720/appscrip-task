
import React, { useState } from "react";
import styles from "../styles/Footer.module.css";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className={styles.footer}>
      {/* ---------- TOP SECTION ---------- */}
      <div className={styles.topSection}>
        <div className={styles.newsletter}>
          <h3 className={styles.title}>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mêtta muse.</p>
          <div className={styles.subscribe}>
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className={styles.contact}>
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>

          <div className={styles.currency}>
            <h4>CURRENCY</h4>
            <div className={styles.currencyInfo}>
              <img
                src="https://flagcdn.com/us.svg"
                alt="USA"
                className={styles.flag}
              />
              <span>USD</span>
            </div>
            <p className={styles.note}>
              Transactions will be completed in Euros and a currency reference is
              available on hover.
            </p>
          </div>
        </div>
      </div>

      <hr className={styles.divider} />

      {/* ---------- MOBILE ACCORDION ---------- */}
      <div className={styles.accordion}>
        {["metta", "quick", "follow"].map((key) => (
          <div key={key} className={styles.section}>
            <div
              className={styles.sectionHeader}
              onClick={() => toggleSection(key)}
            >
              <span>
                {key === "metta"
                  ? "mêtta muse"
                  : key === "quick"
                  ? "Quick Links"
                  : "Follow Us"}
              </span>
              <span>{openSection === key ? "−" : "+"}</span>
            </div>

            {openSection === key && (
              <>
                {key === "metta" && (
                  <ul className={styles.list}>
                    <li>About Us</li>
                    <li>Stories</li>
                    <li>Artisans</li>
                    <li>Boutiques</li>
                    <li>Contact Us</li>
                    <li>EU Compliances Docs</li>
                  </ul>
                )}
                {key === "quick" && (
                  <ul className={styles.list}>
                    <li>Orders & Shipping</li>
                    <li>Join/Login as a Seller</li>
                    <li>Payment & Pricing</li>
                    <li>Return & Refunds</li>
                    <li>FAQs</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                  </ul>
                )}
                {key === "follow" && (
                  <div className={styles.socials}>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaLinkedinIn /></a>
                  </div>
                )}
              </>
            )}
            <hr className={styles.divider} />
          </div>
        ))}
      </div>

      {/* ---------- DESKTOP LINKS ---------- */}
      <div className={styles.bottomSection}>
        <div className={styles.column}>
          <h3>mêtta muse</h3>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3>Quick Links</h3>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3>Follow Us</h3>
          <div className={styles.socials}>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
          <div className={styles.payments}>
            <h4>mêtta muse ACCEPTS</h4>
            <div className={styles.icons}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Google_Pay_Logo.svg" alt="GPay" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/Amex_logo.svg" alt="Amex" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Apple_Pay_logo.svg" alt="Apple Pay" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/UPI-Logo-vector.svg" alt="UPI" />
            </div>
          </div>
        </div>
      </div>

      <p className={styles.copy}>Copyright © 2023 mettamuse. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
