import { Check } from 'lucide-react'
import React from 'react'

const ProgressSteps = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
    {/* Step 1 - Completed */}
    <div className="flex items-center">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white">
        <Check size={20} />
      </div>
      <span className="ml-2 sm:ml-3 font-medium text-gray-800 text-sm sm:text-base">
        Shopping Cart
      </span>
    </div>

    {/* Connector Line 1 */}
    <div className="w-full sm:w-16 h-1 bg-green-600 mt-2 sm:mt-0"></div>

    {/* Step 2 - Active */}
    <div className="flex items-center">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold">
        2
      </div>
      <span className="ml-2 sm:ml-3 font-medium text-gray-800 text-sm sm:text-base">
        Review & Checkout
      </span>
    </div>

    {/* Connector Line 2 */}
    <div className="w-full sm:w-16 h-1 bg-gray-300 mt-2 sm:mt-0"></div>

    {/* Step 3 - Pending */}
    <div className="flex items-center">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 text-gray-600 font-bold">
        3
      </div>
      <span className="ml-2 sm:ml-3 font-medium text-gray-500 text-sm sm:text-base">
        Order Confirmed!
      </span>
    </div>
  </div>
</div>

  )
}

export default ProgressSteps