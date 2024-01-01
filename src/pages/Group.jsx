import React from 'react';
import Navbar from '../includes/Navbar';
import Sidebar from '../includes/Sidebar';

function Group() {
  return (
    <div className='flex bg-gray-100 w-full max-h-screen'>
      <div className='flex bg-gray-100 w-full'>
        <Sidebar />
        <div className="flex flex-col w-full text-gray-800">
          <Navbar />
          <div className='flex w-full h-screen'>
           
                <div class="flex flex-row h-full w-full  ">
                  <div class="flex flex-col p-6 flex-auto h-full overflow-y-auto"> 

                      <div className='flex flex-col items-start h-full mb-6 rounded-xl  bg-white w-full px-4'>
                          divv
                      </div>
                      <div className='flex flex-col items-start h-full mb-6 rounded-xl  bg-white w-full px-4'>
                          divv
                      </div>
                      <div className='flex flex-col items-start h-full mb-6 rounded-xl  bg-white w-full px-4'>
                          divv
                      </div>
                      <div className='flex flex-col items-start h-full mb-6 rounded-xl  bg-white w-full px-4'>
                          divv
                      </div>
                      <div className='flex flex-col items-start h-full mb-6 rounded-xl bg-white w-full px-4'>
                          divv
                      </div>
                      <div className='flex flex-col items-start h-full mb-6 rounded-xl bg-white w-full px-4'>
                          divv
                      </div>
                      <div className='flex flex-col items-start h-full mb-6 rounded-xl  bg-white w-full px-4'>
                          divv
                      </div>
                      <div className='flex flex-col items-start h-full mb-6 rounded-xl  bg-white w-full px-4'>
                          divv
                      </div>
                      <div className='flex flex-col items-start h-full mb-6 rounded-xl  bg-white w-full px-4'>
                          divv
                      </div>
                      <div className='flex flex-col items-start h-full mb-6 rounded-xl  bg-white w-full px-4'>
                          divv
                      </div>
                      <div className='flex flex-col items-start h-full mb-6 rounded-xl  bg-white w-full px-4'>
                          divv
                      </div>
                    

                      <div
                        class="flex flex-row items-center h-16 mb-0 rounded-xl bg-white w-full px-4"
                      >
                        <div>
                          <button
                            class="flex items-center justify-center text-gray-400 hover:text-gray-600"
                          >
                            <svg
                              class="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                              ></path>
                            </svg>
                          </button>
                        </div>
                        <div class="flex-grow ml-4">
                          <div class="relative w-full">
                            <input
                              type="text"
                              class="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                            />
                          </div>
                        </div>
                        <div class="ml-4">
                          <button
                            class="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                          >
                            <span>Send</span>
                            <span class="ml-2">
                              <svg
                                class="w-4 h-4 transform rotate-45 -mt-px"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                ></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>


                  </div>
                </div>

            

          </div>
        </div>
      </div>
    </div>
  )
}

export default Group