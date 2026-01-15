import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets';

const Testimonial = () => {

    const testimonials = [
        { 
            name: "Emma Rodriguez", 
            location: "Barcelona, Spain", 
            image: assets.testimonial_image_1, 
            testimonial: "The car was in excellent condition and the pickup and drop-off process was very smooth. Highly recommend this service!" 
        },
        { 
            name: "Michael Thompson", 
            location: "New York, USA", 
            image: assets.testimonial_image_2, 
            testimonial: "CarRental made my trip so much easier. The car was delivered right to my door, and the customer service was fantastic!" 
        },
        { 
            name: "Sophia Martinez",
            location: "Los Angeles, USA", 
            image: assets.testimonial_image_1, 
            testimonial: "The car was in excellent condition and the pickup and drop-off process was very smooth. Highly recommend this service!" 
        }
        
    ];
  return (
    <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">
            
            <Title title="What our customers say" subTitle="Discover why descerning travelers choose StayVenturn for their luxury accomodations around the world" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-2 transition-all duration-500 cursor-pointer">
                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className=" text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.location}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            {Array(5).fill(0).map((_, index) => (
                                <img key={index} src={assets.star_icon} alt="" />
                            ))}
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4 font-light">"{testimonial.testimonial}"</p>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Testimonial