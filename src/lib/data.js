
export async function getCatagory () {
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories')
  const data = await res.json()
  return data
}
export async function getNewsByCategoryId (catagory_id) {
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${catagory_id}`)
  const data = await res.json()
  return data
}