<template>
  <div class="projects-section">
    <h2 class="section-title">Mes Projets</h2>
    <div class="projects-grid">
      <div v-for="project in projects" :key="project.title" class="project-card">
        <!-- Image du projet -->
        <div class="project-image">
          <img 
            v-if="project.image" 
            :src="project.image" 
            :alt="project.title"
          >
          <!-- Carrousel pour projets avec plusieurs images -->
          <div v-else-if="project.images" class="image-carousel">
            <img 
              v-for="(img, index) in project.images" 
              :key="index"
              :src="img.image" 
              :alt="project.title"
            >
          </div>
        </div>

        <!-- Contenu du projet -->
        <div class="project-content">
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-description">{{ project.description }}</p>
          
          <!-- Technologies utilisées -->
          <div class="project-technologies">
            <span 
              v-for="tech in project.technologies" 
              :key="tech" 
              class="tech-tag"
            >
              {{ tech }}
            </span>
          </div>

          <!-- Liens (si disponibles) -->
          <div class="project-links" v-if="project.link || project.deploiement">
            <a 
              v-if="project.link" 
              :href="project.link" 
              target="_blank" 
              class="project-link"
            >
              Voir le projet
            </a>
            <div v-if="project.deploiement" class="deployment">
              <span>Déployé sur: </span>
              <span v-if="typeof project.deploiement === 'string'">
                {{ project.deploiement }}
              </span>
              <span v-else v-for="dep in project.deploiement" :key="dep">
                {{ dep }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
    import AccueilListe from "../assets/AccueilListe.png";
    import authentifationUfood from "../assets/authentifationUfood.png";
    import mapAccueil from "../assets/mapAccueil.png";
    import restaurantUFood from "../assets/restaurantUFood.png";
    import userProfileUfood from "../assets/userProfileUfood.png";
    import cncApanneau from "../assets/cncApanneau.png";
    import weatherApp from "../assets/weatherApp.png";
    import figma from "../assets/figma.png";
    import todoApp from "../assets/todoApp.png";
    import searchToDoList from "../assets/searchToDoList.png";
    const projects = [
        {
            title: "Weather App",
            description: "application de météo permettant de consulter la météo de n'importe quelle ville du monde en temps réel.\n" +
                "Elle donne de façon détaillée les informations sur la température, la pression atmosphérique, l'humidité, la vitesse du vent tout en prédisant la météo pour les 5 prochains jours.",
            technologies: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API", "Bootstrap", "Vue.js"],
            image: weatherApp,
            link: "https://emmanuelweatherapp.netlify.app/",
            deploiement: "Netlify"
        },
        {
            title: "UFood",
            description: "Application sociale permettant aux utilisateurs de découvrir des restaurants et de partager leurs coups de coeur avec leurs amis.\n"+
            "Elle permet de consulter les menus, les prix, les horaires d'ouverture et de fermeture, les avis des clients et de donner des avis voire noter des restaurants.\n"+
            "Elle offre deux vues à l'accueil: Le mode map et le mode liste.\n"+
            "Il est possible d'avoir également à partir de la map, l'itinéraire pour se rendre au restaurant désiré.\n"+
            "Il faudra tout d'abord s'authentifier avant de pouvoir accéder à certaines fonctionnalités de l'application. L'utilisateur peut avoir des followers et des following.",
            technologies: ["Vuetify", "Node.js", "UFood API", "leaflet", "MongoDB", "Express.js", "Vue.js", "OAuth"],
            images : [{image: AccueilListe},
            {image: authentifationUfood},
            {image: mapAccueil},
            {image: restaurantUFood},
            {image: userProfileUfood}],
        },
        {
            title: "CNC à panneaux",
            description: "Application permettant de générer des fichiers de découpe pour les CNC.\n"+
            "L'objectif du projet est de rendre la faisabilité des coupes droites similaire à celle d'une scie à panneau car cette tâche est très difficile à réaliser avec une CNC normale.\n"+
            "À travers notre appplication l'utilisateur peut faire ses découpes, placer les zones interdites, définir les différents outils utilisés, définir les dimensions, modifier les dimensions, supprimer et déplacer puis exporter le fichier GCODE qu'on pourra par la suite entrer dans la CNC.",
            technologies: ["Java", "Java Swing"],
            image: cncApanneau,
        },
        {
            title: "search & todo list app",
            description: "Ce site web comporte 4 sections. La section Home contient une barre de recherche qui permet de filtrer les noms de pays au fur et à mesure qu'on les écrit.\n"+
            "La section CardGrids contient une todo list app permettant d'enregistrer une tâche, sa description et de sélectionner la date également",
            technologies: ["Vue.js", "vuetify", "mongoDb", "pymongo", "python", "FastAPI"],
            images: [{image: todoApp}, {image: searchToDoList}],
            link: "https://emmanuelkonamultipageswebsite.netlify.app/",
            deploiement: ["Netlify", "Render"]
        },
        {
            title: "Application de recherche de logement étudiant",
            description: "créer les prototypes d'interface de l'application pour differents supports (mobile, tablette, desktop)."+
            "Pour mener à bien le projet nous avons eu à faire une recherche sur l'expérience utilisateur pour mieux comprendre les besoins des utilisateurs, les fonctionnalités de l'application, les contraintes techniques, les contraintes de temps et les contraintes budgétaires.\n"+
            "Nous avons également évaluer les maquettes",
            technologies: "Figma",
            image: figma,
        },
        {
            title: "Enregistrement des bornes de la ville de Québec",
            description: "projet consistant à developper une hierarchie de classes (Borne et ses dérivées) tout testant rigoureusement ces classes.\n"+
            "J'ai également créé un programme principal permettant de gérer un registre de bornes avec des opérations CRUD (Creation, ajout, affichage).",
            technologies: ["C++", "googletest", "Netbeans GUI"],
        },
        {
            title: "Jeu Quoridor",
            description: "Implémentation du jeu Quoridor ayant une fenêtre graphique avec trois modes de jeu: Humain vs Humain, Humain vs bot, bot vs bot.\n",
            technologies: ["python", "Rest API", "minmax", "turtle graphics"],
        },
        ]
</script>

<style scoped>
.projects-section {
  padding: 4rem 2rem;
  background-color: #1a1a1a;
  min-height: 100vh;
}

.section-title {
  text-align: center;
  color: #fff;
  font-size: 2.5rem;
  margin-bottom: 3rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.project-card {
  background-color: #2a2a2a;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease;
  height: 100%;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-image img:hover {
  transform: scale(1.05);
}

.project-content {
  padding: 1.5rem;
}

.project-title {
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.project-description {
  color: #cccccc;
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  max-height: 100px;
  overflow-y: auto;
}

.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tech-tag {
  background-color: #4a9eff;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
}

.project-links {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.project-link {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #4a9eff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.project-link:hover {
  background-color: #357abd;
}

.deployment {
  color: #cccccc;
  font-size: 0.9rem;
}

.image-carousel {
  position: relative;
  height: 100%;
}

.image-carousel img {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.image-carousel img:first-child {
  opacity: 1;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 2rem;
  }
}
</style>