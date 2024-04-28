// import { useLoaderData } from "react-router-dom";

// const TouristsSpotSection = () => {

//   const spots = useLoaderData();

//     return (
//         <div className="mb-12">
//             <div className="card w-96 bg-base-100 shadow-xl">
//   <figure className="px-10 pt-10">
//     <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
//   </figure>
//   <div className="card-body items-center text-center">
//     <h2 className="card-title">Shoes!:{spots.length}</h2>
//     <p>If a dog chews shoes whose shoes does he choose?</p>
//     <div className="card-actions">
//       <button className="btn btn-primary">Buy Now</button>
//     </div>
//   </div>
// </div>
//         </div>
//     );
// };

// export default TouristsSpotSection;


import { Swiper, SwiperSlide } from 'swiper/react';
import {  useLoaderData } from "react-router-dom";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';


import { FreeMode, Pagination } from 'swiper/modules';

const TouristsSpotSection = () => {
    const spots = useLoaderData();
    

    return (
        <div className='flex items-center justify-center flex-col my-10'>
            <h1 className="text-3xl font-semibold text-center pb-2">Tourists Spots</h1>
            <p className='font-bold text-center pb-10'>Explore some awesome tourists spots with <span className='text-purple-400 text-xl ml-2'>Dream Travello</span></p>
            <Swiper 
            breakpoints={{
                340: {
                    slidesPerView: 1,
                    spaceBetween: 15
                },
                600: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                1040: {
                    slidesPerView: 3,
                    spaceBetween: 15
                },

            }}
      
            freeMode={true}
        pagination={{
            clickable: true
        }}
        modules={[FreeMode, Pagination]}
       className='max-w-[90%] lg:max-w-[100%]'
      >
        {
          spots.map((spot) =>( 
            <SwiperSlide spot={spot} key={spot.id}>
             <div className="max-w-xs rounded-md shadow-md w-[400px] h-[510px] dark:bg-gray-50 dark:text-gray-800">
	<img src={spot.image} alt="" className="object-cover object-center w-full rounded-t-md h-60 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-1">
			<h2 className="text-2xl font-semibold text-purple-600 tracking-wide">{spot.touristsSpot}</h2>
			<p className="dark:text-gray-800 text-xl font-semibold "> Country: {spot.country}</p>
        
            <div className='text-lg font-medium'>Location: {spot.location}  </div>
            <div className='text-lg font-medium'>Average Cost: {spot.averageCost} </div>
           
		</div>
		{/* <Link to={`/detail/${estate.id}`}>
        <button  type="button" className="flex items-center justify-center w-full p-2 font-semibold tracking-wide rounded-md dark:bg-blue-500 dark:text-gray-50">View Property</button>
        </Link> */}
	</div>
</div>
            </SwiperSlide>))
        }
        
      </Swiper>
        </div>
    );
};

export default TouristsSpotSection;