import Link from "next/link";


const LeftSideBar = ({ catagory , activeId}) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center p-2">News Catagory</h2>
      <ul className="flex flex-col mt-6">
        {catagory.data.news_category.map((catagory) => (
          <li
            key={catagory.category_id}
            className={`${activeId === catagory.category_id && "bg-slate-300"} bg-slate-100  rounded-xl font-bold text-md text-center m-2 `}
          >
            <Link href={`/category/${catagory.category_id}`}
            className="block p-2"
            >{catagory.category_name}</Link>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSideBar;
