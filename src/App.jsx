import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

const App = () => {

  return (
    <>
      <>
      <Navbar/>
      <HeroSection/>
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
      </>

     

    </>
  )
}

export default App;
