
import LeftSideBar from '@/components/HomePage/News/LeftSideBar'
import NewsCard from '@/components/HomePage/News/NewsCard';
import RightSideBar from '@/components/HomePage/News/RightSideBar'
import { getCatagory, getNewsByCategoryId } from '@/lib/data';



const NewsCategory = async ({params}) => {
    const {id} = await params;
    const catagory = await getCatagory()
  const news = await getNewsByCategoryId(id)
    
  return (
    <div>
      <div className="grid grid-cols-12 gap-2 container mx-auto my-10">
        <div className="col-span-3">
          <LeftSideBar catagory={catagory} activeId={id} />
        </div>
        <div className=" col-span-6">
            <h1 className="text-2xl font-bold text-center p-2 mb-8">Dragon News</h1>
          {news.data.map((news) => (
            <NewsCard news={news} key={news._id} />
          ))}
          </div>
        <div className="col-span-3">
          <RightSideBar />
        </div>
      </div>
     
    </div>
    
  )
}

export default NewsCategory