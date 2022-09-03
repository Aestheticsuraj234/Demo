import React from 'react'

const Profile = () => {
  return (
    <div><section className="text-black dark:text-white bg-[#F7F6DC] dark:bg-[#112B3C] body-font">
    <div className="container mx-auto flex px-5 py-12 rounded-full items-center justify-center flex-col">
    <div  className='flex  border-gray-600  mb-7 items-center justify-center gap-8'></div>
      <img className="w-[24%]  relative h-55 object-cover rounded-full" alt="hero" src="https://www.artnews.com/wp-content/uploads/2021/08/BAYC-8746.png?w=631"/>
      <div className="text-center lg:w-2/3 w-full">
        <h1 className="title-font sm:text-4xl text-3xl mb-10 font-medium text-black dark:text-white "><span className='font-bold text-blue-800 dark:text-blue-600'>Hello👋 </span>Bored Ape</h1>
        <p className="mb-6 text-black dark:text-white leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
        <div className="flex justify-center">
          <button className="inline-flex text-black dark:text-black bg-gray-600 dark:bg-white bg-opacity-20 backdrop-blur-lg  drop-shadow-lg border-0 py-2 px-6 focus:outline-none dark:hover:bg-pink-700 dark:hover:text-white rounded text-lg">Instagram</button>
          <button className="ml-4 inline-flex text-black dark:text-black bg-gray-600 dark:bg-white bg-opacity-20 backdrop-blur-lg  drop-shadow-lg border-0 py-2 px-6 focus:outline-none dark:hover:bg-blue-500 dark:hover:text-white rounded text-lg">Twitter</button>
          <button className="ml-4 inline-text-black dark:text-black bg-gray-600 dark:bg-white bg-opacity-20 backdrop-blur-lg  drop-shadow-lg border-0 py-2 px-6 focus:outline-none dark:hover:bg-blue-900 dark:hover:text-white rounded text-lg">Discord</button>
          <button className="ml-4 inline-flextext-black dark:text-black bg-gray-600 dark:bg-white bg-opacity-20 backdrop-blur-lg  drop-shadow-lg border-0 py-2 px-6 focus:outline-none dark:hover:bg-blue-700 dark:hover:text-white rounded text-lg">Linkedin</button>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default Profile