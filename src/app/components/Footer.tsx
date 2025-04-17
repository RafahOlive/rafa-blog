import {
  AiOutlineMail,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="bg-alt py-4 px-6 flex justify-between items-center">
      {/* Esquerda - Email */}
      <a
        href="mailto:seuemail@example.com"
        className="text-white hover:text-orange-500 transition"
      >
        <AiOutlineMail
        className="icons-orange"
         size={24} />
      </a>

      {/* Direita - Redes sociais */}
      <div className="flex space-x-4">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-orange-500 transition"
        >
          <AiOutlineInstagram 
          className="icons-orange"
          size={24} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-orange-500 transition"
        >
          <AiOutlineLinkedin
          className="icons-orange"
           size={24} />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-orange-500 transition"
        >
          <AiOutlineGithub
          className="icons-orange"
           size={24} />
        </a>
      </div>
    </footer>
  );
}
