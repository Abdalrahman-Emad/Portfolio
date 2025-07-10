import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef();
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);


    // Send email using EmailJS
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Abdulrahman Emad',
          from_email: form.email,
          to_email: 'abdalrahmanemad48@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )

      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert();
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: 'danger',
          });
        }
      );
    console.log(import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);

  };

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <div className="contact-container w-full max-w-4xl px-4">
          <h3 className="head-text text-center">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3 text-center">
            Feel free to contact me via this form.
          </p>
          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input w-full py-3 px-4 border border-gray-300 rounded"
                placeholder="Your Name"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input w-full py-3 px-4 border border-gray-300 rounded"
                placeholder="Your_Email@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input w-full py-3 px-4 border border-gray-300 rounded"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button className="field-btn w-full py-3 px-4 bg-blue-500 text-white rounded flex items-center justify-center" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow ml-2" />
            </button>
          </form>
        </div>
      </div>
    </section>

  );
};

export default Contact;
