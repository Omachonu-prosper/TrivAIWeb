import Image from "next/image";

const FilledButton = ({ text, img }) => {
  return <button className="font-nunito font-[700] bg-gradient-to-r from-[#9068C1] to-[#3892DB] border border-transparent hover:border-purple-400 hover:to-[#9068C1] hover:from-[#3892DB] transition-all duration-500 ease-in-out px-[29px] py-[10px] rounded-[6px] cursor-pointer text-[#fefefe] flex gap-2 items-center justify-center">
    
    {img && <Image src={img} alt={text} width={20} height={20} /> }
    {text}
  </button>;
};

export default FilledButton;
