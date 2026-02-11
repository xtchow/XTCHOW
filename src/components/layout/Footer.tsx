import { SiGithub, SiLinkedin } from "react-icons/si";
import { HiDocumentArrowDown } from "react-icons/hi2";
import { RESUME_PATH } from "@/lib/constants";
import "./Footer.scss";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copyright">
          <span className="mono">&copy; {currentYear} Sarah Chow</span>
        </p>
        <div className="footer__links">
          <a
            href={RESUME_PATH}
            download
            className="footer__link"
          >
            <HiDocumentArrowDown size={16} />
            Resume
          </a>
          <a
            href="https://github.com/xtchow"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            <SiGithub size={16} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/xtchow/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            <SiLinkedin size={16} />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
