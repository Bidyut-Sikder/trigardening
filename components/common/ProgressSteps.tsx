import { Check } from "lucide-react";

const ProgressSteps = ({ step = 1 }: { step: number }) => {
  const getCircleStyle = (index: number) => {
    if (step > index) return "bg-green-600 text-white"; // completed
    if (step === index) return "bg-green-600 text-white"; // active same style as completed
    return "bg-gray-300 text-gray-600"; // pending
  };

  const getTextStyle = (index: number) => {
    if (step > index) return "text-green-700 font-semibold";
    if (step === index) return "text-green-700 font-semibold";
    return "text-gray-500 font-semibold";
  };

  const getConnectorStyle = (index: number) => {
    return step > index ? "bg-green-600" : "bg-gray-300";
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">

        {/* Step 1 */}
        <div className="flex items-center">
          <div className={`flex items-center justify-center w-10 h-10 rounded-full ${getCircleStyle(1)}`}>
            {step > 1 ? <Check size={20} /> : "1"}
          </div>
          <span className={`ml-2 sm:ml-3 text-sm sm:text-base ${getTextStyle(1)}`}>
            Shopping Cart
          </span>
        </div>

        {/* Connector */}
        <div className={`w-full sm:w-16 h-1 ${getConnectorStyle(1)} mt-2 sm:mt-0`} />

        {/* Step 2 */}
        <div className="flex items-center">
          <div className={`flex items-center justify-center w-10 h-10 rounded-full ${getCircleStyle(2)}`}>
            {step > 2 ? <Check size={20} /> : "2"}
          </div>
          <span className={`ml-2 sm:ml-3 text-sm sm:text-base ${getTextStyle(2)}`}>
            Review & Checkout
          </span>
        </div>

        {/* Connector */}
        <div className={`w-full sm:w-16 h-1 ${getConnectorStyle(2)} mt-2 sm:mt-0`} />

        {/* Step 3 */}
        <div className="flex items-center">
          <div className={`flex items-center justify-center w-10 h-10 rounded-full ${getCircleStyle(3)}`}>
            {"3"}
          </div>
          <span className={`ml-2 sm:ml-3 text-sm sm:text-base ${getTextStyle(3)}`}>
            Order Confirmed!
          </span>
        </div>

      </div>
    </div>
  );
};

export default ProgressSteps;

