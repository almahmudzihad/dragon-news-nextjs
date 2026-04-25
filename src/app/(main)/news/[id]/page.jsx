import { getNewsDetelsById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaBookmark, FaEye, FaStar } from 'react-icons/fa';
import { FaSquareShareNodes } from 'react-icons/fa6';

const NewsDetels = async({params}) => {
  const {id} = await params;
  const newsdata = await getNewsDetelsById(id);
  const news = newsdata[0];
  console.log(news)
  return (
    <div className='max-w-4xl mx-auto'>
    <div className="card bg-white shadow-md border border-gray-100 my-2">
          <div className="card-body space-y-4">
            <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
              <Image
                src={news.author?.img}
                alt="user"
                height={40}
                width={40}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold text-gray-800">{news.author?.name}</p>
                <p className="text-xs text-gray-500">
                  {news.author?.published_date}
                </p>
              </div>
              <div className="flex items-center gap-2 ml-auto text-xl text-gray-500">
                <FaSquareShareNodes />
                <FaBookmark />
              </div>
            </div>
    
            <h2 className="card-title text-gray-800">{news.title}</h2>
    
            <figure>
              <Image
                src={news.image_url}
                alt={news.title}
                width={300}
                height={200}
                className="w-full rounded-lg"
                unoptimized
              />
            </figure>
    
            <div>
              <p className=" text-gray-600">{news.details}</p>
              <button className="btn border-blue-500 text-blue-500 mt-2">
                <Link href={`/category/${news.category_id}`}>More News of this category</Link>
              </button>
            </div>
    
            <div className="flex items-center w-full border-t py-2 border-gray-100 text-gray-500">
              <div className="flex items-center gap-2">
                <FaStar className="text-orange-400" /> {news.rating?.number}
              </div>
    
              <div className="flex items-center gap-2 ml-auto">
                <FaEye /> {news.total_view}
              </div>
            </div>
          </div>
        </div>
        </div>
  )
}

export default NewsDetels