import React from 'react'
import Marquee from 'react-fast-marquee'

function BreakingNews() {
  return (
    <div className='flex justify-center gap-1 p-2 bg-gray-200 container mx-auto'>
        <button className='btn bg-red-400 text-white'>Latest News</button>
        <Marquee speed={50} pauseOnHover={true}>Breaking news Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad tempora magni, eligendi ullam dolore odit dolorum quaerat non laudantium soluta. Nisi ab consequuntur maxime aliquam velit dolor alias dicta? Facere, qui earum. Vel esse ex repellendus molestiae ipsum, error tempore earum, vitae sunt perferendis porro quasi dicta dolor doloribus inventore!</Marquee>
    </div>
  )
}

export default BreakingNews