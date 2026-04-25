
import LeftSideBar from '@/components/HomePage/News/LeftSideBar'
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
          Welcome to Dragon News
          {news.data.map((news) => (
            <div key={news._id}>
              <div className="card bg-base-100 shadow-xl m-2 p-1">
                
                <div className="card-body">
                  <h2 className="card-title">{news.title}</h2>
                  
                  
                </div>
              </div>
            </div>
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