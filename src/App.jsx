import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Image1 from '../src/assets/images/image1.png';
import Image2 from '../src/assets/images/image2.png';
import Image3 from '../src/assets/images/image3.jpeg';
import Image4 from '../src/assets/images/image4.png';
import Image5 from '../src/assets/images/image5.png';
import ImageSection from '../src/assets/images/ImageSection.png';
import Footer from "./components/Footer";

const App = () => {

  return (
    
      <>
        <Navbar />
        <HeroSection />

               {/* Bootcamp section */}

               <div class="bg-gray-800 flex flex-col lg:flex-row px-4 py-8">
    <div class="lg:w-1/2 px-4 lg:px-8 text-center flex flex-col justify-center items-center">
        <h1 class="text-blue-300 mb-6 text-3xl font-bold">Bootcamp</h1>
        <p class="text-white text-center leading-relaxed mb-6">Notre bootcamp est un programme de formation intensif et dynamique en petit groupe qui dure quelques semaines et allie théorie et pratique pour acquérir des compétences en automatisation de tests logiciels. Pour faire simple, c’est la version concentrée d’une formation qui aurait pu s’étaler sur plusieurs mois.
        </p>
        <button class="text-white border border-blue-400 rounded px-6 py-1">En savoir plus</button>
    </div>
    <div class="lg:w-1/2 px-4 lg:px-8 py-8">
        <img src={ImageSection} alt="#" class="mx-auto lg:mx-0" />
    </div>
</div>

       {/* Bootcamp section */}



           {/* Formation courte section */}

           <div class="bg-gray-700 flex flex-col lg:flex-row px-4 py-8">
    <div class="lg:w-1/2 px-4 lg:px-8 py-8">
        <img src={ImageSection} alt="#" class="mx-auto lg:mx-0" />
    </div>
    <div class="lg:w-1/2 px-4 lg:px-8 text-center flex flex-col justify-center items-center">
        <h1 class="text-blue-300 mb-6 text-3xl font-bold">Formation courte</h1>
        <p class="text-white text-center leading-relaxed mb-6">Nos formations professionnelles courtes sont souvent des formations intensives, d'une durée de quelques jours. Elles ont pour objectif de vous former rapidement sur un sujet précis et d'acquérir des compétences spécifiques sur les tests UI, API, performances ...
        </p>
        <button class="text-white border border-blue-400 rounded px-6 py-1">En savoir plus</button>
    </div>
</div>

       {/* Formation courte section */}

         {/* Mix-learning section */}

         <div class="bg-gray-800 flex flex-col lg:flex-row px-4 py-8">
    <div class="lg:w-1/2 px-4 lg:px-8 text-center flex flex-col justify-center items-center">
        <h1 class="text-blue-300 mb-6 text-3xl font-bold">Mix-learning</h1>
        <p class="text-white text-center leading-relaxed mb-6">Le mix-learning est un dispositif pédagogique qui s'adresse à tous les publics, notamment ceux qui accèdent difficilement à la formation en présentiel. Chez ATA nous avons mis en place ce dispositif pour vous permettre d'acquérir des compétences en automatisation de tests à votre rythme tout en étant encadré par une équipe pédagogique s'assurant du bon déroulement de votre formation.
        </p>
        <button class="text-white border border-blue-400 rounded px-6 py-1">En savoir plus</button>
    </div>
    <div class="lg:w-1/2 px-4 lg:px-8 py-8">
        <img src={ImageSection} alt="#" class="mx-auto lg:mx-0" />
    </div>
</div>

       {/* Mix-learning section */}


        {/* Reconversion professionnelle section */}

        <div class="bg-gray-700 flex flex-col lg:flex-row px-4 py-8">
    <div class="lg:w-1/2 px-4 lg:px-8 py-8">
        <img src={ImageSection} alt="#" class="mx-auto lg:mx-0" />
    </div>
    <div class="lg:w-1/2 px-4 lg:px-8 text-center flex flex-col justify-center items-center">
        <h1 class="text-blue-300 mb-6 text-3xl font-bold">Reconversion professionnelle</h1>
        <p class="text-white text-center leading-relaxed mb-6">Envie de changer de métier et démarrer une nouvelle carrière professionnelle, ATA propose un parcours complet pour commencer de zéro et être opérationnelle pour intégrer un nouveau projet dans le domaine de l'automatisation des tests logiciels.
        </p>
        <button class="text-white border border-blue-400 rounded px-6 py-1">En savoir plus</button>
    </div>
</div>

       {/* Reconversion professionnelle */}


        {/* Abonnement (Testflix) section */}

        <div class="bg-gray-800 flex flex-col lg:flex-row px-4 py-8">
    <div class="lg:w-1/2 px-4 lg:px-8 text-center flex flex-col justify-center items-center">
        <h1 class="text-blue-300 mb-6 text-3xl font-bold">Abonnement (Testflix)</h1>
        <p class="text-white text-center leading-relaxed mb-6">Quand vous le souhaitez, où que vous soyez et à votre rythme, en souscrivant à notre abonnement vous avez accès à l'ensemble de notre plateforme de cours en e-learning et à plein d'options ....</p>
        <button class="text-white border border-blue-400 rounded px-6 py-1">En savoir plus</button>
    </div>
    <div class="lg:w-1/2 px-4 lg:px-8 py-8">
        <img src={ImageSection} alt="#" class="mx-auto lg:mx-0" />
    </div>
</div>

       {/* Abonnement section */}



       {/* section */}

       <div class="flex flex-col lg:flex-row gap-8 lg:px-20 py-8">
    <img src={Image1} alt="#" class="w-full lg:w-52 h-52" />
    <img src={Image3} alt="#" class="w-full lg:w-52 h-52" />
    <img src={Image2} alt="#" class="w-full lg:w-52 h-52" />
    <img src={Image5} alt="#" class="w-full lg:w-52 h-52" />
    <img src={Image4} alt="#" class="w-full lg:w-52 h-52" />
</div>

       {/* section */}

       <Footer/>

      </>



   
  )
}

export default App;
