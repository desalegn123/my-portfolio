import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-yellow-400 text-base-content p-10">
      <h3>Desalegn Sisay</h3>
        <aside>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          ></svg>
         
        </aside>
        <nav>
          <h6 className="footer-title">Links</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Skills</a>
          <a className="link link-hover">Project</a>
        </nav>
        <nav>
          <h6 className="footer-title">Contacts</h6>
          <a className="link link-hover">+251941473598</a>
          <a className="link link-hover">+251941473598</a>
          <a className="link link-hover">sisaydesalegn018@gmail.com</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social media</h6>
          <a className="link link-hover">Telegram</a>
          <a className="link link-hover">Linkedin</a>
          <a className="link link-hover">instagram</a>
          <a className="link link-hover">Github</a>
          <a className="link link-hover">Portfolio</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
