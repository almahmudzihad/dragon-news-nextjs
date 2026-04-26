import LeftSideBar from "@/components/HomePage/News/LeftSideBar";
import NewsCard from "@/components/HomePage/News/NewsCard";
import RightSideBar from "@/components/HomePage/News/RightSideBar";
import { getCatagory, getNewsByCategoryId } from "@/lib/data";

const NewsCategory = async ({ params }) => {
  const { id } = await params;
  const catagory = await getCatagory();
  const news = await getNewsByCategoryId(id);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 container mx-auto my-10 px-2">
        {/* Left Sidebar */}
        <div className="md:col-span-3 order-2 md:order-1">
          <LeftSideBar catagory={catagory} activeId={id} />
        </div>

        {/* Main Content */}
        <div className="md:col-span-6 order-1 md:order-2">
          <h1 className="text-2xl font-bold text-center p-2 mb-8">
            Dragon News
          </h1>

          {news.data.map((news) => (
            <NewsCard news={news} key={news._id} />
          ))}
        </div>

        {/* Right Sidebar */}
        <div className="md:col-span-3 order-3">
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};

export default NewsCategory;
