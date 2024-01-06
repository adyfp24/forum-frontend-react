import React, { useEffect } from 'react';
import Sidebar from '../includes/Sidebar';
import Navbar from '../includes/Navbar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Beranda() {
  const navigate = useNavigate();
  const api_token = localStorage.getItem('api_token');
  useEffect(()=>{
    if (!api_token) {
      navigate('/');
    }
  })

  return (
    <div className='flex bg-gray-100 w-full max-h-screen'>
      <div className="flex bg-gray-100 w-full">
        <Sidebar />
        <div className="flex flex-col w-full text-gray-800">
          <Navbar />
          <main className="p-6 sm:p-10 space-y-6 overflow-y-auto">
            <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
              <div className="mr-6">
                <h1 className="text-3xl font-semibold mb-3">Hai Ady, mari berdiskusi!</h1>
                <h2 className="text-gray-600 ml-0.5">&gt; Forum sesuai minat Anda</h2>
              </div>
            </div>

            {/* ui forum sesuai minat */}

            <section className="flex w-full">
              <button type='submit' className="bg-white shadow rounded-lg w-full hover:drop-shadow-lg">
                <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
                  <span>Bidang Minat UI/UX</span>
                  <div className="inline-flex justify-center rounded-md px-1 -mr-1 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-600" id="options-menu" aria-haspopup="true" aria-expanded="true">
                    Descending
                    <svg className="-mr-1 ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="overflow-y-auto" style={{ maxHeight: '24rem' }}>
                  <ul className="p-6 space-y-6">
                    <li className="flex items-center">
                      <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                        <img src="https://randomuser.me/api/portraits/women/82.jpg" alt="Annette Watson profile picture" />
                      </div>
                      <span className="text-gray-600">Annette Watson</span>
                      <span className="ml-auto font-semibold">9.3</span>
                    </li>
                  </ul>
                </div>
              </button>
            </section>

            <div className="mr-6">
              <h2 className="text-gray-600 ml-0.5">&gt; Semua forum yang tersedia</h2>
            </div>

            {/* ui all forum */}

            <section className="flex flex-col w-full">
              <button className="bg-white shadow rounded-lg w-full mb-6 hover:drop-shadow-lg">
                <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
                  <span>Bidang minat Web Development</span>
                  <div type="button" className="inline-flex justify-center rounded-md px-1 -mr-1 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-600" id="options-menu" aria-haspopup="true" aria-expanded="true">
                    Descending
                    <svg className="-mr-1 ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <ul className="p-6 space-y-6">
                    <li className="flex items-center">
                      <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                        <img src="https://randomuser.me/api/portraits/women/82.jpg" alt="Annette Watson profile picture" />
                      </div>
                      <span className="text-gray-600">Annette Watson</span>
                      <span className="ml-auto font-semibold">9.3</span>
                    </li>
                  </ul>
                </div>
              </button>
              <button className="bg-white shadow rounded-lg w-full mb-6 hover:drop-shadow-lg">
                <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
                  <span>Bidang minat Networking</span>
                  <div type="button" className="inline-flex justify-center rounded-md px-1 -mr-1 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-600" id="options-menu" aria-haspopup="true" aria-expanded="true">
                    Descending
                    <svg className="-mr-1 ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <ul className="p-6 space-y-6">
                    <li className="flex items-center">
                      <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                        <img src="https://randomuser.me/api/portraits/women/82.jpg" alt="Annette Watson profile picture" />
                      </div>
                      <span className="text-gray-600">Annette Watson</span>
                      <span className="ml-auto font-semibold">9.3</span>
                    </li>
                  </ul>
                </div>
              </button>
              <button className="bg-white shadow rounded-lg w-full mb-6 hover:drop-shadow-lg">
                <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
                  <span>Bidang minat Data Scientist</span>
                  <div type="button" className="inline-flex justify-center rounded-md px-1 -mr-1 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-600" id="options-menu" aria-haspopup="true" aria-expanded="true">
                    Descending
                    <svg className="-mr-1 ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <ul className="p-6 space-y-6">
                    <li className="flex items-center">
                      <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                        <img src="https://randomuser.me/api/portraits/women/82.jpg" alt="Annette Watson profile picture" />
                      </div>
                      <span className="text-gray-600">Annette Watson</span>
                      <span className="ml-auto font-semibold">9.3</span>
                    </li>
                  </ul>
                </div>
              </button>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Beranda