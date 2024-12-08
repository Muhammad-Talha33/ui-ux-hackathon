import React from 'react'

export default function Category() {
  return (
    <section className="text-black body-font">
  <div className="container px-[104px] lg:px-52 py-24 mx-auto">
    
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
        <h2 className="font-semibold title-font tracking-widest text-black mb-4 text-sm text-center sm:text-center">Icons</h2>
        <nav className="flex flex-col sm:items-center sm:text-left text-[#757575] text-center items-left -mb-1 space-y-4 ">
          <a>
            Air Force 1
          </a>

          <a>
          Huarache
          </a>

          <a>
          Air Max 90
          </a>

          <a>
          Air Max 95
          </a>
        </nav>
      </div>

      <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
      <h2 className="font-semibold title-font tracking-widest text-black mb-4 text-sm text-center sm:text-center">Shoes</h2>
        <nav className="flex flex-col sm:items-center sm:text-left text-[#757575] text-center items-left -mb-1 space-y-4 ">
          <a>
            All Shoes
          </a>

          <a>
          Custom Shoes
          </a>

          <a>
            Jordan Shoes
          </a>

          <a>
          Running Shoes
          </a>
        </nav>
      </div>
      
      <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
      <h2 className="font-semibold title-font tracking-widest text-black mb-4 text-sm text-center sm:text-center">Clothing</h2>
        <nav className="flex flex-col sm:items-center sm:text-left text-[#757575] text-center items-left -mb-1 space-y-4">
          <a>
          All Clothing
          </a>

          <a>
          Modest Wear
          </a>

          <a>
          Hoodies & Pullovers
          </a>

          <a>
          Shirts & Tops
          </a>
        </nav>
      </div>

      <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
       <h2 className="font-semibold title-font tracking-widest text-black mb-4 text-sm text-center sm:text-center">Kids'</h2>
        <nav className="flex flex-col sm:items-center sm:text-left text-[#757575] text-center items-left -mb-1 space-y-4 ">
          <a>
          Infant & Toddler Shoes
          </a>

          <a>
          Kids' Shoes
          </a>

          <a>
          Kids' Jordan Shoes
          </a>

          <a>
          Kids' Basketball Shoes
          </a>
        </nav>
      </div>
    </div>
    
  </div>
</section>
  )
}
