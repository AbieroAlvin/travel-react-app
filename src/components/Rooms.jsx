

const Rooms = () => {
  return (
    <div className="max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4">
        <div className="lg:top-20 relative lg:col-span-1 col-span-2">
            <h3 className="text-2xl font-bold">Fine Interior Rooms</h3>
            <p className="pt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ab, explicabo assumenda fugit dignissimos natus?</p>
        </div>

        <div className="grid grid-cols-2 col-span-2 gap-2">
            <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1602002418082-a4443e081dd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWwlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60" alt="/" />
            <img className="row-span-2 object-cover w-full h-full" src="https://images.unsplash.com/photo-1621293954908-907159247fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsJTIwcm9vbXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60" alt="/" />
            <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1597308011529-f634f4cab827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fGhvdGVsJTIwcm9vbXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60" alt="/" />
        </div>
    </div>
  )
}

export default Rooms