import { Star, ThumbsUp } from "lucide-react";
import Image from "next/image";
import React from "react";
import { BsHandThumbsUp } from "react-icons/bs";
const StarRating = ({ rating }: any) => (
  <div className="flex gap-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        size={18}
        className={
          star <= rating
            ? "fill-yellow-400 text-yellow-400"
            : "fill-gray-200 text-gray-200"
        }
      />
    ))}
  </div>
);
const ReviewList = ({ reviews }: any) => {
  return (
    <div className="space-y-4 sm:space-y-6">
      {reviews.map((review: any) => (
        <div
          key={review.id}
          className="bg-white rounded-lg shadow-sm p-4 sm:p-6"
        >
          {/* Review Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-0 mb-3 sm:mb-4">
            <div className="flex items-start gap-2 sm:gap-3">
              <div className="group w-10 h-10 sm:w-12 sm:h-12 overflow-hidden rounded-full">
                <Image
                  width={48}
                  height={48}
                  src={review.avatar}
                  alt="avatar"
                  className="w-full h-full object-cover scale-150"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold text-sm sm:text-base text-gray-800">
                  {review.name}
                </h3>

                <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                  {review.verified && (
                    <span className="bg-green-100 text-[#2D5016] text-[11px] sm:text-xs px-1.5 py-0.5 rounded-full whitespace-nowrap">
                      ✓ Verified Purchase
                    </span>
                  )}
                  <p className="text-[11px] sm:text-sm text-gray-500">
                    {review.date}
                  </p>
                </div>
              </div>
            </div>

            {/* Rating - moves below name on small */}
            <div className="sm:mt-0 mt-1">
              <StarRating rating={review.rating} />
            </div>
          </div>

          {/* Review Images */}
          {review.images && (
            <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
              {review.images.map((img: any, idx: any) => (
                <img
                  key={idx}
                  src={img}
                  alt="Review"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg"
                />
              ))}
            </div>
          )}

          {/* Review Comment */}
          <p className="text-gray-700  p-4 rounded-lg  transition border-[#D9D9D9] border text-xs sm:text-sm leading-relaxed mb-3 ">
            {review.comment}
          </p>

          {/* Helpful Buttons */}
          <div className="flex items-center space-x-4 ml-3 mb-2  text-sm">
            <button className="flex items-center space-x-1 text-[#2D5016] hover:text-[#3a800b] transition">
              <BsHandThumbsUp className="w-6 h-6" />
              <span>Helpful ({review.helpful})</span>
            </button>
            <button className="flex items-center space-x-1 text-[#2D5016] hover:text-[#3a800b] transition">
              <BsHandThumbsUp className="w-6 h-6 -scale-y-100" />
              <span>Not Helpful ({review.notHelpful})</span>
            </button>
          </div>

          {/* <div className="flex items-center gap-4 pl-3 mb-4">
            <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800">
              <ThumbsUp size={16} />
              <span>Helpful ({review.helpful})</span>
            </button>
            <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800">
              <ThumbsUp size={16} className="rotate-180" />
              <span>Not Helpful ({review.notHelpful})</span>
            </button>
          </div> */}

          {/* Seller Reply */}
          {review.reply && (
            <div className="ml-6 sm:ml-12 pl-4 sm:pl-6 border-l-4 border-green-200 bg-green-50 p-3 sm:p-4 rounded-lg">
              <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                <span className="font-semibold text-gray-800 text-xs sm:text-sm">
                  Reply from {review.reply.from}
                </span>
                <span className="text-[11px] sm:text-sm text-gray-500">
                  ({review.reply.date})
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                {review.reply.message}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>

    // <div className="space-y-6">
    //   {reviews.map((review: any) => (
    //     <div key={review.id} className="bg-white rounded-lg shadow-sm p-6">
    //       {/* Review Header */}
    //       <div className="flex items-start justify-between mb-4">
    //         <div className="flex gap-2">
    //           <div className="group w-12 h-12 overflow-hidden rounded-full">
    //             <Image
    //               width={40}
    //               height={40}
    //               src={review.avatar}
    //               alt={"avatar"}
    //               className="w-full h-full object-cover scale-150"
    //             />
    //           </div>
    //           <div className="flex flex-col">
    //             <h3 className="font-semibold text-gray-800">{review.name}</h3>

    //             <div className="flex">
    //               {review.verified && (
    //                 <span className="bg-green-100 text-[#2D5016] text-sm px-1 py-0.2 rounded-full">
    //                   ✓ Verified Purchase
    //                 </span>
    //               )}
    //               <p className="text-sm pl-2 text-gray-500">{review.date}</p>
    //             </div>
    //           </div>
    //         </div>

    //         <StarRating rating={review.rating} />
    //       </div>

    //       {/* Review Images */}
    //       {review.images && (
    //         <div className="flex gap-2 mb-4">
    //           {review.images.map((img: any, idx: any) => (
    //             <img
    //               key={idx}
    //               src={img}
    //               alt="Review"
    //               className="w-20 h-20 object-cover rounded-lg"
    //             />
    //           ))}
    //         </div>
    //       )}

    //       {/* Review Comment */}
    //       <p className="text-gray-700 text-sm leading-relaxed mb-4">
    //         {review.comment}
    //       </p>

    //       {/* Helpful Buttons */}
    // <div className="flex items-center gap-4 mb-4">
    //   <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800">
    //     <ThumbsUp size={16} />
    //     <span>Helpful ({review.helpful})</span>
    //   </button>
    //   <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800">
    //     <ThumbsUp size={16} className="rotate-180" />
    //     <span>Not Helpful ({review.notHelpful})</span>
    //   </button>
    // </div>

    //       {/* Reply from Seller */}
    //       {review.reply && (
    //         <div className="ml-12 pl-6 border-l-4 border-green-200 bg-green-50 p-4 rounded-lg">
    //           <div className="flex items-center gap-2 mb-2">
    //             <span className="font-semibold text-gray-800">
    //               Reply from {review.reply.from}
    //             </span>
    //             <span className="text-sm text-gray-500">
    //               ( {review.reply.date} )
    //             </span>
    //           </div>
    //           <p className="text-sm text-gray-700 leading-relaxed">
    //             {review.reply.message}
    //           </p>
    //         </div>
    //       )}
    //     </div>
    //   ))}
    // </div>
  );
};

export default ReviewList;
