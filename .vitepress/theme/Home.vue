<template>
  <section id="title" class="flex flex-col text-center bg-blue">
    <div class="grow justify-center">
      <h1>
        <img
          class="pure-img"
          src="/assets/images/PNG/STAN_Logo-Blanc.png"
          :alt="title"
        />
      </h1>
    </div>
    <div class="px-16 text-2xl font-extrabold">
      <h2>{{ description }}</h2>
    </div>
    <div class="flex-col px-8 grow justify-around">
      <p>
        Nous <span class="text-white font-bold">démêlons</span> -
        <span class="text-red font-bold">facilitions</span> -
        <span class="text-blue-light font-bold">revalorisons</span> vos données grâce à un outil de
        confiance et souverain pour vous aider à créer de la valeur au sein de
        votre entreprise.
      </p>
      <ButtonComponent href="#contact" text="Prendre rendez-vous pour une démonstration" class="mx-8"/>
    </div>
    <div class="justify-center line-bg">
      <img class="h-10 mt-12" src="/assets/images/scroll_arrow_homepage.svg">
    </div>
  </section>
  <section class="bg-blue">
    <SectionTitleComponent title="alerte aux données mal traitées" shadow="alerte" class="px-8"/>
    <p class="my-6 px-8 -mb-6">Au sein de vos entreprises, une denrée précieuse circule, se perd, dépérit, n’est pas protégée. Ce sont vos données ! Et pourtant elles représentent une partie importante de votre activité et peuvent être une nouvelle ressource économique !</p>
    <div class="bg-white p-8 text-blue-dark font-bold text-center me-8 translate-y-14 relative z-20">
      <p class="text-2xl mb-6">Les données représentent jusqu’à 15.5% du PIB mondial*</p>
      <p class="text-xs">*RAPPORT L’ÉCONOMIE NUMÉRIQUE 2019 de L’ONU</p>
    </div>
    <div class="bg-blue-dark ms-8 p-8 pt-16 relative translate-y-7 z-10">
      <p class="text-xl"><strong class="font-extrabold">Et oui, vos données aussi méritent le meilleur et pourtant elles sont souvent malmenées, mal traitées voire maltraitées !</strong></p>
      <p class="my-6">La maltraitance, (d’une donnée chez Stan !) c’est mettre une donnée en situation de vulnérabilité lorsqu’une action ou un défaut d’action compromet ou porte atteinte à son développement, à ses droits, à ses besoins fondamentaux ou à sa santé et que cette atteinte intervient dans une relation de confiance, de dépendance, de soin ou d’accompagnement. Les situations de maltraitance (oui on parle toujours de la donnée !) peuvent être ponctuelles ou durables, intentionnelles ou non. Leur origine peut être individuelle, collective ou institutionnelle.</p>
      <p class="text-xl font-extrabold text-blue-light">Vos données méritent d’être mieux traitées, mieux gérées, mieux protégées, et mieux exploitées !</p>
    </div>
  </section>
  <section class="bg-white pt-8 px-8 flex flex-col items-center border-b-2 border-blue-dark mb-4">
    <SectionTitleComponent title="découvrez nos offres" shadow="offres" class="mb-6" dark>
      <img class="w-2/4" src="/assets/images/Stan_logo_bleu.svg" alt="Stan">
    </SectionTitleComponent>
    <div class="offers">
      <OfferBlockComponent img="/assets/images/audit.svg" title="audit" subtitle="Phase d'étude" text="Audit de l'existant et construction d'un plan stratégique" class="border-red"/>
      <OfferBlockComponent img="/assets/images/poc.svg" title="poc" subtitle="Phase de validation" text="Test et mise en place d'une première version Stan" class="border-blue"/>
      <OfferBlockComponent img="/assets/images/industrialisation.svg" title="industrialisation" subtitle="Phase de production" text="Élargissement du périmètre de la solution Stan" class="border-blue-light"/>
    </div>
    <ButtonComponent href="/accompagnement" text="En savoir plus" class="text-blue-dark my-8"/>
  </section>
  <section class="bg-blue px-8 flex flex-col justify-around items-center">
    <SectionTitleComponent title="Une startup made in france" shadow="france"/>
    <img src="/assets/images/startup.jpg" class="my-8" alt="Photo des locaux de las startup Stan">
    <div class="flex startup">
      <div>
        <h3>L'expertise du secteur assurance</h3>
        <p>Deux co-fondateurs qui sont tombés dedans il y a plus de 10 ans, avec une expertise pluri-métiers, et une conscience des enjeux de demain, notamment en matière de donnée.</p>
      </div>
      <div>
        <h3>Un cocktail d’I.A, de cybersécurité, de souveraineté</h3>
        <p>Chez Stan, au café vous entendrez parler data science, open-source, mais aussi cyber-sûreté et intelligence économique. Des sujets au cœur de l’entreprise, qui nous passionnent !</p>
      </div>
      <div>
        <h3>Tel un félin, agile, rapide et malin</h3>
        <p>Petite structure mais agile, capable de se déployer avec flexibilité et douceur, sans perturber vos activités. Tout ceci rapidement, pas dans 3 ans, plutôt dans 3 semaines !</p>
      </div>
      <div>
        <h3>Une rémunération win-win</h3>
        <p>Votre succès nous importe et nous vous le prouvons par notre politique tarifaire. Nous gagnons de l’argent si notre solution est utilisée !</p>
      </div>
    </div>
    <ButtonComponent href="/a_propos" text="Découvrez notre vision" class="my-8"/>
  </section>
  <section class="bg-blue pb-8 flex flex-col relative">
    <div class="bg-blue-light ms-6 text-blue-dark px-8 flex flex-col justify-around items-center -mb-20">
      <SectionTitleComponent title="Un duo d'experts à votre service" shadow="experts" dark/>
      <p class="font-extrabold text-xl my-10"><strong>Stan, c’est la réunion de deux entrepreneurs, aux multi expertises.</strong></p>
      <p>Après une première aventure entrepreneuriale réussie dans la formation, <strong>le duo retrousse à nouveau ses manches pour participer à la création de valeurs dans l’économie du numérique français.</strong> L’un est incollable en data sciences, l’autre en intelligence économique. Les deux sont passionnés par les enjeux de la cybersécurité et de souveraineté. Un duo plein de ressources !</p>
      <ButtonComponent href="/a_propos" text="Découvrez leur parcours" class="mt-8 mb-32"/>
    </div>
    <img src="/assets/images/Duo-casual.jpg" alt="Photo des deux fondateurs" class="w-11/12">
    <img src="/assets/images/MOBILE/line_uturn.svg" alt="" class="w-3/5 absolute -bottom-8 right-0">
  </section>
  <section class="flex flex-col px-8 justify-around items-center pt-4">
    <SectionTitleComponent title="Nos clients (anonymes) le disent" shadow="Témoignages" dark class="w-full"/>
    <p class="italic text-blue-dark text-[1.1rem] my-8">Pour des raisons de sécurité, vous ne verrez jamais les clients de Stan. Nous préservons leur anonymat et leur (cyber)sécurité.</p>
    <div class="border-2 border-blue-light flex flex-col text-blue-dark px-8 py-4 justify-around items-center">
      <p class="self-start"><strong>Mme H.</strong></p>
      <p><strong>Directrice des opérations d’une Institution de Prévoyance</strong></p>
      <p class="my-4">« Travailler avec l’équipe Stan nous a permis d’automatiser nos outils sur nos offres standards dans un délai très court.»</p>
      <button type="button" aria-role="suivant" class="border-2 rounded-full border-blue-dark w-8 h-8 text-4xl leading-4 font-extrabold">›</button>
    </div>
    <img src="/assets/images/MOBILE/line_vertical_up.svg" class="w-full h-20 -mt-2" alt="">
  </section>
  <section class="bg-blue flex flex-col px-8 pb-8 justify-around">
    <SectionTitleComponent title="Contactez-nous" shadow="Contact" />
    <form class="flex flex-col justify-around w-full mt-10 text-blue-dark">
      <input type="email" placeholder="Email" class="p-4 text-blue-dark" required>
      <textarea placeholder="Votre message..." class="my-6 p-4" rows="4" required></textarea>
      <input type="submit" value="Envoyer" class="bg-blue-light font-extrabold uppercase px-4 py-2 self-center">
    </form>
  </section>
</template>
<script setup lang="ts">
import SectionTitleComponent from './SectionTitleComponent.vue'
import OfferBlockComponent from './OfferBlockComponent.vue'
import ButtonComponent from './ButtonComponent.vue'

defineProps<{
  title: string
  description: string
}>()
</script>

<style scoped>
::placeholder {
  color: currentColor;
}

.offers {
  background-image: url(/assets/images/MOBILE/line_vertical.svg);
  background-repeat: no-repeat;
  background-position-x: center;
  padding-bottom: 3rem;
}

.clients {
  padding-bottom: 3rem;
}

form > input[type="email"] {
  background-image: url(/assets/images/MOBILE/line_horizontal_right.svg);
  background-repeat: no-repeat;
  background-position-x: -3.2rem;
  background-position-y: center;
  background-size: 4rem auto;
}

form > textarea {
  background-image: url(/assets/images/MOBILE/line_horizontal_left.svg);
  background-repeat: no-repeat;
  background-position-x: 120%;
  background-position-y: center;
  background-size: 4rem auto;
}

#title {
  height: 90vh;
  justify-content: space-evenly;
}

#title > div {
  border: 2px solid rgb(var(--dark));
  max-width: 100%;
  display: flex;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

h1 {
  width: 60%;
  text-align: center;
}

h3 {
  font-size: 1.25rem;
  font-weight: 900;
  margin-bottom: 1rem;
  line-height: 1.5rem;
}

.startup {
  flex-wrap: wrap;
  row-gap: 2rem;
  justify-content: space-between;
}

.startup > div {
  width: 45%;
}
</style>
