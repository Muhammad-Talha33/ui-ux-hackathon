import React from "react";

export default function Featured() {
  return (
    <div className="text-black w-full my-20">
      <h3 className="font-semibold mx-28 text-[23px]">Featured</h3>

      <div className="h-[700px] flex justify-center items-center">
        <img src="/images/featured.png" alt="" className="mt-5" />
      </div>

      <div className="text-center text-black my-10">
        <h1 className="text-[54px] font-medium">STEP INTO WHAT FEELS GOOD</h1>
        <p className="text-[15px] my-4">
          Cause everyone should know the feeling of running in that perfect
          pair
        </p>
      </div>

      <div className="flex justify-center items-center gap-4">
        <button className="text-white bg-black b p-3">Find Your Shoe</button>
        
      </div>
    </div>
  );
}
