import React from "react";

const RamayanStudyCard = () => {
  return (
    <div className="bg-gray-100 flex justify-center items-center p-10">
      <div className="bg-white shadow-md rounded-lg flex w-full max-w-4xl p-6">
        {/* Left Section */}
        <div className="w-1/2 pr-6">
          <h2 className="text-xl font-bold text-gray-900">Ramayan Study</h2>
          <p className="text-gray-600 text-sm mt-2 leading-relaxed">
            "घर-घर रामायण की स्थापना करने का मेरा उद्देश्य केवल लोगों को अध्ययन के विषय में बौद्धिक जानकारी देना नहीं था। 
            मुख्य उद्देश्य उनकी आध्यात्मिक प्रगति कराना है ताकि वे मोक्ष (अंतिम मुक्ति) प्राप्त कर सकें।"
          </p>
        </div>

        {/* Vertical Divider */}
        <div className="w-px bg-gray-300 mx-6"></div>

        {/* Right Section */}
        <div className="w-1/2 flex justify-between items-center">
          <div className="text-center">
            <p className="text-yellow-500 text-2xl font-bold">7</p>
            <p className="text-gray-600 text-sm mt-1">कंद</p>
          </div>
          <div className="text-center">
            <p className="text-yellow-500 text-2xl font-bold">500</p>
            <p className="text-gray-600 text-sm mt-1">मार्ग</p>
          </div>
          <div className="text-center">
            <p className="text-yellow-500 text-2xl font-bold">24,000</p>
            <p className="text-gray-600 text-sm mt-1">वर्सेज़</p>
          </div>
          <div className="text-center">
            <p className="text-yellow-500 text-2xl font-bold">10,902</p>
            <p className="text-gray-600 text-sm mt-1">चौपाई</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RamayanStudyCard;
