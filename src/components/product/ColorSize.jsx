"use client"
import React,{useState} from 'react'

const productData = {
  name: "Awesome T-Shirt",
  imageUrl: "/images/awesome-tshirt.jpg",
  sizes: ["XXL", "XS", "S", "M","L", "XL",  "Custom"],
  colors: [
    { name: "Red", colorCode: "#f00" },
    { name: "Blue", colorCode: "#00f" },
    { name: "Green", colorCode: "#0f0" },
    { name: "Purple", colorCode: "#f0f" },
  ],
};


const ColorSize = () => {
    const [selectedSize, setSelectedSize] = React.useState(
      productData.sizes[0]
    );
    const [selectedColor, setSelectedColor] = React.useState(
      productData.colors[0]
    );

  return (
    <div className='pb-5'>
       {/* Size Selection */}
          <div className="mt-5">
            <h2 className="font-semibold ml-3">Size</h2>
            <div className="flex flex-wrap md:flex-nowrap lg:flex-wrap justify-center gap-2 mt-2">
              {productData.sizes.map((size) => (
                <button
                  key={size}
                  className={`border px-3 py-1 rounded-md hover:bg-gray-100 h-11 w-24
                             ${selectedSize === size ? 'bg-gray-200' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div className="mt-5 ml-3">
            <h2 className="font-semibold">Color</h2>
            <div className="flex gap-2 mt-2">
              {productData.colors.map((color) => (
                <button
                  key={color.name}
                  className={`w-6 h-6 rounded-full border 
                             ${selectedColor === color ? 'border-black' : ''}`}
                  style={{ backgroundColor: color.colorCode }}
                  onClick={() => setSelectedColor(color)}
                ></button>
              ))}
            </div>
          </div>
       
    </div>
  )
}

export default ColorSize
