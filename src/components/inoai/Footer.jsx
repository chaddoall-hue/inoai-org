import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/10 mt-12 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-2 text-center">
        <p className="text-gray-500 text-xs">
          © {year} All Rights Reserved InoAi — powered by{' '}
          <a
            href="https://kcalb-ltd.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            Kcalb Ltd
          </a>
        </p>
      </div>
    </footer>
  );
}