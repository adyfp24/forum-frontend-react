import React from 'react';
import Sidebar from '../includes/Sidebar';
import Navbar from '../includes/Navbar';

function Beranda() {
  return (
    <div className='flex bg-gray-100 w-full max-h-screen'>
      <div className="flex bg-gray-100 w-full">
        <Sidebar/>
        <div className="flex flex-col w-full text-gray-800">
          <Navbar />
          <main className="p-6 sm:p-10 space-y-6 overflow-y-auto">
            <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
              <div className="mr-6">
                <h1 className="text-4xl font-semibold mb-2">Dashboard</h1>
                <h2 className="text-gray-600 ml-0.5">Mobile UX/UI Design course</h2>
              </div>
              <div className="flex flex-wrap items-start justify-end -mb-3">
                <button className="inline-flex px-5 py-3 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md mb-3">
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                  Manage dashboard
                </button>
                <button className="inline-flex px-5 py-3 text-white bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 rounded-md ml-6 mb-3">
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Create new dashboard
                </button>
              </div>
            </div>

            {/* ui forum sesuai minat */}

            <section className="flex w-full">
              <div className="bg-white shadow rounded-lg w-full">
                <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
                  <span>Students by average mark</span>
                  <button type="button" className="inline-flex justify-center rounded-md px-1 -mr-1 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-600" id="options-menu" aria-haspopup="true" aria-expanded="true">
                    Descending
                    <svg className="-mr-1 ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                <div className="overflow-y-auto" style={{maxHeight: '24rem'}}>
                  <ul className="p-6 space-y-6">
                    <li className="flex items-center">
                      <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                        <img src="https://randomuser.me/api/portraits/women/82.jpg" alt="Annette Watson profile picture"/>
                      </div>
                      <span className="text-gray-600">Annette Watson</span>
                      <span className="ml-auto font-semibold">9.3</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                        <img src="https://randomuser.me/api/portraits/men/81.jpg" alt="Calvin Steward profile picture"/>
                      </div>
                      <span className="text-gray-600">Calvin Steward</span>
                      <span className="ml-auto font-semibold">8.9</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
                  
            {/* ui all forum */}

            <section className="flex w-full">
              <div className="bg-white shadow rounded-lg w-full">
                <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
                  <span>Students by average mark</span>
                  <button type="button" className="inline-flex justify-center rounded-md px-1 -mr-1 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-600" id="options-menu" aria-haspopup="true" aria-expanded="true">
                    Descending
                    <svg className="-mr-1 ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                <div>
                  <ul className="p-6 space-y-6">
                    <li className="flex items-center">
                      <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                        <img src="https://randomuser.me/api/portraits/women/82.jpg" alt="Annette Watson profile picture"/>
                      </div>
                      <span className="text-gray-600">Annette Watson</span>
                      <span className="ml-auto font-semibold">9.3</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                        <img src="https://randomuser.me/api/portraits/men/81.jpg" alt="Calvin Steward profile picture"/>
                      </div>
                      <span className="text-gray-600">Calvin Steward</span>
                      <span className="ml-auto font-semibold">8.9</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                        <img src="https://randomuser.me/api/portraits/men/80.jpg" alt="Ralph Richards profile picture"/>
                      </div>
                      <span className="text-gray-600">Ralph Richards</span>
                      <span className="ml-auto font-semibold">8.7</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                        <img src="https://randomuser.me/api/portraits/men/79.jpg" alt="Bernard Murphy profile picture"/>
                      </div>
                      <span className="text-gray-600">Bernard Murphy</span>
                      <span className="ml-auto font-semibold">8.2</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                        <img src="https://randomuser.me/api/portraits/women/78.jpg" alt="Arlene Robertson profile picture"/>
                      </div>
                      <span className="text-gray-600">Arlene Robertson</span>
                      <span className="ml-auto font-semibold">8.2</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                        <img src="https://randomuser.me/api/portraits/women/77.jpg" alt="Jane Lane profile picture"/>
                      </div>
                      <span className="text-gray-600">Jane Lane</span>
                      <span className="ml-auto font-semibold">8.1</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                        <img src="https://randomuser.me/api/portraits/men/76.jpg" alt="Pat Mckinney profile picture"/>
                      </div>
                      <span className="text-gray-600">Pat Mckinney</span>
                      <span className="ml-auto font-semibold">7.9</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                        <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Norman Walters profile picture"/>
                      </div>
                      <span className="text-gray-600">Norman Walters</span>
                      <span className="ml-auto font-semibold">7.7</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Beranda