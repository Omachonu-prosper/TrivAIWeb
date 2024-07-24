import Image from "next/image"
import howToPlayImg1 from '../assets/how_to_play_img1.png'
import howToPlayImg2 from '../assets/how_to_play_img2.png'
import howToPlayImg3 from '../assets/how_to_play_img3.png'
import howToPlayImg4 from '../assets/how_to_play_img4.png'


const ImagePalette = () => {
  return (
    <div className="relative h-full w-full">
        <Image src={howToPlayImg1} className="w-[247px] h-[249px] rounded-tr-[100px]  absolute left-0 translate-x-[30%] z-0 image-palette"/>
        <Image src={howToPlayImg2} className="w-[247px] h-[249px] rounded-tr-[100px] rotate-180 absolute -translate-x-[15%] translate-y-[10%] right-0 z-10 image-palette"/>
        <Image src={howToPlayImg3} className="w-[247px] h-[249px] rounded-tr-[100px] rotate-180 absolute translate-x-[30%] translate-y-[90%] z-1 image-palette"/>
        <Image src={howToPlayImg4} objectFit="cover" className="w-[247px] h-[249px] rounded-tr-[100px] absolute -translate-x-[5%] translate-y-[96%] right-0 z-2 image-palette"/>

    </div>
  )
}

export default ImagePalette