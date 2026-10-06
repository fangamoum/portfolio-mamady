import { useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Accueil', href: '#accueil', active: true },
    { name: 'À propos', href: '#a-propos' },
    { name: 'Compétences', href: '#competences' },
    { name: 'Projets', href: '#projets' },
    { name: 'Parcours', href: '#parcours' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="w-full bg-white py-4 px-6 md:px-12 lg:px-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo + Nom */}
        <div className="flex items-center gap-3">
          <div className="text-3xl font-extrabold leading-none flex">
             <span className="bg-gradient-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent">
                M
             </span>
             <span className="text-gray-900 -ml-2" >F</span>
          </div>
          <div className="hidden sm:block leading-tight">
            <p className="font-bold text-gray-900 text-sm">Mamady FANGAMOU</p>
            <p className="text-xs text-gray-500">Développeur Web & Logiciel</p>
          </div>
        </div>

        {/* Navigation Desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors relative ${
                link.active
                  ? 'text-primary'
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              {link.name}
              {link.active && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"></span>
              )}
            </a>
          ))}
        </nav>

        <a href="#contact" className="hidden lg:flex items-center gap-2 bg-primary-dark text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <rect width="20" height="16" x="2" y="4" rx="2"/>
               <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
           </svg>
          Me contacter
       </a>

        {/* Bouton Menu Burger Mobile */}
        <button
          className="lg:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"/>
              <line x1="4" x2="20" y1="6" y2="6"/>
              <line x1="4" x2="20" y1="18" y2="18"/>
            </svg>
          )}
        </button>
      </div>

      {/* Menu Mobile déroulant */}
      {isMenuOpen && (
        <nav className="lg:hidden mt-4 pt-4 border-t border-gray-100 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-sm font-medium ${
                link.active ? 'text-primary' : 'text-gray-700'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center justify-center gap-2 bg-primary-dark text-white text-sm font-medium px-5 py-2.5 rounded-full mt-2"
          >
            ✉ Me contacter
          </a>
        </nav>
      )}
    </header>
  )
}

export default Header