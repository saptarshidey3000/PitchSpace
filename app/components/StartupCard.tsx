// import { formdate } from '@/lib/utils'
// import { EyeIcon } from 'lucide-react'
// import Link from "next/link";
// import Image from "next/image";
// import { Author, Startup } from '@/sanity/types';

// export type StartupTypeCard = Omit<Startup, "author"> & {author?: Author};

// const StartupCard = ({ post }: { post: StartupTypeCard }) => {
//   const {
//     _createdAt,
//     views,
//     author,
//     title,
//     category,
//     _id,
//     image,
//     description
//   } = post;

//   return (
//     <div>
//       <li className='bg-white border-[5px] border-black py-4 px-4 sm:py-6 sm:px-5 rounded-[22px] shadow-200 hover:border-primary transition-all duration-500 hover:shadow-300 hover:bg-primary-100 group'>
        
//         {/* Top row: date + views */}
//         <div className="flex items-center justify-between">
//           <p className="font-medium text-[14px] sm:text-[16px] bg-primary-100 px-3 py-1 sm:px-4 sm:py-2 rounded-full group-hover:bg-white-100">
//             {formdate(_createdAt)}
//           </p>
//           <div className="flex items-center gap-1.5">
//             <EyeIcon className="w-6 h-6 text-primary" />
//             <span className="text-[14px] sm:text-16-medium">{views}</span>
//           </div>
//         </div>

//         {/* Title + author */}
//         <div className="flex flex-col sm:flex-row justify-between mt-4 sm:mt-5 gap-3 sm:gap-5">
//           <div className="flex-1">
//             {/* Title */}
//             <Link href={`/startup/${_id}`}>
//               <h3 className="text-[20px] sm:text-[25px] font-bold line-clamp-1">{title}</h3>
//             </Link>

//             {/* Author row */}
//             <div className="flex items-center justify-between mt-2">
//               {/* Author name */}
//               <Link href={`/user/${author?._id}`}>
//                 <p className="text-[16px] sm:text-[18px] line-clamp-1">{author?.name}</p>
//               </Link>

//               {/* Author image */}
//               <Link href={`/user/${author?._id}`}>
//                 <Image
//                   src="https://placehold.co/48x48"
//                   alt="Author"
//                   width={40}
//                   height={40}
//                   className="sm:w-12 sm:h-12 rounded-full"
//                 />
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Description + Image */}
//         <Link href={`/startup/${_id}`}>
//           <p className='font-normal text-[14px] sm:text-[16px] line-clamp-2 my-3 text-black-100 break-all'>
//             {description}
//           </p>
// <img
//   src={image}
//   alt={title}
//   className='w-full h-[140px] sm:h-[164px] rounded-[10px] object-cover'
// />

//         </Link>

//         {/* Bottom row: category + Details button */}
//         <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-4 sm:mt-5">
//           {/* Category */}
//           <Link href={`/?query=${category?.toLowerCase()}`}>
//             <p className="text-lg sm:text-xl font-black">{category}</p>
//           </Link>

//           {/* Details button */}
//           <Link
//             href={`/startup/${_id}`}
//             className="inline-block bg-black text-white font-semibold px-5 sm:px-6 py-2 rounded-full shadow-md hover:bg-gray-800 hover:shadow-lg transition-colors duration-300"
//           >
//             Details
//           </Link>
//         </div>
//       </li>
//     </div>
//   )
// }

// export default StartupCard
