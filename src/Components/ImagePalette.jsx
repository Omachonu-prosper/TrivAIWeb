import Image from "next/image"
import howToPlayImg1 from '../assets/how_to_play_img1.png'
import howToPlayImg2 from '../assets/how_to_play_img2.png'
import howToPlayImg3 from '../assets/how_to_play_img3.png'
import howToPlayImg4 from '../assets/how_to_play_img4.png'


const ImagePalette = () => {
  return (
    <div className="relative h-full w-full">
        <Image src={howToPlayImg1} className="lg:w-[247px] lg:h-[249px] w-[150px] rounded-tr-[100px]  absolute left-0 lg:translate-x-[30%] translate-x-[40%] z-0 image-palette"/>
        <Image src={howToPlayImg2} className="lg:w-[247px] lg:h-[249px] w-[150px] h-[140px] rounded-tr-[100px] rotate-180 absolute lg:-translate-x-[15%] lg:translate-y-[10%] translate-y-[10%] -translate-x-[35%] right-0 z-10 image-palette"/>
        <Image src={howToPlayImg3} className="lg:w-[247px] lg:h-[249px] w-[150px] rounded-tr-[100px] rotate-180 absolute lg:translate-x-[30%] translate-y-[90%] translate-x-[40%] z-1 image-palette"/>
        <Image src={howToPlayImg4} className="lg:w-[247px] lg:h-[249px] w-[150px] rounded-tr-[100px] absolute lg:-translate-x-[5%] lg:translate-y-[96%] translate-y-[88%] -translate-x-[15%] right-0 z-2 image-palette"/>

    </div>
  )
}

export default ImagePalette