import Image from "next/image";
async function getCatagory () {
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories')
  const data = await res.json()
  return data
}

export default async function Home() {
  const catagory = await getCatagory()
  console.log(catagory.data.news_category)
  return (
    <div>
      <h1 className="grid grid-cols-12 container mx-auto my-10">
        <div className="col-span-3">
          <h2 className="text-2xl font-bold text-center p-2">News Catagory</h2>
          <ul className="flex flex-col mt-6">
          {catagory.data.news_category.map((catagory) => (
            <li key={catagory.category_id} className="bg-slate-100 p-2 rounded-xl font-bold text-md text-center m-2">{catagory.category_name}</li>
          ))}
          </ul>
          </div>
        <div className="text-2xl font-bold bg-red-100 col-span-6">Dragon News</div>
        <div className="text-2xl font-bold bg-blue-100 col-span-3">Login Width</div>
      </h1>
     
    </div>
  );
}
