
const Plan = () => {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      {/* Left side */}
      <div className="grid grid-cols-2 grid-rows-6 h-[h-80vh]">
      <img className="row-span-3 object-cover w-full h-full p-2" src="https://images.unsplash.com/photo-1581551395534-8e9e29d90caf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=400&q=60" alt="/" />
      <img className="row-span-2 object-cover w-full h-full p-2" src="https://images.unsplash.com/photo-1526784725085-c69e947bf92e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=400&q=60" alt="/" />
      <img className="row-span-2 object-cover w-full h-full p-2" src="https://images.unsplash.com/photo-1672369491028-f6e458bba9cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60" alt="/" />
      <img className="row-span-3 object-cover w-full h-full p-2" src="https://images.unsplash.com/photo-1583402955903-68dd58b0d463?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=400&q=60" alt="/" />
      <img className="row-span-2 object-cover w-full h-full p-2" src="https://images.unsplash.com/photo-1581551392494-7a15f7752a55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="/" />
    </div>
    {/* right side */}
    <div className="flex flex-col h-full justify-center">
      <h3 className="text-5xl md:text-6xl font-bold">Plan Your Next Trip</h3>
      <p className="text-2xl py-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, fuga.
      </p>
      <p className="pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rem adipisci quia quasi voluptatem totam, mollitia reiciendis corporis, saepe voluptas quod incidunt numquam velit ea asperiores! Maxime odit quasi culpa.</p>
      <div>
        <button className="border-black mr-4 hover:shadow-xl">Learn More</button>
        <button className="bg-black text-white border-black hover:shadow-xl">Book Your Trip</button>
      </div>
    </div>
    </div>
  )
}

export default Plan