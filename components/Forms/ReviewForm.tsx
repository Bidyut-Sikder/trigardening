import React, { useState } from "react";
import { Upload, Star } from "lucide-react";

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [review, setReview] = useState("");
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleImageUpload = (e: any) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file as Blob));
    // setUploadedImages([...uploadedImages, ...imageUrls]);
  };

  const handleSubmit = () => {
    console.log({
      rating,
      review,
      images: uploadedImages,
    });
    alert("Review submitted successfully!");
  };

  const handleCancel = () => {
    setRating(0);
    setReview("");
    setUploadedImages([]);
  };

  return (
<div className="w-75 md:w-full lg:w-full  max-w-sm mx-auto p-4 sm:p-6 lg:p-8 bg-[#F3F3F3] rounded-2xl">
      {/* Header */}
      <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
        Write Your Review
      </h1>

      <hr className="border-gray-200 mb-6" />

      {/* Product Info */}
      <div className="flex flex-col sm:flex-row gap-6 mb-5">
        <div className="w-28 h-28 sm:w-32 sm:h-32 bg-gray-100 rounded-2xl overflow-hidden shrink-0">
          <img src="/reviewimg.png" alt="Product" className="w-full h-full object-cover" />
        </div>

        <div className="flex-1">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
            Rooting Hormone Powder
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-orange-500">
            ৳ 100-350
          </p>
        </div>
      </div>

      {/* Rating Section */}
      <div className="mb-6">
        <p className="text-center text-gray-700 font-medium mb-2">
          Please Rate This Product
        </p>

        <div className="flex justify-center gap-2 md:gap-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              className="transition-transform hover:scale-110"
            >
              <Star
                size={35}
                className={
                  star <= (hoverRating || rating)
                    ? "fill-orange-400 text-orange-400"
                    : "fill-none text-orange-400"
                }
                strokeWidth={2}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Review Text Area */}
      <div className="mb-5">
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Describe your experience (optional)"
          className="w-full h-28 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none resize-none text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* Image Upload */}
      <div className="mb-6">
        <label
          htmlFor="image-upload"
          className="block border-2 border-dashed border-gray-300 rounded-xl p-6 text-center cursor-pointer hover:border-orange-400 transition-colors"
        >
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center">
              <Upload size={20} className="text-white" />
            </div>
            <p className="text-gray-600 text-sm md:text-base">
              Click To Upload or drag and drop
            </p>
          </div>

          <input
            id="image-upload"
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            className="hidden"
          />
        </label>

        {uploadedImages.length > 0 && (
          <div className="mt-4 flex gap-3 flex-wrap">
            {uploadedImages.map((img, idx) => (
              <div key={idx} className="relative">
                <img
                  src={img}
                  alt={`Upload ${idx + 1}`}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg"
                />
                <button
                  onClick={() =>
                    setUploadedImages(uploadedImages.filter((_, i) => i !== idx))
                  }
                  className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={handleCancel}
          className="py-3 md:py-4 bg-[#7A9B57] text-white rounded-xl font-semibold text-base md:text-lg hover:bg-[#6B8A4A] transition-colors"
        >
          Cancel
        </button>

        <button
          onClick={handleSubmit}
          className="py-3 md:py-4 bg-[#2D5016] text-white rounded-xl font-semibold text-base md:text-lg hover:bg-[#1f3810] transition-colors"
        >
          Submit
        </button>
      </div>
    </div>




    // <div className="z-120 w-sm h-50 md:w-md md:h-140">
    //   {/* Header */}

    //   <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
    //     Write Your Review
    //   </h1>

    //   <hr className="border-gray-200 mb-4" />

    //   {/* Product Info */}
    //   <div className="flex gap-6 mb-8">
    //     {/* Product Image */}
    //     <div className="w-30 h-30 bg-gray-100 rounded-2xl overflow-hidden shrink-0">
    //       <img
    //         src="https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?w=400&q=80"
    //         alt="Product"
    //         className="w-full h-full object-cover"
    //       />
    //     </div>

    //     {/* Product Details */}
    //     <div className="flex-1">
    //       <h2 className="text-2xl font-bold text-gray-800 mb-3">
    //         Rooting Hormone Powder
    //       </h2>
    //       <p className="text-3xl font-bold text-orange-500">৳ 100-350</p>
    //     </div>
    //   </div>

    //   {/* Rating Section */}
    //   <div className="mb-8">
    //     <p className="text-center text-gray-700 font-medium mb-4">
    //       Please Rate This Product
    //     </p>
    //     <div className="flex justify-center gap-3">
    //       {[1, 2, 3, 4, 5].map((star) => (
    //         <button
    //           key={star}
    //           onClick={() => setRating(star)}
    //           onMouseEnter={() => setHoverRating(star)}
    //           onMouseLeave={() => setHoverRating(0)}
    //           className="transition-transform hover:scale-110"
    //         >
    //           <Star
    //             size={40}
    //             className={`${
    //               star <= (hoverRating || rating)
    //                 ? "fill-orange-400 text-orange-400"
    //                 : "fill-none text-orange-400"
    //             } transition-colors`}
    //             strokeWidth={2}
    //           />
    //         </button>
    //       ))}
    //     </div>
    //   </div>

    //   {/* Review Text Area */}
    //   <div className="mb-4">
    //     <textarea
    //       value={review}
    //       onChange={(e) => setReview(e.target.value)}
    //       placeholder="Describe your experience (optional)"
    //       className="w-full h-20 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none resize-none text-gray-700 placeholder-gray-400"
    //     />
    //   </div>

    //   {/* Image Upload */}
    //   <div className="mb-6">
    //     <label
    //       htmlFor="image-upload"
    //       className="block border-2 border-dashed border-gray-300 rounded-xl p-8 text-center cursor-pointer hover:border-orange-400 transition-colors"
    //     >
    //       <div className="flex flex-col items-center gap-3">
    //         <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center">
    //           <Upload size={24} className="text-white" />
    //         </div>
    //         <p className="text-gray-600">Click To Upload or drag and drop</p>
    //       </div>
    //       <input
    //         id="image-upload"
    //         type="file"
    //         accept="image/*"
    //         multiple
    //         onChange={handleImageUpload}
    //         className="hidden"
    //       />
    //     </label>

    //     {/* Uploaded Images Preview */}
    //     {uploadedImages.length > 0 && (
    //       <div className="mt-4 flex gap-3 flex-wrap">
    //         {uploadedImages.map((img, idx) => (
    //           <div key={idx} className="relative">
    //             <img
    //               src={img}
    //               alt={`Upload ${idx + 1}`}
    //               className="w-24 h-24 object-cover rounded-lg"
    //             />
    //             <button
    //               onClick={() => {
    //                 setUploadedImages(
    //                   uploadedImages.filter((_, i) => i !== idx)
    //                 );
    //               }}
    //               className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm hover:bg-red-600"
    //             >
    //               ×
    //             </button>
    //           </div>
    //         ))}
    //       </div>
    //     )}
    //   </div>

    //   {/* Action Buttons */}
    //   <div className="grid grid-cols-2 gap-4">
    //     <button
    //       onClick={handleCancel}
    //       className="py-4 bg-[#7A9B57] text-white rounded-xl font-semibold text-lg hover:bg-[#6B8A4A] transition-colors"
    //     >
    //       Cancel
    //     </button>
    //     <button
    //       onClick={handleSubmit}
    //       className="py-4 bg-[#2D5016] text-white rounded-xl font-semibold text-lg hover:bg-[#1f3810] transition-colors"
    //     >
    //       Submit
    //     </button>
    //   </div>
    // </div>
  );
};

export default ReviewForm;
