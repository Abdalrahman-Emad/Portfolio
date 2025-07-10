const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-4 items-center justify-center">
        <div className="social-icon">
          <a href="https://github.com/Abdalrahman-Emad" target="_blank" rel="noopener noreferrer">
            <img src="/assets/github.svg" alt="GitHub" className="w-7 h-7 hover:opacity-80 transition-opacity duration-300" />
          </a>
        </div>

        <div className="social-icon">
          <a href="https://www.linkedin.com/in/abdalrahman-emad/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/linkedIn.svg" alt="LinkedIn" className="w-5 h-5 hover:opacity-80 transition-opacity duration-300" />
          </a>
        </div>
      </div>

      <p className="text-white-500">© 2024 Abdulrahman Emad. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
