import { Link } from 'react-router-dom'
import './Help.scss'

const Help = () => {
  return (
    <div className="help-container">
      <div className="help-content">
        <section className="help-section">
          <h2>Frequently Asked Questions</h2>
          <ul className="faq-list">
            <li className="faq-item">
              <h3 className="faq-question">How do I reset my password?</h3>
              <p className="faq-answer">To reset your password, click on the <Link to="/user-dashboard-settings">Change Password</Link> link in your account settings. You'll need to enter your current password and then choose a new one.</p>
            </li>
            <li className="faq-item">
              <h3 className="faq-question">How can I update my profile information?</h3>
              <p className="faq-answer">Go to your Profile and click on the <Link to="/user-dashboard-profile">Edit Profile</Link> button to update your information.</p>
            </li>
          </ul>
        </section>
        <section className="help-section">
          <h2>Contact Support</h2>
          <p>If you need further assistance, please contact our support team:</p>
          <ul className="contact-list">
            <li className="contact-item">
              <span className="contact-label">Email:</span>
              <span className="contact-value">support@example.com</span>
            </li>
            <li className="contact-item">
              <span className="contact-label">Phone:</span>
              <span className="contact-value">+1-800-123-4567</span>
            </li>
            <li className="contact-item">
              <span className="contact-label">Live Chat:</span>
              <span className="contact-value">Available 24/7 on our website</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
export default Help