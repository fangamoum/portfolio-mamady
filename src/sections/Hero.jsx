import photoProfil from '../assets/profil.png'

function Hero() {
  return (
    <section
      id="accueil"
      className="relative w-full px-6 md:px-12 lg:px-20 pt-6 pb-16 overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white"
    >
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center z-10">

        {/* ===== COLONNE GAUCHE : TEXTE ===== */}
        <div className="flex flex-col gap-6 order-1 lg:order-1">

          {/* Badge "Disponible" */}
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full w-fit">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span className="text-xs md:text-sm font-medium text-gray-700">
              Disponible pour de nouveaux projets
            </span>
          </div>

          {/* Titre principal */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-gray-900">
            Je crée des <br />
            <span className="text-primary">expériences web</span> <br />
            modernes et performantes.
          </h1>

          {/* Soulignement décoratif */}
          <svg className="w-48 h-3 -mt-3 text-primary opacity-70" viewBox="0 0 200 12" fill="none">
            <path d="M 5 8 Q 100 2 195 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>

          {/* Boutons — DESKTOP uniquement (cachés sur mobile) */}
          <div className="hidden lg:flex flex-wrap gap-3 mt-2">
            <a
              href="#projets"
              className="flex items-center gap-2 bg-primary text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-primary-dark transition-colors shadow-lg shadow-blue-200"
            >
              Voir mes projets
              <span>→</span>
            </a>
            <a
              href="/CV_FANGAMOU.pdf"
              download
              className="flex items-center gap-2 bg-white text-gray-900 text-sm font-medium px-6 py-3 rounded-full border border-gray-300 hover:border-primary hover:text-primary transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" x2="12" y1="15" y2="3"/>
              </svg>
              Télécharger mon CV
            </a>
          </div>
        </div>

        {/* ===== IMAGE : au MILIEU sur mobile, à DROITE sur desktop ===== */}
        <div className="relative flex justify-center items-center order-2 lg:order-2">
          <img
            src={photoProfil}
            alt="Mamady Fangamou - Développeur Web"
            className="w-full max-w-[600px] h-auto object-contain -mt-7 md:-mt-1 -ml-10 md:-ml-8 lg:ml-0"
          />
        </div>

        {/* ===== BOUTONS MOBILE (uniquement sur petit écran, en bas) ===== */}
        <div className="flex lg:hidden flex-wrap gap-3 justify-center -mt-4 order-3 lg:order-3">
          <a
            href="#projets"
            className="flex items-center gap-2 bg-primary text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-primary-dark transition-colors shadow-lg shadow-blue-200"
          >
            Voir mes projets
            <span>→</span>
          </a>
          <a
            href="/CV_FANGAMOU.pdf"
            download
            className="flex items-center gap-2 bg-white text-gray-900 text-sm font-medium px-6 py-3 rounded-full border border-gray-300 hover:border-primary hover:text-primary transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" x2="12" y1="15" y2="3"/>
            </svg>
            Télécharger mon CV
          </a>
        </div>

      </div>
    </section>
  )
}

export default Hero