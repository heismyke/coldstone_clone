import Navbar from '@/shared/Navbar'
import IceCream from '/public/icecream.png'

function Header() {
  return (
    <div className="bg-[#FBE7E3] coldstone relative h-[100vh]">
      <div className="w-full h-[600px] md:h-[800px] absolute bg-white rounded-b-full flex-col flex items-center justify-center lg:hidden">
        <div className="flex p-8 items-center justify-center ">
          <h1 className="font-semibold text-[32px] font-lobster">
            Don’t just say Ice cream, say{' '}
            <span className="text-[#BC1E26CC]">Coldstone Creamery</span>{' '}
          </h1>
        </div>
        <p className="font-normal text-[12px] p-8 text-center">
          ORDER your Delicious Ice Cream directly from our stores and have it DELIVERED to your
          doorstep for FREE!
        </p>
        <img src={IceCream} alt="coldstone thumbnail" className="absolute -bottom-20 w-[300px] h-[250px]"/>
      </div>
      <Navbar/>
    </div>
  )
}

export default Header
