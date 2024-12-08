import React from "react";
import { BiSolidLike, BiSolidDislike  } from "react-icons/bi";
import { AiFillDislike } from "react-icons/ai";

export default function page() {
  return (
    // <!-- component -->
    <div className="p-8">
      <div className="bg-white p-4 rounded-lg shadow-xl py-8 mt-12">
        <h4 className="text-4xl font-bold text-gray-800 tracking-widest uppercaser text-center">
          FAQ
        </h4>
        <div className="space-y-12 px-2 xl:px-16 mt-12">
          <div className="mt-4 flex">
            <div>
              <div className="flex items-center h-16">
                <span className="text-[16px] text-[#111111] font-bold">
                  Does my card need international purchases enabled?
                </span>
              </div>
              <div className="flex items-center py-2">
                <span className="text-gray-500">
                  Yes, we recommend asking your bank to enable international
                  purchases on your card. You will be notified at checkout{" "}
                  <br /> if international purchases need to be enabled.
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex">
            <div>
              <div className="flex items-center h-16">
                <span className="text-[16px] text-[#111111] font-bold">
                Can I pay for my order with multiple methods?
                </span>
              </div>
              <div className="flex items-center py-2">
                <span className="text-gray-500">
                No, payment for Nike orders can't be split between multiple payment methods.
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex">
            
            <div>
              <div className="flex items-center h-16">
                <span className="text-[16px] text-[#111111] font-bold">
                What payment method is accepted for SNKRS orders?
                </span>
              </div>
              <div className="flex items-center py-2">
                <span className="text-gray-500">
                You can use any accepted credit card to pay for your SNKRS order.
                </span>
              </div>
            </div>
          </div>

        

          <div className="mt-4 flex">
            
            <div>
              <div className="flex items-center h-16">
                <span className="text-[16px] text-[#111111] font-bold">
                Why don't I see Apple Pay as an option?
                </span>
              </div>
              <div className="flex items-center py-2">
                <span className="text-gray-500">
                To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com.
                </span>
              </div>
            </div>
          </div>

        

          <div className="mt-4 flex">
            
            <div>
              <div className="flex items-center h-16">
                <span className="text-[15px] text-[#111111] font-bold">
                Was this answer helpful?
                </span>
              </div>
              <div className="flex items-center  gap-2 py-2">
                <span className="text-black">
                <BiSolidLike className="text-2xl"/>
                
                </span>
                <span className="text-black">
              
                <AiFillDislike   className="text-2xl"/>
                </span>
              </div>
            </div>
          </div>

                <div className="flex flex-col ">
                <p className="text-[#757575]">RELATED</p>
                
                <a href="" className="my-2">
                    <span className="text-[#111111] text-[16px]">
                    - WHAT ARE NIKE'S DELIVERY OPTIONS?
                    </span>
                </a>
                <a href="" className="my-2">
                    <span className="text-[#111111] text-[16px]">
                    - HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
                    </span>
                </a>

                </div>
        
        

        </div>
      </div>
    </div>
  );
}
