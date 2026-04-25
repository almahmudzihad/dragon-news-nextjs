import LeftSideBar from "@/components/HomePage/News/LeftSideBar";
import Image from "next/image";
async function getCatagory () {
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories')
  const data = await res.json()
  return data
}

export default async function Home() {
  const catagory = await getCatagory()
  
  return (
    <div>
      <div className="grid grid-cols-12 gap-2 container mx-auto my-10">
        <div className="col-span-3">
          <LeftSideBar catagory={catagory} activeId={"02"} />
        </div>
        <div className="text-2xl font-bold bg-red-100 col-span-6">
          Welcome to Dragon News
          </div>
        <div className="text-2xl font-bold bg-blue-100 col-span-3">
          Login Width
          </div>
      </div>
     
    </div>
  );
}
