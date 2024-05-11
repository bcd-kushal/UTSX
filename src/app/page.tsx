import { ItemsList } from "@/components/itemList/ItemsList"
import { itemListDataType } from "@/components/itemList/utils/types"
import SignupForm from "@/components/signupForm/SignupForm"

export default function Home() {
  const data:itemListDataType = [
          {
              header: "ABC",
              data: [
                  { img:"", title:"Simple Hall Decoration", mrp:2000, discount:0.25, rating:4.6, reviews:275, link:"#" },
                  { img:"", title:"Simple Hall Decoration", mrp:2000, discount:0.25, rating:4.6, reviews:275, link:"#" },
                  { img:"", title:"Simple Hall Decoration", mrp:2000, discount:0, rating:4.6, reviews:275, link:"#" },
              ]
          },
          
          {
              header: "PQR",
              data: [
                  { img:"", title:"Backdrop Decoration", mrp:2000, discount:0.25, rating:4.6, reviews:275, link:"#" },
                  { img:"", title:"Backdrop Decoration", mrp:2000, discount:0.25, rating:4.6, reviews:275, link:"#" },
                  { img:"", title:"Backdrop Decoration", mrp:2000, discount:0.25, rating:4.6, reviews:275, link:"#" },
                  { img:"", title:"Backdrop Decoration", mrp:2000, discount:0.25, rating:4.6, reviews:275, link:"#" },
                  { img:"", title:"Backdrop Decoration", mrp:2000, discount:0.25, rating:4.6, reviews:275, link:"#" },
                  { img:"", title:"Backdrop Decoration", mrp:2000, discount:0.25, rating:4.6, reviews:275, link:"#" },
                  { img:"", title:"Backdrop Decoration", mrp:2000, discount:0.25, rating:4.6, reviews:275, link:"#" },
              ]
          },
          
          {
              header: "XYZ",
              data: [
                  { img:"", title:"Candle Light Dinner", mrp:2000, discount:0.25, rating:4.6, reviews:275, link:"#" },
                  { img:"", title:"Candle Light Dinner", mrp:2000, discount:0.25, rating:4.6, reviews:275, link:"#" },
                  { img:"", title:"Candle Light Dinner", mrp:2000, discount:0.25, rating:4.6, reviews:275, link:"#" },
                  { img:"", title:"Candle Light Dinner", mrp:2000, discount:0.25, rating:4.6, reviews:275, link:"#" },
                  { img:"", title:"Candle Light Dinner", mrp:2000, discount:0.25, rating:4.6, reviews:275, link:"#" },
                  { img:"", title:"Candle Light Dinner", mrp:2000, discount:0.25, rating:4.6, reviews:275, link:"#" },
                  { img:"", title:"Candle Light Dinner", mrp:2000, discount:0.25, rating:4.6, reviews:275, link:"#" },
              ]
          }
      ]
  const allCities =  [ "Agra", "Ahmedabad", "Amritsar", "Aurangabad", "Bangalore", "Bhopal", "Bhubanaswer", "Chandigarh", "Chennai", "Coimbatore", "Dehradun", "Delhi", "Ghaziabad", "Guntur", "Gurgaon", "Hyderabad", "Indore", "Jaipur", "Jammu", "Jamshedpur", "Kanpur", "Kolkata", "Lonavala", "Lucknow", "Ludhiana", "Meerut", "Mumbai", "Nagpur", "Nashik", "Noida", "Patna", "Prayagraj", "Pune", "Raipur", "Rajkot", "Ranchi", "Surat", "Udaipur", "Vadodara", "Varanasi", "Vijayawada", "Visakhapatnam" ]
  return (
    <SignupForm />
  )
}
