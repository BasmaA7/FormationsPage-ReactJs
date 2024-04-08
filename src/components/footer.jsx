const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
          <div>
  <span className="text-blue-300 block">Automation</span>
  <span className="text-blue-300 block">Tester Academy</span>
</div>            <div className="flex mt-8 space-x-6 text-gray-600">
              
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
            <div>

              <nav className="flex flex-col mt-4 space-y-2 text-sm text-white">
                <a className="hover:opacity-75" href> L’école </a>
                <a className="hover:opacity-75" href>Nous contacter </a>
                <a className="hover:opacity-75" href> Egalité professionnelle </a>
                <a className="hover:opacity-75" href> Certificat Qualiopi </a>
                <a className="hover:opacity-75" href> Mentions légales </a>
              </nav>
            </div>


            <div>

              <nav className="flex flex-col mt-4 space-y-2 text-sm text-white">
                <a className="hover:opacity-75" href>Formation b2b </a>
                <a className="hover:opacity-75" href> Formation mix-learning </a>
                <a className="hover:opacity-75" href> Testflix </a>
                <a className="hover:opacity-75" href> Bootcamp </a>
                <a className="hover:opacity-75" href> Reconversion pro </a>
              </nav>
            </div>

            <div>
    <nav className="flex flex-col mt-4 space-y-2 text-sm text-white">
        <div class="flex items-center rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20  bg-blue-400 rounded-full p-2 m-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            <p>Automation Tester Academy 14 rue Beffroy 92 200 Neuilly-sur-Seine</p>
        </div>

        <div class="flex items-center rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10  bg-blue-400 rounded-full p-2 m-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
            </svg>
            <p>Un coup de fil ? 07 82 78 94 4</p>
        </div>
    </nav>
</div>

          </div>
        </div>

      </div>
    </footer>
  );
};
export default Footer;