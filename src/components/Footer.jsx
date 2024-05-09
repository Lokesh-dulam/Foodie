const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <div className="pt-5">
        <div className="h-16 w-full bg-black flex text-white justify-center items-center">
            <p className="font-semibold flex">Privacy Policy © {year} . All Rights Reserved<span className="text-red-600 pl-2">Food App</span></p>
        </div>  
        </div>    
  )
}

export default Footer