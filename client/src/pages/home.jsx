import banner from "../assets/2.jpg"
export default function Home(){

    return(
        <div className=" w-full min-h-screen text-white">
            {/*banner image*/}
          <div className="relative  ">
            <img 
             src={banner}
             alt="banner image"
             className="w-full object-cover"
            />
          </div>
          </div>
    )
}