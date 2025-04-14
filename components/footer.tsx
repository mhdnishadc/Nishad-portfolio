import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy;{new Date().getFullYear()} Nishad. All rights reserved.

        <a
          className="ml-1 text-gray-300 hover:text-gray-100"
          href="https://github.com/mhdnishadc"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub |
        </a>
        <a
          className="ml-1 text-gray-300 hover:text-gray-100"
          href="https://www.linkedin.com/in/muhammed-nishadc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
      </small>
    </footer>
  );
}
