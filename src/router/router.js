import { createRouter, createWebHistory } from 'vue-router';
import NameIntroduction from '../components/NameIntroduction.vue';
import MyExperiences from '../components/MyExperiences.vue';
import MyProjects from '../components/MyProjects.vue';
const routes = [
  {
    path: '/',
    name: 'NameIntroduction',
    component: NameIntroduction
  },
  {
    path: '/MyExperiences',
    name: 'MyExperiences',
    component: MyExperiences
  },
  {
    path: '/MyProjects',
    name: 'MyProjects',
    component: MyProjects
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;