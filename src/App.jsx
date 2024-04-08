import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

const App = () => {

  return (
    <>
      <>
        <Navbar />
        <HeroSection />

               {/* Bootcamp section */}

        <div className="bg-gray-800 flex flex-row px-8 py-8">
          <div className="px-8 text-center flex flex-col justify-center items-center">
            <h1 className="text-blue-300 mb-6 text-3xl font-bold">Bootcomp</h1>
            <p className="text-white text-center  leading-relaxed mb-6">Notre bootcamp est un programme de formation intensif et dynamique en petit groupe qui dure quelques semaines et allie théorie et pratique pour acquérir des compétences
              en automatisation de tests logiciels. Pour faire simple, c’est la version concentrée d’une formation qui aurait pu s’étaler sur plusieurs mois.
            </p>
            <button className="text-white border border-blue-400 rounded px-6 py-1">En savoir plus</button>
          </div>
          <div className="px-8 py-8">
            <img src="https://s3-alpha-sig.figma.com/img/8d1d/4038/4c41b4deaea49ca05da80062e2ddebdf?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kdC5f8NuKmG2ksi0Om4ZatTmWs5L9iTGFhP0iNZco0YZim4VvaRRTK4wvd1QzEhAvuOtXqp3i-myVWAAVVlOHOPT8eNRyVO2AyFvvlNqieXNi0ngFyz-Jgcl11SPxx7qtKxuD-3GKoH-m1z1QHyABhwM5a8q0Fy~uVAcKZToYoGXpf6XRV48Addn4s0gTdQXOQtXDVDAu9zhn1vWVNI07B2WfCxEqrAof4A5ky-MGbUjf9CU1HPa0oLIZRpKd2fZmZv7Tx9e0rGfukRVZUlwashjGgYGd-X3RGS8c~v6k7eXvgB5uxYc~sfJJZmimj-sGIvuFfR8ZoiHk~KsUB1l7Q__" alt="#" />
          </div>
        </div>
       {/* Bootcamp section */}



           {/* Formation courte section */}

           <div className="bg-gray-700 flex flex-row px-8 py-8">
           <div className="px-8 py-8">
            <img src="https://s3-alpha-sig.figma.com/img/8d1d/4038/4c41b4deaea49ca05da80062e2ddebdf?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kdC5f8NuKmG2ksi0Om4ZatTmWs5L9iTGFhP0iNZco0YZim4VvaRRTK4wvd1QzEhAvuOtXqp3i-myVWAAVVlOHOPT8eNRyVO2AyFvvlNqieXNi0ngFyz-Jgcl11SPxx7qtKxuD-3GKoH-m1z1QHyABhwM5a8q0Fy~uVAcKZToYoGXpf6XRV48Addn4s0gTdQXOQtXDVDAu9zhn1vWVNI07B2WfCxEqrAof4A5ky-MGbUjf9CU1HPa0oLIZRpKd2fZmZv7Tx9e0rGfukRVZUlwashjGgYGd-X3RGS8c~v6k7eXvgB5uxYc~sfJJZmimj-sGIvuFfR8ZoiHk~KsUB1l7Q__" alt="#" />
          </div>
          <div className="px-8 text-center flex flex-col justify-center items-center">
            <h1 className="text-blue-300 mb-6 text-3xl font-bold">Formation courte</h1>
            <p className="text-white text-center  leading-relaxed mb-6">Nos formations professionnelles courtes sont souvent des formations intensives, d'une durée de quelques jours. Elles ont pour objectif de vous former rapidement sur un sujet précis et d'acquérir des compétences spécifiques sur les tests UI, API, performances ...
            </p>
            <button className="text-white border border-blue-400 rounded px-6 py-1">En savoir plus</button>
          </div>
          
        </div>
       {/* Formation courte section */}

         {/* Mix-learning section */}

         <div className="bg-gray-800 flex flex-row px-8 py-8">
          <div className="px-8 text-center flex flex-col justify-center items-center">
            <h1 className="text-blue-300 mb-6 text-3xl font-bold">Mix-learning</h1>
            <p className="text-white text-center  leading-relaxed mb-6">Le mix-learning est un dispositif 
            pédagogique qui s'adresse à tous les publics, notamment ceux qui accèdent difficilement à la formation en présentiel. 
            Chez ATA nous avons mis en place ce dispositif pour vous permettre d'acquérir des compétences en automatisation de tests à votre 
            rythme tout en étant encadré par une équipe pédagogique s'assurant du bon déroulement de votre formation.
            </p>
            <button className="text-white border border-blue-400 rounded px-6 py-1">En savoir plus</button>
          </div>
          <div className="px-8 py-8">
            <img src="https://s3-alpha-sig.figma.com/img/8d1d/4038/4c41b4deaea49ca05da80062e2ddebdf?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kdC5f8NuKmG2ksi0Om4ZatTmWs5L9iTGFhP0iNZco0YZim4VvaRRTK4wvd1QzEhAvuOtXqp3i-myVWAAVVlOHOPT8eNRyVO2AyFvvlNqieXNi0ngFyz-Jgcl11SPxx7qtKxuD-3GKoH-m1z1QHyABhwM5a8q0Fy~uVAcKZToYoGXpf6XRV48Addn4s0gTdQXOQtXDVDAu9zhn1vWVNI07B2WfCxEqrAof4A5ky-MGbUjf9CU1HPa0oLIZRpKd2fZmZv7Tx9e0rGfukRVZUlwashjGgYGd-X3RGS8c~v6k7eXvgB5uxYc~sfJJZmimj-sGIvuFfR8ZoiHk~KsUB1l7Q__" alt="#" />
          </div>
        </div>
       {/* Mix-learning section */}


        {/* Reconversion professionnelle section */}

        <div className="bg-gray-700 flex flex-row px-8 py-8">
           <div className="px-8 py-8">
            <img src="https://s3-alpha-sig.figma.com/img/8d1d/4038/4c41b4deaea49ca05da80062e2ddebdf?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kdC5f8NuKmG2ksi0Om4ZatTmWs5L9iTGFhP0iNZco0YZim4VvaRRTK4wvd1QzEhAvuOtXqp3i-myVWAAVVlOHOPT8eNRyVO2AyFvvlNqieXNi0ngFyz-Jgcl11SPxx7qtKxuD-3GKoH-m1z1QHyABhwM5a8q0Fy~uVAcKZToYoGXpf6XRV48Addn4s0gTdQXOQtXDVDAu9zhn1vWVNI07B2WfCxEqrAof4A5ky-MGbUjf9CU1HPa0oLIZRpKd2fZmZv7Tx9e0rGfukRVZUlwashjGgYGd-X3RGS8c~v6k7eXvgB5uxYc~sfJJZmimj-sGIvuFfR8ZoiHk~KsUB1l7Q__" alt="#" />
          </div>
          <div className="px-8 text-center flex flex-col justify-center items-center">
            <h1 className="text-blue-300 mb-6 text-3xl font-bold"> Reconversion professionnelle</h1>
            <p className="text-white text-center  leading-relaxed mb-6">Envie de changer de métier et démarrer une nouvelle carrière professionnelle, 
            ATA propose un parcours complet pour commencer de zéro et être opérationnelle pour intégrer
             un nouveau projet dans le domaine de l'automatisation des tests logiciels.
            </p>
            <button className="text-white border border-blue-400 rounded px-6 py-1">En savoir plus</button>
          </div>
          
        </div>
       {/* Reconversion professionnelle */}


        {/* Abonnement (Testflix) section */}

        <div className="bg-gray-800 flex flex-row px-8 py-8">
          <div className="px-8 text-center flex flex-col justify-center items-center">
            <h1 className="text-blue-300 mb-6 text-3xl font-bold">Abonnement (Testflix)</h1>
            <p className="text-white text-center  leading-relaxed mb-6">Abonnement (Testflix)
Quand vous le souhaitez, où que vous soyez et à votre rythme, en souscrivant à notre abonnement vous avez accès à l'ensemble de notre plateforme de cours en e-learning et à plein d'options ....
            </p>
            <button className="text-white border border-blue-400 rounded px-6 py-1">En savoir plus</button>
          </div>
          <div className="px-8 py-8">
            <img src="https://s3-alpha-sig.figma.com/img/8d1d/4038/4c41b4deaea49ca05da80062e2ddebdf?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kdC5f8NuKmG2ksi0Om4ZatTmWs5L9iTGFhP0iNZco0YZim4VvaRRTK4wvd1QzEhAvuOtXqp3i-myVWAAVVlOHOPT8eNRyVO2AyFvvlNqieXNi0ngFyz-Jgcl11SPxx7qtKxuD-3GKoH-m1z1QHyABhwM5a8q0Fy~uVAcKZToYoGXpf6XRV48Addn4s0gTdQXOQtXDVDAu9zhn1vWVNI07B2WfCxEqrAof4A5ky-MGbUjf9CU1HPa0oLIZRpKd2fZmZv7Tx9e0rGfukRVZUlwashjGgYGd-X3RGS8c~v6k7eXvgB5uxYc~sfJJZmimj-sGIvuFfR8ZoiHk~KsUB1l7Q__" alt="#" />
          </div>
        </div>
       {/* Mix-learning section */}


      </>



    </>
  )
}

export default App;
