function About() {
  const cards = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18h6"/>
          <path d="M10 22h4"/>
          <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/>
        </svg>
      ),
      title: 'Passionné',
      description: 'Je transforme les idées en expériences numériques modernes.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <circle cx="12" cy="12" r="6"/>
          <circle cx="12" cy="12" r="2"/>
        </svg>
      ),
      title: 'Orienté solution',
      description: 'Je privilégie les solutions simples, efficaces et évolutives.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: "Esprit d'équipe",
      description: "J'aime collaborer, partager et apprendre des autres.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 7 13.5 15.5 8.5 10.5 2 17"/>
          <polyline points="16 7 22 7 22 13"/>
        </svg>
      ),
      title: 'Toujours en évolution',
      description: "Je continue d'explorer les nouvelles technologies et bonnes pratiques.",
    },
  ]

  return (
    <section id="a-propos" className="relative w-full px-6 md:px-12 lg:px-20 pt-2 pb-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* ===== COLONNE GAUCHE : TEXTE ===== */}
        <div className="flex flex-col gap-5">
          
          {/* Label */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-0.5 bg-primary"></span>
            <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              À propos de moi
            </span>
          </div>

          {/* Titre principal */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
               Qui suis-<span className="text-primary">je</span> ?
          </h2>

          {/* Paragraphe résumé */}
          <p className="text-gray-600 leading-relaxed text-sm md:text-base max-w-xl">
            Je suis <strong className="text-gray-900 font-semibold">Mamady FANGAMOU</strong>,
            développeur web & logiciel passionné par la conception d'expériences
            numériques modernes et intuitives. J'aime résoudre des problèmes concrets
            et transformer une idée en une solution fiable et élégante, en écrivant
            du code propre et en créant des interfaces soignées.
          </p>

          {/* Lien "En savoir plus" */}
          <a
            href="#parcours"
            className="flex items-center gap-2 text-primary font-semibold text-sm md:text-base hover:gap-3 transition-all w-fit mt-3"
          >
            En savoir plus
            <span>→</span>
          </a>
        </div>

        {/* ===== COLONNE DROITE : GRILLE 2x2 ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-lg hover:border-blue-100 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-10 h-10 flex items-center justify-center text-primary mb-3">
                {card.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-base">
                {card.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default About