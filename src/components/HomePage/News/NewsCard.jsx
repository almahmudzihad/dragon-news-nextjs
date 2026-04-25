import Image from 'next/image'
import React from 'react'

const NewsCard = ({news}) => {
  return (
    <div className="card bg-base-100  shadow-sm">
  <div className="card-body">
    {/* auther info */}
    <div>
        <Image src={news.author?.img} alt="user" height={40} width={40} />
        <p>{news.author?.name}</p>
    </div>
    <h2 className="card-title">{news.title}</h2>
    
  </div>
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
</div>
  )
}

export default NewsCard