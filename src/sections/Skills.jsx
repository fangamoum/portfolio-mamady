function Skills() {
  const categories = [
    {
      number: '01',
      title: 'Frontend',
      description: "Création d'interfaces modernes, responsive et accessibles.",
      skills: [
        { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      ],
    },
    {
      number: '02',
      title: 'Backend & Programmation',
      description: "Développement d'applications, API et fonctionnalités métier.",
      skills: [
        { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
        { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      ],
    },
    {
      number: '03',
      title: 'Bases de données',
      description: 'Conception, gestion et exploitation des données.',
      skills: [
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'SQLite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' },
        { name: 'Microsoft Access', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg' },
        { name: 'Grist', icon: null },
      ],
    },
    {
      number: '04',
      title: 'Outils & Productivité',
      description: 'Outils utilisés pour développer, collaborer et analyser les données.',
      skills: [
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
        { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
        { name: 'Excel', icon: null },
      ],
    },
  ]

  return (
    <section id="competences" className="relative w-full px-6 md:px-12 lg:px-20 pt-2 pb-20 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* ===== EN-TÊTE ===== */}
        <div className="flex flex-col gap-3 mb-12">
          <div className="flex items-center gap-3">
            <span className="w-8 h-0.5 bg-primary"></span>
            <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              Mes compétences
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Outils & Technologies
          </h2>
        </div>

        {/* ===== GRILLE DES 4 CATÉGORIES ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-blue-100 transition-all duration-300"
            >
              {/* En-tête de carte : numéro + titre */}
              <div className="flex items-start gap-4 mb-3">
                <span className="text-3xl md:text-4xl font-extrabold text-blue-100 leading-none">
                  {cat.number}
                </span>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg md:text-xl leading-tight mb-1">
                    {cat.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Badges de technos avec icônes */}
              <div className="flex flex-wrap gap-2 mt-5">
                {cat.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-gray-800 text-xs font-medium rounded-full border border-blue-100 hover:bg-blue-100 transition-colors"
                  >
                    {skill.icon && (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-4 h-4 object-contain"
                      />
                    )}
                    {!skill.icon && (
                      <span className="w-4 h-4 flex items-center justify-center text-primary text-[10px] font-bold">
                        ●
                      </span>
                    )}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills