<template>
  <div>
    <section class="px-2 flex flex-col items-center" id="top">
      <SectionTitleComponent title="stan répond à vos besoins" shadow="besoin" class="text-center mb-6 px-6" dark id="besoins"/>
      <div class="flex flex-wrap justify-center">
        <div class="w-2/4 text-blue-dark flex flex-col items-center">
          <img src="/assets/images/optimiser.svg" alt="" class="max-w-[50px] my-1">
          <h3 class="font-extrabold text-xl">OPTIMISER</h3>
          <p class="text-center px-3 my-2">Vous êtes dans le secteur de l’assurance et vous avez besoin d’<strong>optimiser l’usage de la donnée ?</strong></p>
        </div>
        <div class="w-2/4 text-blue-dark flex flex-col items-center">
          <img src="/assets/images/automatiser.svg" alt="" class="max-w-[50px] my-1">
          <h3 class="font-extrabold text-xl">AUTOMATISER</h3>
          <p class="text-center px-3 my-2">Vous êtes en recherche de gains (de temps/ de ressources) via l’<strong>automatisation de certaines tâches ?</strong></p>
        </div>
        <div class="w-2/4 flex-grow text-blue-dark flex flex-col items-center">
          <img src="/assets/images/souverainete.svg" alt="" class="max-w-[50px] my-1">
          <h3 class="font-extrabold text-xl">SOUVERAINETE</h3>
          <p class="text-center px-3 my-2">Vous cherchez une <strong>solution numérique souveraine reconnue</strong> pour répondre à vos problématiques ?</p>
        </div>
      </div>
      <img class="h-6 my-2" src="/assets/images/scroll_arrow_homepage.svg">
    </section> 
    <section class="flex flex-col items-center advantages">
      <img class="w-2/5 my-2" src="/assets/images/Stan_logo_bleu.svg">
      <p class="px-8 text-blue-dark text-center text-xl font-extrabold">est la solution smart et souveraine autour de vos données</p>
      <div class="relative flex  flex-col">
        <img class="absolute w-[10%] right-2 top-9 z-20" src="/assets/images/line_right_down.svg" alt="">
        <div class="bg-blue px-8 pt-8 self-start w-[90%] pb-96">
          <h2 class="text-2xl font-extrabold mb-8">SIMPLIFIER ET AUTOMATISER</h2>
          <h3 class="italic text-blue-light font-extrabold mb-8 text-lg">Dans l'impasse</h3>
          <p class="pb-6">Les données sont une nouvelle ressource économique pour toute entreprise. La capacité à transformer les données constitue un atout et un avantage concurrentiel.</p>
        </div>
        <div class="bg-red ps-14 pe-10 py-6 self-end w-[90%] -mt-96 relative z-10">
          <h3 class="italic text-white font-extrabold mb-8 text-lg">Et pourtant</h3>
          <ul role="list" class="text-sm arrowed">
            <li><strong><span class="text-2xl">57%</span> des entreprises craignent que le volume de données augmente trop vite</strong> avant que leurs organisations puissent s’y être préparées correctement.</li>
            <li>
              <p><strong class="text-2xl">66%</strong> d’entre elles affirment que plus de la moitié de leurs données numériques sont non traitées, déstructurées, voire inconnues.</p>
              <p> La donnée est encore une richesse sous-exploitée et pourtant elle peut faire la différence sur tous les marchés ! Mais encore faut-il savoir les traiter.</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="bg-blue-dark px-8 py-6 w-full -mt-40 pt-40">
        <h3 class="italic text-blue-light font-extrabold my-8 text-lg">Stan vous sort de l'impasse</h3>
        <p>Nos clients se retrouvent souvent dans l’impasse d’un héritage technologique qui peut-être lourd avec des langages techniques d’un ancien temps, qui doivent continuer d’interagir avec des technologies plus récentes. Il est parfois complexe de faire vivre toutes ces technologies dans une architecture commune.</p>
        <p class="my-6"><strong>Stan vous permet de simplifier vos outils, afin de pouvoir automatiser la gestion de données. La première marche pour créer de la valeur !</strong></p>
        <p>Notre approche commence par une analyse du processus, sans ordinateur mais avec beaucoup de bon sens : pourquoi fait-on ça ? Qui doit le faire ? Qui va en utiliser la sortie ? A-t-on déjà cette donnée ailleurs ? Une fois les entrées et sorties démêlées, on peut commencer à automatiser les tâches de chacun, en allant interconnecter un maximum de données entre elles pour nécessiter le minimum de travail humain. Notre objectif : que la personne n’ait plus qu’à valider la production de la machine.</p>
        <div class="bg-white px-4 py-5 w-full mt-4">
          <h3 class="italic text-blue font-extrabold mb-5 text-lg">Et comme les habitudes évoluent, notre robot doit vous suivre !</h3>
          <p class="text-blue-dark">C’est pourquoi nous lui avons donné une structure légère et composite pour qu’il puisse s’adapter rapidement et simplement à vos nouveaux besoins. Vous changez de SI ? Stan change son adaptateur grâce à sa technologie “Plug-n-Play” ! Votre direction juridique vous demande une nouvelle étape de contrôle ? Le moteur de règles de Stan vous permet de modifier son comportement en quelques clics.</p>
        </div>
      </div>
      <div class="px-8 self-start w-[90%] pb-96 relative">
        <img class="absolute h-80 -right-4 -top-2 z-20" src="/assets/images/line_down_small.svg" alt="">
        <h2 class="text-blue-dark text-2xl font-extrabold my-8">SÉCURISER</h2>
        <h3 class="italic text-blue-light font-extrabold mb-4 text-lg">Protéger vos données = protéger votre entreprise</h3>
        <p class="pb-6 text-blue-dark">La protection des données est un maillon vital pour garantir votre survie sur votre secteur notamment pour les organismes d’assurance qui gèrent des données sensibles comme de la donnée RH ou de santé.</p>
      </div>
      <div class="bg-red ps-14 pe-10 py-6 self-end w-[90%] -mt-96 relative z-10">
        <h3 class="italic text-white font-extrabold mb-8 text-lg">Et pourtant</h3>
        <ul role="list" class="text-sm arrowed">
          <li><strong><span class="text-2xl">+79%</span> de notifications de violation de données en 2021 par rapport à 2020</strong> (source CNIL)</li>
          <li><strong class="text-2xl">50%</strong> des sanctions prononcées par la CNIL visent des <strong>manquements à l’obligation de sécurité des données.</strong></li>
          <li class="arrowed"><strong class="text-2xl">50%</strong>des cyberattaques concernent des TPE/PME. Selon l’étude Sectigo, en 2020. L’expérience montre que ces attaques passent en premier lieu par les prestataires de ces entreprises.</li>
        </ul>
      </div>
      <div class="bg-blue px-8 py-6 w-full -mt-40 pt-40">
        <h3 class="italic text-blue-light font-extrabold my-8 text-lg">Stan protège</h3>
        <p><strong>Nous sommes là pour évaluer les possibilités de malveillances d’un attaquant sur vos données exposées</strong>. Nous souhaitons vous éviter qu’un attaquant arrive à pénétrer votre système informatique et divulgue les données de vos clients ou que vous exposiez involontairement des données sensibles (le numéro de sécurité social de vos clients, leur RIB…).</p>
        <p><strong>Toutes les données stockées ou traitées par STAN sont chez Euclyde, un datacenter situé à Villeurbanne (près de Lyon, en France) et gérées par la société d’hébergement et d’infogérance Core Us basée également à Villeurbanne.</strong></p>
        <p>Ces deux acteurs sont habilités à héberger des données de santé par la certification HDS. De par cette certification, l’accès au serveur est restreint aux seuls personnels autorisés que sont le gérant de Core Us et le directeur technique de STAN.</p>
        <p><strong>Protéger votre gestion de données, c’est également protéger vos parties prenantes</strong>, en vous assurant que les données que vos clients, fournisseurs, partenaires vous fournissent, sont entre de bonnes mains ! Et oui, c’est aussi votre responsabilité.</p>
        <div class="bg-blue-dark px-8 py-5 w-[110%] mt-4 self-end">
          <h3 class="italic font-extrabold mb-5 text-lg">Travailler Stan c’est également avoir une base de travail qui s’adapte à norme DORA.</h3>
          <p>Le projet de règlement de la Commission européenne « DORA » (Digital Operational Resilience Act) a pour objectif d’améliorer la résilience opérationnelle informatique des acteurs des services financiers en mettant en place un cadre de gouvernance et de contrôle interne spécifique (ICT risk management framework). Il est intéressant de voir que l’assureur se doit de maîtriser la gestion du risque de tiers avec notamment la supervision directe des prestataires de services « critiques».</p>
        </div>
        <h2 class="mt-10 text-2xl font-extrabold mb-8">OPTIMISER</h2>
        <h3 class="italic text-blue-light font-extrabold my-8 text-lg">Secteur maîtrisé = process maîtrisé</h3>
        <p>Stan connaît déjà votre métier, il n’a besoin que de s’approprier les spécificités de votre processus. Ainsi, pas besoin de tout reconstruire de 0, ce qui nous permet de mettre Stan au travail plus vite, plus facilement et sans trous dans le budget.</p>
        <p>Déjà entraîné à gérer les données issues de l’assurance, Stan ne nécessite que du “fine-tuning” pour s’adapter à sa nouvelle mission. Pas besoin de 3 mois de réunions, pas besoin de mobiliser toute votre DSI : vous gérez vos clients, nous gérons vos process !</p>
        <h3 class="italic text-blue-light font-extrabold my-8 text-lg">Stan libère</h3>
        <p>Automatiser des tâches et des process, c’est gagner du temps, des ressources humaines et financières. Stan va aider le client à retrouver de la marge en automatisant des tâches de gestion et commerciales.</p>
      </div>
      <img src="/assets/images/duo-working.png" alt="Jérémy Marlin et Jean-Baptiste Richardet en train d'optimiser un processus Stan" class="w-full">
    </section>
    <section class="flex flex-col items-center px-8 text-blue-dark">
      <SectionTitleComponent title="notre offre" shadow="offre" dark id="offres"/>
      <OfferBlockComponent title="audit" subtitle="Phase d'étude" :img="auditUrl" class="border-red w-full mt-10" text=""/>
      <img class="h-6 my-2" src="/assets/images/scroll_arrow_homepage.svg">
      <h2 class="text-2xl font-extrabold">AUDIT</h2>
      <h3 class="text-center text-lg font-extrabold mb-6">DE L'EXTISTANT ET CONSTRUCTION D'UN PLAN STRATÉGIQUE</h3>
      <TabbarComponent :tabs="tabs.audit" id="audit" class="text-[.65rem]" color="red" textColor="blue-dark">
        <template #qui>
          <p>Les acteurs de l’assurance qui cherchent à valoriser leurs données.</p>
        </template>
        <template #accompagnement>
          <p>Note d’opportunité sur l’utilisation de la donnée dans le cadre de projets identifiés (digitalisation de la relation client, automatisation des adhésions/affiliations, renouvellement de contrat, connexion avec des SIRH, gestion des dispenses d’affiliation).</p>
        </template>
        <template #livrable>
          <h4>Etat des lieux</h4>
          <ul>
            <li>Cartographie de la donnée</li>
            <li>Intelligence économique autour des aspects cyber/IA/souveraineté</li>
          </ul>
          <h4>Pour passer de l’état des lieux à la préco</h4>
          <ul>
            <li>Des ateliers avec des experts métiers et des panels d’usagers cibles.</li>
            <li>Définition de problématiques à adresser</li>
          </ul>
          <h4>Préco</h4>
          <ul>
            <li>Cahier de spécifications pour mise en place de solutions techniques</li>
            <li>Rapport d’étonnement et d’opportunités</li>
          </ul>
        </template>
        <template #quoi>
          <ul>
            <li>Etablir une stratégie de valorisation des données présentes dans vos SI</li>
            <li>Anticiper les nouveaux usages (chatGPT, IA, phygital, plateformisation)</li>
          </ul>
        </template>
      </TabbarComponent>
      <OfferBlockComponent title="POC" subtitle="Phase de validation" :img="pocUrl" class="border-blue w-full mt-10" text=""/>
      <img class="h-6 my-2" src="/assets/images/scroll_arrow_homepage.svg">
      <h2 class="text-2xl font-extrabold">PROOF OF CONCEPT</h2>
      <h3 class="text-center text-lg font-extrabold mb-6">(POC)</h3>
      <TabbarComponent :tabs="tabs.poc" id="poc" class="text-[.65rem]" color="blue" textColor="blue-dark">
        <template #qui>
          <p>Pour les entreprises ayant un plan stratégique de valorisation de leurs données</p>
        </template>
        <template #accompagnement>
          <p><ul>
            <li>Sélection d’un périmètre réduit pour tester les premières itérations.</li>
            <li>Validation des connexion techniques entre Stan et les différents applicatifs internes/externes</li>
          </ul></p>
        </template>
        <template #livrable>
          <p>Création de la documentation technique générée par le POC</p>
        </template>
        <template #quoi>
          <p>Tester la compatibilité de votre système, rassurer votre DSI et faire un quick-win pour convaincre la direction</p>
        </template>
      </TabbarComponent>
      <OfferBlockComponent title="industrialisation" subtitle="Phase de production" :img="industrialisationUrl" class="border-blue-light w-full mt-10" text=""/>
      <img class="h-6 my-2" src="/assets/images/scroll_arrow_homepage.svg">
      <h2 class="text-2xl font-extrabold mb-6">INDUSTRIALISATION</h2>
      <TabbarComponent :tabs="tabs.industrialisation" id="industrialisation" class="text-[.65rem]" color="blue-light" textColor="blue-dark">
        <template #qui>
          <p>Pour ceux qui ont validé le PoC</p>
        </template>
        <template #accompagnement>
          <p>Maitrise d’œuvre et d’ouvrage pour la mise en place du nouveau périmètre fonctionnel de Stan. Coordination des autres prestataires et des ressources internes pour fluidifier les échanges autour du partage de données. Création d’une architecture sur mesure, optimisée pour vos flux.</p>
        </template>
        <template #livrable>
          <p>Une V1 (puis 2, 3, 4,...) de Stan conforme aux spécifications définies lors de la phase d’audit, ainsi que des recommandations de fonctionnalités (hors du périmètre prévus) pouvant être intégrées dans la version suivante.</p>
        </template>
        <template #quoi>
          <p><strong>Pour utiliser Stan a son plein potentiel, sur tout votre portefeuille client et sur l’intégralité de votre offre.</strong>Cela permettra aussi de rationaliser votre SI et vos prestataires en regroupant de micro-outils indépendants au sein de Stan. <strong>Moins d’interlocuteurs différents, moins de problèmes de synchronisation des mises à jour !</strong></p>
        </template>
      </TabbarComponent>
      <ButtonComponent href="/#contact" text="Prendre rendez-vous pour une démonstration" class="my-8 w-3/4"/>
    </section>
    <section class="bg-blue">
      <SectionTitleComponent title="cas d'usage" shadow="cas d'usage" class="mb-8 px-8" id="cas_usage"/>
      <SliderComponent class="bg-white">
        <template #0>
          <h2 class="px-8 text-2xl font-extrabold pb-6 bg-blue">INDUSTRIALISATION DES SORTIES DE CONTRATS COLLECTIFS : LOI EVIN, ANI ET AUTRES CONTRATS INDIVIDUELS</h2>
          <div class="bg-white p-8 text-blue-dark">
            <h3 class="text-blue-light italic mb-4">Contexte</h3>
            <p>Récupération de données présentes dans d’autres contrats et parcours de mise à jour des données par l’utilisateur dans un parcours 100% numérique, finissant par la signature électronique de son contrat.</p>
            <h3 class="text-blue-light text-lg font-bold italic mt-6 mb-4">Problématique client</h3>
            <p>Maximiser le nombre de souscription à la garantie Evin lors du passage à la retraite des assurés.</p>
            <h3 class="text-red text-lg font-bold italic mt-6 mb-4">La solution Stan</h3>
            <p>Un parcours alimenté directement par les flux DSN, utilisant les données déjà présentes pour gérer automatiquement les affiliations.</p>
            <h3 class="text-red text-lg font-bold italic mt-6 mb-4">Résultat</h3>
            <p>Un nombre d’affiliations en hausse, un temps d’affiliation de 4 minutes, aucune intervention humaine du lancement de la campagne à la mise en gestion.</p>
          </div>
        </template>
        <template #1>
          <h2 class="px-8 text-2xl font-extrabold pb-6 bg-blue">SOUSCRIPTION DE CONTRATS</h2>
          <div class="bg-white p-8 text-blue-dark">
            <h3 class="text-blue-light italic mb-4">Contexte</h3>
            <p>En tant que mutuelle ou assurance, vous devez proposer une contractualisation complètement intégré au parcours clients déjà existants.</p>
            <h3 class="text-blue-light text-lg font-bold italic mt-6 mb-4">Problématique client</h3>
            <p>Les commerciaux ont déjà beaucoup d’outils, CRM, OAV et extranet. Cela peut rendre compliquées les interactions clientes multi-canaux pour les commerciaux comme pour les clients. Malgré une refonte des espaces utilisateurs, les assurés passent encore trop de temps à renseigner des informations personnelles.</p>
            <h3 class="text-red text-lg font-bold italic mt-6 mb-4">La solution Stan</h3>
            <p>Stan vient augmenter vos outils déjà existants : déclencher un parcours d’affiliation depuis une fiche CRM ou basculer un visiteur de l’extranet vers la solution d’affiliation de manière transparente. Stan va chercher la donnée en interne, en externe (et bientôt l’anticiper) pour remplir le plus de champs possibles à la place de l’utilisateur. Stan réintégrera les éléments en gestion pour automatiser la création des contrats et les affiliations.</p>
            <h3 class="text-red text-lg font-bold italic mt-6 mb-4">Résultat</h3>
            <p>Le client et le commercial n’ont pas à apprendre de nouveaux outils, ce qui leur permet de se concentrer sur leurs campagnes ou leur parcours. Tous les résultats sont suivis dans les logiciels de gestion et de suivi client, permettant un suivi simplifié. Les souscriptions de contrats deviennent plus fréquentes car les clients n’ont plus besoin de renseigner une multitude d’informations. Les coûts  de mise en gestion et  d’affiliations diminuent afin de regagner de la marge sur cette activité.</p>
          </div>
        </template>
        <template #2>
          <h2 class="px-8 text-2xl font-extrabold pb-6 bg-blue">AUTOMATISATION DES AFFILIATIONS ET  DES DISPENSES D’AFFILIATION</h2>
          <div class="bg-white p-8 text-blue-dark">
            <h3 class="text-blue-light italic mb-4">Contexte</h3>
            <p>Adhésion d’un nouveau client entreprise et/ou changement de garanties lors d’un renouvellement.</p>
            <h3 class="text-blue-light text-lg font-bold italic mt-6 mb-4">Problématique client</h3>
            <p>Une affiliation peut être un casse-tête pour un RH et est démultipliée par le nombre de salariés. Cette procédure prend énormément de temps et de papier, provoquant parfois une peur de changer d’opérateur. Le RH doit s’assurer que tous les salariés reçoivent la documentation légale (notices, DUE, grilles de garanties) et récolte les émargements de remise en cas de contrat URSSAF. Il doit également communiquer sur les garanties facultatives complémentaires que pourront souscrire les salariés.</p>
            <h3 class="text-red text-lg font-bold italic mt-6 mb-4">La solution Stan</h3>
            <p>Grâce à Stan, le seul travail du RH est de transmettre les adresses e-mail de ses collaborateurs lors de l’inscription. Chaque personne se voit proposer un parcours d’affiliation clair, intuitif et 100% en ligne. Le salarié pourra choisir ses options ou déposer ses justificatifs en cas de dispense d’affiliation.</p>
            <h3 class="text-red text-lg font-bold italic mt-6 mb-4">Résultat</h3>
            <p>La nouvelle affiliation a pris 3h à la nouvelle entreprise cliente, la décidant à finalement changer d’opérateur. Pour les salariés, leur affiliation, ou leur dispense, leur a pris 5 minutes depuis leur ordinateur ou leur module. Le résultat de la campagne est intégré dans le logiciel de gestion, le CRM et la GED de la mutuelle de manière automatique.</p>
          </div>
        </template>
        <template #3>
          <h2 class="px-8 text-2xl font-extrabold pb-6 bg-blue">DÉTECTION D'ANOMALIES AVEC REMÉDIATION AUTOMATIQUE</h2>
          <div class="bg-white p-8 text-blue-dark">
            <h3 class="text-blue-light text-lg font-bold italic mt-6 mb-4">Problématique client</h3>
            <p>Repérer les cas de non-conformité des entreprises pour la protection sociale de leurs employés.</p>
            <h3 class="text-red text-lg font-bold italic mt-6 mb-4">La solution Stan</h3>
            <p>Une intelligence artificielle, entraînée sur des milliers d’entreprises, détecte les anomalies dans le portefeuille du client, recommande une offre qui respecte les minimas sociaux et déclenche une souscription couplée à des parcours d’affiliations pour les employés.</p>
            <h3 class="text-red text-lg font-bold italic mt-6 mb-4">Résultat</h3>
            <p>Une mise en conformité du client avec le respect de son devoir de conseil, une procédure 100% automatisée pour une couverture santé 100% conforme.</p>
          </div>
        </template>
        <template #4>
          <h2 class="px-8 text-2xl font-extrabold pb-6 bg-blue">MIGRATION DE DONNÉES SENSIBLES</h2>
          <div class="bg-white p-8 text-blue-dark">
            <h3 class="text-blue-light text-lg font-bold italic mt-6 mb-4">Problématique client</h3>
            <p>Respecter ses obligations de sécurité lors d’un traitement des données privées de ses employés par un tiers dans un système externe à son SI.</p>
            <h3 class="text-red text-lg font-bold italic mt-6 mb-4">La solution Stan</h3>
            <p>Un hébergement hyper sécurisé dans un environnement labellisé Hébergement de Données de Santé (HDS), avec un chiffrement des données sortantes et de la base de données.</p>
            <h3 class="text-red text-lg font-bold italic mt-6 mb-4">Résultat</h3>
            <p>Validation des obligations de protection des données privées du client, données sécurisées et hébergées en France.</p>
          </div>
        </template>
      </SliderComponent>
    </section>
    <section class="bg-blue flex justify-end items-center pe-8 py-24">
      <a href="#top"><img src="/assets/images/arrow_top.svg" alt="Aller en haut de la page"></a>
    </section>
  </div>
</template>
<script setup lang="ts">
import SectionTitleComponent from './SectionTitleComponent.vue' 
import OfferBlockComponent from './OfferBlockComponent.vue'
import TabbarComponent from './TabbarComponent.vue'
import ButtonComponent from './ButtonComponent.vue'
import SliderComponent from './SliderComponent.vue'

import auditUrl from '../../assets/images/audit.svg'
import pocUrl from '../../assets/images/poc.svg'
import industrialisationUrl from '../../assets/images/industrialisation.svg'

const tabs = {
  audit: [{
    id: "qui",
    label: 'Pour qui ?'
  }, {
      id: 'accompagnement',
      label: 'Notre accompagnement'
    }, {
      id: 'livrable',
      label: 'Livrable'
    }, {
    id: 'quoi',
    label: 'Pour quoi faire ?'
    }],
  poc: [{
    id: "qui",
    label: 'Pour qui ?'
  }, {
      id: 'accompagnement',
      label: 'Notre accompagnement'
    }, {
      id: 'livrable',
      label: 'Livrable'
    }, {
    id: 'quoi',
    label: 'Pour quoi faire ?'
  }],
  industrialisation: [{
    id: "qui",
    label: 'Pour qui ?'
  }, {
      id: 'accompagnement',
      label: 'Notre accompagnement'
    }, {
      id: 'livrable',
      label: 'Livrable'
    }, {
    id: 'quoi',
    label: 'Pour quoi faire ?'
  }]
}
</script>
<style scoped>
.advantages {
  background-image: url(/assets/images/line_link.svg);
  background-repeat: no-repeat;
  background-position-y: bottom;
  background-size: 102%;
  padding-bottom: 2.5rem;
}

ul.arrowed > li {
  text-indent: -1.25rem;
  margin-bottom: 1rem;
}
ul.arrowed > li > p {
  text-indent: 0;
  display: inline;
}
ul.arrowed > li > p:last-child {
  display: inline-block;
  margin-top: 1rem;
}

ul.arrowed > li::before {
  content: "→ ";
  font-size: 1.25rem;
  font-weight: 600;
  color: rgb(var(--blue-dark));
  position: relative;
  left: -.5rem;
}
</style>
