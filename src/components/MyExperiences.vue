<template>
  <div class="education-section">
    <h2 class="section-title">Formation</h2>

    <!-- Parcours académique -->
    <div class="education-timeline">
      <div
        v-for="(edu, index) in education"
        :key="index"
        class="education-item"
      >
        <div class="education-content">
          <h3 class="education-title">{{ edu.title }}</h3>
          <div class="education-details">
            <div class="school-info">
              <span class="school-name">{{ edu.school }}</span>
              <span class="location">{{ edu.location }}</span>
            </div>
            <span class="date">{{ edu.date }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Bourse -->
    <div class="awards-section">
      <h3 class="awards-title">Distinctions</h3>
      <div class="award-item">
        <div class="award-content">
          <h4 class="award-name">{{ bourse.title }}</h4>
          <div class="award-details">
            <span class="organization">{{ bourse.organization }}</span>
            <span class="date">{{ bourse.date }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const education = [
  {
    title: "Baccalauréat en Génie Logiciel",
    school: "Université Laval",
    location: "Québec, Québec",
    date: "Janvier 2023 - Décembre 2026",
  },
  {
    title: "Études de Doctorat en Médecine",
    school: "École du service de Santé des Armées de Lomé",
    location: "Lomé, Togo",
    date: "Novembre 2020 - Août 2022",
  },
  {
    title: "Diplôme d'études du secondaire",
    school: "Prytanée Militaire de Niamey",
    location: "Niamey, Niger",
    date: "Octobre 2013 - Août 2020",
  },
];

const bourse = {
  title: "Bourse d'excellence",
  organization: "Gouvernement du Québec",
  date: "Automne 2023",
};

/*const experienceDeTravail = [
  {
    title: "Auxiliaire administratif",
    company: "Service des Résidences de l'Université Laval",
    location: "Québec, Québec",
    date: "2023 - 2024",
  },
  {
    title: "Bénévole",
    company: "Université Laval",
    location: "Québec, Québec",
    date: "Automne 2024",
  },
  {
    title: "Stagiaire",
    company: "Centre de santé de Lomé",
    location: "Lomé, Togo",
    date: "Janvier 2022 - Juin 2022",
  },
];*/
</script>

<style scoped>
.education-section {
  padding: 4rem 2rem;
  background-color: #1a1a1a;
  color: white;
  min-height: 100vh;
}
.experience-section {
  background-color: #1a1a1a;
  color: white;
  min-height: 100vh;
}
.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #fff;
}

.education-timeline {
  max-width: 800px;
  margin: 0 auto 4rem;
}

.education-item {
  position: relative;
  padding: 2rem;
  background-color: #2a2a2a;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
}

.education-item:hover {
  transform: translateX(10px);
}

.education-item::before {
  content: "";
  position: absolute;
  left: -10px;
  top: 50%;
  width: 20px;
  height: 20px;
  background-color: #4a9eff;
  border-radius: 50%;
  transform: translateY(-50%);
}

.education-title {
  font-size: 1.5rem;
  color: #4a9eff;
  margin-bottom: 1rem;
}

.education-details {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
}

.school-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.school-name {
  font-size: 1.1rem;
  color: #fff;
}

.location {
  color: #cccccc;
  font-size: 0.9rem;
}

.date {
  color: #cccccc;
  font-size: 0.9rem;
}

/* Styles pour la section des bourses */
.awards-section {
  max-width: 800px;
  margin: 0 auto;
}

.awards-title {
  font-size: 2rem;
  color: #fff;
  margin-bottom: 2rem;
}

.award-item {
  background-color: #2a2a2a;
  border-radius: 10px;
  padding: 1.5rem;
  transition: transform 0.3s ease;
}

.award-item:hover {
  transform: translateX(10px);
}

.award-name {
  font-size: 1.3rem;
  color: #4a9eff;
  margin-bottom: 0.5rem;
}

.award-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.organization {
  color: #fff;
  font-size: 1rem;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .education-item {
    padding: 1.5rem;
  }

  .education-details,
  .award-details {
    flex-direction: column;
    gap: 0.5rem;
  }

  .date {
    align-self: flex-start;
  }
}
</style>
