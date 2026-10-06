import { useState } from 'react'
import imgMissGuinee from '../assets/miss-guinee.jpg'
import imgMaVille from '../assets/maville.png'
import imgGssiEdu from '../assets/gssi-edu.jpeg'
import imgNetForm from '../assets/netform.png'
import imgArlesRa from '../assets/arles-ra.png'
import imgLaguineka from '../assets/laguineka.png'
import imgAccessScolaire from '../assets/access.png'
import imgGristConges from '../assets/grist.png'
import imgGristTaches from '../assets/grist.png'
import imgGristAnnuaire from '../assets/grist.png'

function Projects() {
  const [activeFilter, setActiveFilter] = useState('web') // 'web' | 'business'

  const projects = [
    // ===== PROJETS WEB =====
    {
      title: 'Miss Guinée en Devenir',
      description: "Site vitrine pour la formation et l'accompagnement des futures Miss guinéennes.",
      image: imgMissGuinee,
      tags: ['React', 'TypeScript', 'GitHub Pages'],
      link: 'https://fangamoum.github.io/missguide/',
      type: 'web',
    },
    {
      title: 'MaVille',
      description: "Application web qui permet de rechercher une ville en France et d'obtenir ses informations principales ainsi que la météo en temps réel.",
      image: imgMaVille,
      tags: ['React', 'JavaScript', 'API Météo'],
      link: 'https://fangamoum.github.io/maVille/',
      type: 'web',
    },
    {
      title: 'GSSI-EDU',
      description: "Application web de gestion scolaire : suivi des élèves, notes, absences et administration.",
      image: imgGssiEdu,
      tags: ['Laravel', 'PHP', 'MySQL'],
      link: 'https://gssi-edu.com/',
      type: 'web',
    },
    {
      title: 'NetForm',
      description: "Application web pour l'étude et la préparation aux certifications CCNA : cours, ateliers et quiz interactifs.",
      image: imgNetForm,
      tags: ['Laravel', 'PHP', 'MySQL'],
      link: 'https://www.netform.fr',
      type: 'web',
    },
    {
      title: 'Arles en Réalité Augmentée',
      description: "Sur les traces du passé photographique d'Arles en réalité augmentée (SAE 2026).",
      image: imgArlesRa,
      tags: ['React', 'AR', 'Web'],
      link: null,
      type: 'web',
      inProgress: true,
    },
    {
      title: 'LAGUINEKA',
      description: "Application mobile Expo pour connecter les utilisateurs autour de services et d'opportunités.",
      image: imgLaguineka,
      tags: ['Expo', 'React Native', 'Firebase'],
      link: null,
      type: 'web',
      inProgress: true,
    },

    // ===== SOLUTIONS MÉTIER =====
    {
      title: 'Gestion Scolaire — Access',
      description: "Base de données de gestion d'un établissement scolaire : élèves, classes, notes et absences.",
      image: imgAccessScolaire,
      tags: ['Microsoft Access', 'SQL', 'Gestion'],
      file: '/projets/gestion-scolaire.accdb',
      logo: 'access',
      type: 'business',
    },
    {
      title: 'Planification des Congés — Grist',
      description: "Outil de gestion de la planification des congés et des absences : droits, validations et suivi en temps réel.",
      image: imgGristConges,
      tags: ['Grist', 'Python', 'RH'],
      file: '/projets/gestion-conges.grist',
      logo: 'grist',
      type: 'business',
    },
    {
      title: 'Gestion des Tâches — Grist',
      description: "Outil de gestion des tâches : création, assignation, suivi d'avancement et priorisation.",
      image: imgGristTaches,
      tags: ['Grist', 'Python', 'Productivité'],
      file: '/projets/gestion-taches.grist',
      logo: 'grist',
      type: 'business',
    },
    {
      title: "Gestion d'Annuaire — Grist",
      description: "Outil de gestion d'annuaire : contacts, catégorisation, recherche et mise à jour des informations.",
      image: imgGristAnnuaire,
      tags: ['Grist', 'Python', 'Données'],
      file: '/projets/gestion-annuaire.grist',
      logo: 'grist',
      type: 'business',
    },
  ]

  // Filtrage selon l'onglet actif
  const filteredProjects = projects.filter((p) => p.type === activeFilter)

  return (
    <section id="projets" className="relative w-full px-6 md:px-12 lg:px-20 pt-2 pb-20 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* ===== EN-TÊTE ===== */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-0.5 bg-primary"></span>
              <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                Mes projets
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
              Mes réalisations
            </h2>
          </div>

          {/* ===== FILTRES (onglets) ===== */}
          <div className="flex items-center gap-2 bg-gray-100 p-1.5 rounded-full w-fit">
            <button
              type="button"
              onClick={() => setActiveFilter('web')}
              className={`flex items-center gap-2 px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all ${
                activeFilter === 'web'
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              Application Web
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('business')}
              className={`flex items-center gap-2 px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all ${
                activeFilter === 'business'
                  ? 'bg-white text-violet-700 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3v18h18"/>
                <path d="M18 17V9"/>
                <path d="M13 17V5"/>
                <path d="M8 17v-3"/>
              </svg>
              Solution Métier
            </button>
          </div>
        </div>

        {/* ===== GRILLE DES PROJETS FILTRÉS ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="relative bg-white border border-gray-100 rounded-2xl p-4 hover:shadow-lg hover:border-blue-100 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Badge "En cours" pour les projets web non finis */}
              {project.inProgress && (
                <div className="absolute -top-2 -right-2 flex items-center gap-1.5 bg-amber-100 border border-amber-200 text-amber-700 text-[10px] font-semibold px-3 py-1.5 rounded-full shadow-sm z-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                  En cours
                </div>
              )}

              {/* Image + Texte */}
              <div className="flex gap-4 mb-4">
                <div className={`w-24 h-24 md:w-28 md:h-28 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100 ${project.inProgress ? 'opacity-80' : ''}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover ${project.inProgress ? 'grayscale-[30%]' : ''}`}
                  />
                </div>

                <div className="flex flex-col gap-1.5 flex-1">
                  <div className="flex items-center gap-2">
                    {project.logo === 'access' && (
                      <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                          <rect x="2" y="2" width="20" height="20" rx="4" fill="#A4373A"/>
                          <path d="M12 6l-5 12h3l1-3h4l1 3h3l-5-12h-2z" fill="#fff"/>
                          <path d="M9 12h4l-2-5-2 5z" fill="#A4373A"/>
                        </svg>
                      </div>
                    )}
                    {project.logo === 'grist' && (
                      <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                          <circle cx="12" cy="12" r="10" fill="#16A34A"/>
                          <path d="M8 12h3v3h-3z" fill="#fff"/>
                          <path d="M13 12h3v3h-3z" fill="#fff"/>
                          <path d="M8 7h3v3h-3z" fill="#fff"/>
                          <path d="M13 7h3v3h-3z" fill="#fff" opacity="0.6"/>
                        </svg>
                      </div>
                    )}
                    <h3 className="font-bold text-gray-900 text-sm md:text-base leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-4">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-blue-50 text-primary text-[10px] md:text-xs font-medium rounded-full border border-blue-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* ===== ACTIONS ===== */}
              {project.type === 'web' && project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-primary text-xs md:text-sm font-semibold hover:gap-2.5 transition-all mt-auto w-fit"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" x2="21" y1="14" y2="3"/>
                  </svg>
                  Voir le projet
                  <span>→</span>
                </a>
              )}

              {project.type === 'web' && project.inProgress && (
                <div className="flex items-center gap-1.5 text-gray-400 text-xs md:text-sm font-semibold mt-auto w-fit cursor-not-allowed">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  Bientôt disponible
                </div>
              )}

              {project.type === 'business' && (
                <a
                  href={project.file}
                  download
                  className="flex items-center gap-2 bg-primary text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-full hover:bg-primary-dark transition-colors mt-auto w-fit shadow-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" x2="12" y1="15" y2="3"/>
                  </svg>
                  Télécharger
                </a>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects