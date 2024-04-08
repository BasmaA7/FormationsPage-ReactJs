
const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center flex-shrink-0">
          <div>
  <span className="text-blue-300 block">Automation</span>
  <span className="text-blue-300 block">Tester Academy</span>
</div>

          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">L'école</a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Formations</a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Financements</a>
              <button type= 'button'className="border border-blue-400 text-white px-3 rounded-md">Nous Contacter</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;