<template>
  <section class="text-blue-dark flex flex-col items-center lg:pt-16 lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:h-[90vh]">
    <SectionTitleComponent title="vision" shadow="vision" dark class="text-center lg:col-start-1 lg:row-start-1" id="vision"/>
    <div class="lg:col-start-2 lg:col-span-full lg:row-span-full lg:flex lg:flex-col lg:items-center lg:pt-16">
      <p class="text-center italic mt-12 lg:text-2xl">Notre rôle chez</p>
      <img src="/assets/images/Stan_logo_bleu.svg" alt="Logo Stan" class="w-1/3 mt-4">
      <img src="/assets/images/line_fork.svg" alt="Trois lignes émanant du logo Stan pour aller vers les trois blocs de texte suivant" class="w-9/12 mt-4">
      <div class="flex gap-1 justify-between text-center px-4 lg:w-full">
        <div class="text-blue-dark">
          <h3 class="font-extrabold text-xl">DÉMÊLER</h3>
          <p>et améliorer votre gestion de données</p>
        </div>
        <div class="text-red">
          <h3 class="font-extrabold text-xl">FACILITER</h3>
          <p>et mieux exploiter vos données</p>
        </div>
        <div class="text-blue-light">
          <h3 class="font-extrabold text-xl">VALORISER</h3>
          <p>la vie des équipes et simplifier la gestion</p>
        </div>
      </div>
      <img class="h-10 mt-12" src="/assets/images/scroll_arrow_homepage.svg">
      <p class="text-center mt-8 px-8 pb-8"><strong class="font-extrabold text-xl lg:text-3xl">Grâce à une solution saine et souveraine !</strong></p>
    </div>
    <div class="bg-blue w-full text-white flex flex-col items-center pt-8 lg:col-start-1 lg:row-start-2 lg:h-full lg:w-10/12 lg:ms-16">
      <h3 class="h4 text-blue-light">Chez STAN nous voulons :</h3>
      <ul role="list" class="arrow-list">
        <li>Préserver l'éco-système</li>
        <li>Redonner de l'indépendance</li>
        <li>Soutenir les entreprises locales</li>
        <li>Dynamiser les territoires</li>
      </ul>
    </div>
  </section>
  <section class="bg-blue pt-8 flex flex-col items-center lg:items-start lg:pe-16 lg:relative" id="metiers">
    <div class="hidden lg:block lg:border-b-2 lg:border-s-2 lg:border-blue-light lg:w-1/3 lg:h-10 lg:absolute lg:bottom-14 lg:left-1/4">
    </div>
    <div class="border-t-2 border-e-2 border-blue-light mt-2 pt-8 me-6 relative lg:border-0 lg:w-7/12">
      <div class="bg-blue-dark text-white p-8 transform lg:px-28 lg:py-14">
        <h3 class="font-extrabold text-2xl mb-6">DES MÉTIERS ET SECTEURS À TRANSFORMER</h3>
        <h4 class="text-blue-light">Très concrètement ?</h4>
        <p class="lg:ps-24">Nous souhaitons <strong>simplifier le métier</strong> de l’assurance pour lui permettre de se recentrer sur ses missions à impact. Nous cherchons à privilégier le “care”, en prenant en charge les aspects techniques, sécurité, automatisation.</p>
        <p class="lg:ps-24 lg:mt-6">Parce que l’important, finalement c’est l’utilisateur final, et nous voulons donner l’opportunité <strong>aux acteurs du secteur de se recentrer</strong> autour de lui.</p>
      </div>
      <img src="/assets/images/dot_teal.svg" alt="" class="w-3 absolute -bottom-2 -right-1.5 lg:z-10 lg:-bottom-10 lg:right-[4.4rem] lg:w-5">
    </div>
    <div class="bg-white w-full p-8 lg:w-5/12 lg:self-end lg:relative lg:-left-20 lg:-mt-32">
      <h4 class="text-blue-light">Nos ambitions</h4>
      <p class="text-blue-dark lg:ps-16">Devenir la référence en matière de gestion sécurisée de la donnée, d’abord sur le marché de l’assurance. Puis dans la santé, pour aller ensuite dans tous les secteurs manipulant de la donnée.</p>
    </div>
  </section>
  <section class="pb-6 bg-blue pt-8 lg:grid lg:grid-cols-2 lg:grid-rows-2" id="madeinfrance">
    <SectionTitleComponent title="une solution made in france" shadow="france" id="souverainete" class="px-8 lg:ps-32 lg:pe-16 lg:pt-16 lg:col-start-1 lg:row-start-1"/>
    <div class="px-8 lg:col-start-2 lg:row-span-full lg:py-32 lg:mt-20">
      <h3 class="font-extrabold my-6 text-2xl">NOTRE SOUVERAINETÉ NUMÉRIQUE</h3>
      <p><strong>La souveraineté numérique</strong>, c’est la capacité à maîtriser l’ensemble des technologies, tant d’un point de vue économique que social et politique. Autrement dit, la capacité de maîtrise, <strong>d’autonomie et d’indépendance</strong>.<br/>
        Le numérique, et surtout les données personnelles des internautes, est devenu le nouveau terrain d’affrontement des grandes puissances mondiales.</p>
      <h4 class="mt-10">Pour Stan, la souveraineté commence par :</h4>
      <ul role="list" class="sovereign">
        <li>
          <h5>UN COLLECTIF FORT</h5>
          <p>Où tout le monde joue dans la même équipe : l’utilisateur, l’assureur et Stan.</p>
          <img src="/assets/images/dot_teal.svg" alt="">
        </li>
        <li>
          <h5>DE LA TRANSPARENCE</h5>
          <p>Donc pas de boîte noire dans un datacenter à l’autre bout du monde. Ici, tout est fait en France, stocké en France et géré par des équipes françaises.</p>
          <img src="/assets/images/dot_teal.svg" alt="">
        </li>
        <li>
          <h5>DU CONTRÔLE</h5>
          <p>La proximité et l’accès à nos centres de stockage nous permet aussi de mieux surveiller toutes tentatives d’espionnage puisque nous avons tout sous les yeux.</p>
          <img src="/assets/images/dot_teal.svg" alt="">
        </li>
        <li>
          <h5>LE RESPECT DE NOS VALEURS</h5>
          <p>S’assurer que nous ne dépendons pas de grandes entreprises américaines nous permet de ne pas être soumis à des législations étrangères qui pourraient aller à l’encontre de nos valeurs.</p>
          <img src="/assets/images/dot_teal.svg" alt="">
        </li>
        <li>
          <h5>UN ÉTAT D'ESPRIT CYBERSÉCURITÉ</h5>
          <p>Tant dans nos recrutements que dans nos habitudes de travail, nos partenariats… la cybersécurité fait partie de notre ADN, de nos réflexes, de notre démarche, en interne comme en externe.</p>
          <img src="/assets/images/dot_teal.svg" alt="">
        </li>
      </ul>
      <ButtonComponent href="/Rapport souveraineté assureurs santé.pdf" text="Découvrez notre rapport sur la souveraineté des assureurs santé" class="w-2/4 my-8 block"/>
    </div>
    <img src="/assets/images/stan_working.jpg" alt="Les équipes de Stan travaillant autour d'une table dans les locaux de l'entreprise" class="lg:w-10/12">
  </section>
  <section class="bg-blue pt-8 pb-2 partner">
    <h3>NOS CERTIFICATIONS</h3>
    <div class="mb-8">
      <div>
        <div class="img-container">
          <img src="/assets/images/hds.jpg" alt="Logo de la certification HDS">
        </div>
        <p><strong>HDS : Hébergement de Données de Santé</strong>, une des plus hautes certifications de sécurité pour les hébergeurs. Elle nous autorise à stocker des données médicales, notamment pour des déclarations à un assureur. Bien sûr, toutes les données bénéficient des mêmes précautions.</p>
      </div>
      <div>
        <div class="img-container">
          <img src="/assets/images/secnumcloud.jpg" alt="Logo du visa de sécurité SecNumCloud délivré par l'ANSSI">
        </div>
        <p><strong>SecNumCloud</strong> (en cours de certification) : Cette certification de l’ANSSI atteste de notre effort pour la sécurité de notre système, des systèmes de défense numérique à la formation de nos employés en passant par une sélection rigoureuse lors de l’embauche ou le choix de prestataires.</p>
      </div>
    </div>
    <!-- <h3>NOS ENGAGEMENTS</h3> -->
    <!-- <div> -->
    <!--   <div> -->
    <!--     <div class="img-container"> -->
    <!--       <img src="/assets/images/ginum.jpg" alt="Logo du groupement GINUM"> -->
    <!--     </div> -->
    <!--     <p><strong>Ginum</strong> accompagne l’écosystème du numérique français afin de relever ensemble les défis qui s’annoncent pour la Défense, la Sécurité et les enjeux d’importance vitale.</p> -->
    <!--   </div> -->
    <!--   <div> -->
    <!--     <div class="img-container"> -->
    <!--       <img src="/assets/images/fntc.jpg" alt="Logo de la fédération Fntc"> -->
    <!--     </div> -->
    <!--     <p><strong>Fntc</strong> rassemble éditeurs de logiciels, prestataires de services, experts, professionnels réglementés, start-up, acteurs internationaux, utilisateurs et structures institutionnelles. pour une digitalisation fiable et sécurisée.</p> -->
    <!--   </div> -->
    <!-- </div> -->
  </section>
  <section class="bg-blue pb-48 lg:flex">
    <div class="px-8 lg:w-1/2 lg:px-16">
      <SectionTitleComponent title="la belle équipe" shadow="équipe" id="equipe"/>
      <img src="/assets/images/portrait_jb.jpg" alt="Portrait de Jean-Baptiste Richardet, cofondateur de Stan" class="lg:mt-6">
      <h3 class="text-center text-lg font-extrabold my-6 text-blue-light">JEAN-BAPTISTE RICHARDET</h3>
      <TabbarComponent :tabs="tabs.jb" id="jb" color="blue" text-color="white" class="text-[.65rem] text-sm">
        <template #parcours_jb>
          <p>Jean-Baptiste est ingénieur en informatique, avec une spécialisation Intelligence Artificielle depuis plus de 10 ans.</p>
          <p>Passionné par la Data Science et le développement logiciel, il a eu l’opportunité de contribuer aux défis, tantôt dans de grandes entreprises comme Thalès ou TF1, tantôt dans des start-ups aux grandes ambitions. Il décide en 2019 de rejoindre Jérémy pour fonder Cameo, un organisme de formation qui propose les formations qu’ils auraient aimé avoir lors de leurs carrières. Sa mission ? Gérer l’intégralité des démarches administratives automatiquement pour permettre aux formateurs de ne garder que ce qu’ils font le mieux : créer et animer des formations. C’est à ce moment que Stan est né !</p>
          <p>Le leitmotiv de Jean-Baptiste : <i>“Pourquoi faire 10 fois quelque chose que je pourrais automatiser ?”</i>. Cette devise l’a poussé à concevoir et développer de nombreux robots avec des fonctionnalités diverses et variées : gérer de la multi-publication sur des réseaux sociaux, automatiser une routine matinale dans une maison connectée ou faire tourner un organisme de formation sans intervention humaine. Chaque projet est un défi personnel. </p>
        </template>
        <template #spec_jb>
          <p>Depuis la création de Stan, il ne cesse d’imaginer des solutions répondant aux besoins clients tout en satisfaisant les exigences de leur DSI. Sa priorité est de rendre les opérations les plus fluides et les plus sûres possibles.</p>
          <p>Grand défenseur des solutions libres et open-source et amateur de casse-tête, il passe ses journées à trouver la bonne solution pour le bon problème : besoin d’une plateforme de confiance ? de faire communiquer du SOAP avec du GraphQL ? Il aura toujours une réponse à vous proposer !</p>
        </template>
        <template #expert_jb>
          <p>Spécialiste en architecture logicielle, data scientist et formé à la cybersécurité, il utilise ce savant mélange de connaissance pour imaginer un outil Stan toujours plus performant, innovant, intuitif et sécurisé. Il n’y a pas deux projets identiques, mais il y aura des solutions pour tout le monde. </p>
        </template>
        <template #bonus_jb>
          <p>Grand amateur d’énigmes, de casse-tête et d’escape game, chaque problématique est un jeu où aucun détail ne lui échappe. Observateur, force de proposition et toujours avec un brin d’humour, un “must-have” pour les projets techniques.</p>
        </template>
      </TabbarComponent>
    </div>
    <div class="bg-white px-8 border-b-2 border-blue lg:w-1/2 lg:px-16 lg:pt-36">
      <div class="relative pt-16 lg:pt-0">
        <img src="/assets/images/portrait_jeremy.jpg" alt="Portrait de Jérémy Marlin, cofondateur de Stan" class="absolute -top-44 lg:static">
        <h3 class="text-center text-lg font-extrabold my-6 text-blue-dark">JÉRÉMY MARLIN</h3>
        <TabbarComponent :tabs="tabs.jeremy" id="jeremy" color="white" text-color="blue" class="text-[.65rem] lg:text-sm">
          <template #parcours_jeremy>
            <p>Jérémy a baigné plus de 10 ans dans le domaine de la protection sociale sur des activités de conseil et des sujets de développement commercial.</p>
            <p>Il a fait le grand saut dans l’entrepreneuriat il y a près de 6 ans avec la création d’une startup dans la formation professionnelle : <a href="https://cameo.fr/">Cameo</a>. Cette structure vise à développer les compétences entrepreneuriales et de gestion de projets par des formats expérimentaux d’un nouveau genre :  l’immersion en startups. Un projet qui a permis de générer +20 millions de CA et de générer + 50% de mobilités internes chez les clients de Cameo (vs 5% au niveau national).</p>
            <p>Jérémy est un précurseur toujours à l'affût de la prochaine innovation. Il est actif dans les réseaux entrepreneuriaux et d’innovation comme Innocherche, un observatoire de veille qui conseille les dirigeants d’entreprises sur les usages provoquant des innovations de rupture sur des sujets comme la cybersécurité, l’IA, la smart city, la raison d’être…</p>
          </template>
          <template #spec_jeremy>
            <p>C’est un visionnaire, fort de sa capacité à imaginer/anticiper le futur. Jérémy aime challenger les systèmes pour en améliorer le fonctionnement et l’ADN.</p>
            <p>Pour cela, il se forme régulièrement sur des sujets complexes, et a obtenu récemment un MBA à l’Ecole de Guerre Économique pour se former à l’art de l’intelligence économique, au renseignement en source ouverte (OSINT), par du renseignement humain (HUMINT) et la cybersécurité. D’ailleurs il croit et défend le concept de souveraineté numérique.</p>
          </template>
          <template #expert_jeremy>
            <p>Jérémy a plusieurs cordes à son arc qui lui permettent une vision 360° sur des sujets complexes : commercial, gestion, marketing, communication, numérique… dûe à une expertise métier forte.</p>
            <p>En 2023, Jérémy a co-écrit un livre intitulé <i>“TPE & PME, les oubliées de la cybersurêté ?”</i> et un rapport (à paraître) sur <i>“La Souveraineté numérique des acteurs de l’assurance”</i></p>
          </template>
          <template #bonus_jeremy>
            <p>Adepte du marathon à haute intensité. Transparent, de bon conseil/partner et fidèle comme dirait ses clients.</p>
          </template>
        </TabbarComponent>
      </div>
    </div>
  </section>
  <section class="px-8 -mb-36 relative z-10">
    <h2 class="mt-4 mb-8 text-center text-blue-dark text-2xl font-extrabold lg:text-4xl lg:mt-20" id="valeurs">NOS VALEURS</h2>
    <div class="lg:flex lg:justify-around lg:gap-8">
      <OfferBlockComponent :img="ensembleUrl" title="réussir ensemble" subtitle="Partage & transmission" text="Chez Stan, au-delà de vous proposer une solution, nous aimons partager nos analyses et expliquer notre raisonnement, nos solutions. Nous sommes persuadés que comprendre et partager est un facteur de réussite collective. Donc nos équipes sont pédagogues, à l’écoutes et patients." class="border-red"/>
      <OfferBlockComponent :img="transparenceUrl" title="de la transparence" subtitle="Intelligence artificielle" text="L’innovation est un réel état d’esprit pour nos fondateurs. Nous comptons continuer de proposer à nos clients le meilleur de la science informatique. L’intelligence artificielle est un outil qu’on aime challenger, améliorer, voir évoluer. Au cœur de nos métiers, nous participons à son façonnage pour plus de performance, précision, protection." class="border-blue lg:border-blue-dark"/>
      <OfferBlockComponent :img="confianceUrl" title="Avancer en confiance" subtitle="transparence & sécurité" text="La confiance n’est pas un dû mais se mérite et nous en sommes conscients. Nous travaillons dans la transparence, tout en maintenant notre politique de confidentialité et de sécurité. Nos partenaires et collaborateurs sont sélectionnés dans le même état d’esprit. C’est l’alliance transparence et sécurité qui fait notre force." class="border-blue-light"/>
    </div>
  </section>
  <section class="bg-blue pt-40 flex flex-col">
    <h2 class="font-extrabold text-2xl px-20 mb-8 lg:text-4xl lg:my-8 lg:self-center">NOS EXPERTISES & ENGAGEMENTS</h2>
     <div class="lg:flex lg:items-start">
      <div class="bg-white w-2/3 pt-6 ps-8 pe-10 pb-8 relative z-10 lg:w-1/3 lg:ms-14">
        <img src="/assets/images/Stan_logo_bleu.svg" alt="Logo Stan" class="w-2/3 mb-2">
        <p class="text-blue-dark text-3xl font-extrabold text-end">C'EST...</p>
      </div>
      <div class="bg-blue-dark ms-8 px-6 pt-24 pb-8 -mt-16 lg:flex-grow lg:-ms-32 lg:mt-10 lg:ps-40 lg:pt-12">
        <ul class="arrow-list">
          <li> Une expertise du secteur assurance (côté métiers, IT, juridique).</li>
          <li> Une entreprise qui prône et fonctionne en souveraineté numérique.</li>
          <li> Une capacité à s’adapter à n’importe quelle organisation (taille/temps/passif technique).</li>
          <li> Une rapidité de déploiement.</li>
          <li> Une petite structure agile et flexible, capable de s’adapter à toutes les situations.</li>
          <li> Un esprit entrepreneurial.</li>
          <li> Une démarche cybersécurité forte.</li>
          <li> Des prix justes, au résultat.</li>
        </ul>
      </div>
    </div>
    <ButtonComponent text="prendre rendez-vous pour une démonstration" class="mt-8 mb-10 w-3/5 text-sm self-center lg:w-1/5" href="/#contact"/>
  </section>
</template>
<script setup lang="ts">
import SectionTitleComponent from './SectionTitleComponent.vue'
import TabbarComponent from './TabbarComponent.vue';
import OfferBlockComponent from './OfferBlockComponent.vue';
import ButtonComponent from './ButtonComponent.vue';

import ensembleUrl from '../../assets/images/ensemble.svg'
import transparenceUrl from '../../assets/images/transparence.svg'
import confianceUrl from '../../assets/images/confiance.svg'

const tabs = {
  jeremy: [{
    id: 'parcours_jeremy',
    label: 'Parcours'
  }, {
      id: 'spec_jeremy',
      label: 'Spécificité'
    }, {
      id: 'expert_jeremy',
      label: 'Expertise'
    }, {
      id: 'bonus_jeremy',
      label: 'Infos bonus'
    }],
  jb: [{
    id: 'parcours_jb',
    label: 'Parcours'
  }, {
      id: 'spec_jb',
      label: 'Spécificité'
    }, {
      id: 'expert_jb',
      label: 'Expertise'
    }, {
      id: 'bonus_jb',
      label: 'Infos bonus'
    }]
}
</script>
<style scoped>
h4, .h4 {
  font-style: italic;
  font-size: 1.25rem;
  font-weight: 900;
  margin-bottom: 1.5rem;
}
.arrow-list li::before {
  content: "→ ";
  font-weight: 900;
}

.sovereign {
  position: relative;
  padding-left: 2.5rem;
}

.sovereign::before {
  content: '';
  width: 2px;
  height: 86%;
  background: rgb(var(--blue-light));
  position: absolute;
  left: 0;
  top: 6.5%;
}

.sovereign h5 {
  font-weight: 900;
  margin: 1rem 0 .5rem  0;
  font-size: 1.15rem;
}

.sovereign li {
  margin-bottom: 1.5rem;
  position: relative;
}

.sovereign img {
  position: absolute;
  left: -2.91rem;
  top: 50%;
  width: .9rem;
}

.transform {
  background-repeat: no-repeat;
  background-position-y: 102%;
  background-position-x: 102%;
  background-size: 1rem auto;
}

.partner h3 {
  font-weight: 900;
  font-size: 1.5rem;
  border-bottom: solid 2px rgb(var(--blue-light));
  padding-bottom: 4rem;
  text-align: center;
}

.partner > div {
  margin-top: -2.5rem;
  display: flex;
  justify-content: space-evenly;
}

.partner > div > div {
  width: 40%;
  text-align: center;
}

.partner .img-container {
  border: solid  1px rgb(var(--blue-light));
  background: rgb(var(--white));
  height: 80px;
  width: 100%;
  margin-bottom: 1rem;
  padding: 3px 0;
}

.img-container img {
  height: 100%;
  margin: 0 auto;
}

.team h3 {
  font-weight: 900;
  font-size: 1.25rem;
  text-align: center;
  margin: 1rem 0;
}

.team div.flex {
  width: 100%;
  font-size: .6rem;
  justify-content: center;
  margin-bottom: 1rem;
}

.team div.flex a {
  padding-top: 3px;
  padding-bottom: 3px;
  border: 1px solid rgb(var(--white));
  flex-grow: 1;
  text-align: center; 
}

#metiers {
  background-image: url(/assets/images/bkg_apropos_1.svg);
  background-position-x: right;
}

#madeinfrance {
  background-image: url(/assets/images/bkg_apropos_2.svg);
}
</style>
