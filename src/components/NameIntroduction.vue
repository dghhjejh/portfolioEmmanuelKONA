<template>
  <div class="intro-section">
    <div class="content">
      <div class="header">
        <h1 class="title">Emmanuel Kona</h1>
        <h2 class="subtitle">Développeur Web Full Stack</h2>
      </div>
      <div class="description">
        <p>
          Étudiant passionné par le développement web et les nouvelles
          technologies. Je suis en troisième année de baccalauréat en génie
          logiciel à l'Université Laval. Je crée des solutions web innovantes et
          intuitives. Doté de fortes connaissances dans le développement full
          stack et la programmation orientée objet, je transforme vos idées en
          réalité numérique.
        </p>
      </div>
      <div class="social-icons">
        <a :href="socials.github" target="_blank" class="social-link">
          <i class="fab fa-github"></i>
        </a>
        <a :href="socials.linkedin" target="_blank" class="social-link">
          <i class="fab fa-linkedin"></i>
        </a>
        <a :href="'mailto:' + socials.email" class="social-link">
          <i class="fas fa-envelope"></i>
        </a>
        <a :href="'tel:' + socials.phone" class="social-link">
          <i class="fas fa-phone"></i>
        </a>
      </div>

      <a href="https://drive.google.com/file/d/1HyaeTKnTPgt3l6T84qtDuRF4ECb7srRh/view?usp=drive_link" class="contact-button">Télécharger CV</a>
    </div>
  </div>
</template>

<script setup>
    const socials = {
        github: "https://github.com/dghhjejh",
        linkedin: "https://linkedin.com/in/emmanuel-kona-885aa0264",
        email: "konaemmanuel0@gmail.com",
        phone: "+15817779770",
    };
</script>

<style scoped>
.intro-section {
  min-height: 100vh;
  background-color: #1a1a1a;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.content {
  max-width: 800px;
  text-align: center;
}

.header {
  margin-bottom: 3rem;
}

.logo {
  max-width: 300px;
  margin-bottom: 2rem;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

.subtitle {
  color: #4a9eff;
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.description {
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
  color: #cccccc;
}
.social-icons {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.social-link {
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s, transform 0.3s;
}

.social-link:hover {
  color: #4a9eff;
  transform: translateY(-3px);
}

.skills {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2rem;
}

.skill-tag {
  background-color: #333;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
}

.contact-button {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #4a9eff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.contact-button:hover {
  background-color: #357abd;
}

@media (max-width: 768px) {
  .title {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1.2rem;
  }

  .description {
    padding: 0 1rem;
  }
}
</style>
