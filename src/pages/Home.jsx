import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons"; 
import sound from "../../public/assets/mp3/a.mp3";
import one from '../../public/assets/photos/1.jpg'
import two from '../../public/assets/photos/2.jpg'
import four from '../../public/assets/photos/4.jpg'
import five from '../../public/assets/photos/5.jpg'
import six from '../../public/assets/photos/6.jpg'
import seven from '../../public/assets/photos/7.jpg'
import eight from '../../public/assets/photos/8.jpg'
import nine from '../../public/assets/photos/9.jpg'
import ten from '../../public/assets/photos/10.jpg'
import eleven from '../../public/assets/photos/11.jpg'
import twl from '../../public/assets/photos/12.jpg'
import thit from '../../public/assets/photos/13.jpg'
import fort from '../../public/assets/photos/14.jpg'
import fift from '../../public/assets/photos/15.jpg'
const Home = () => {
    const [audio, setAudio] = useState(null);
    const [isPlay, setIsPlay] = useState(false);

    const[popupimg,setPopUpImg] = useState()
    const[work,setWork]=useState(false)


    function working(pic){
        setPopUpImg(pic)
        setWork(true)
    }

    function removing(){
        setWork(false)
    }

    useEffect(() => {
        const aud = new Audio(sound);
        setAudio(aud);

        aud.play()
            .then(() => setIsPlay(true)) 
            .catch((error) => console.log("Autoplay blocked:", error));
        
        return () => aud.pause(); // Cleanup on unmount
    }, []);

    function statement() {
        if (audio) {
            if (isPlay) {
                audio.pause();
            } else {
                audio.play();
            }
            setIsPlay(!isPlay);
        }
    }
    let img = [one,two,four,five,six,seven,eight,nine,ten,eleven,twl,thit,fort,fift]
    return (
        <>
        <div>
            <div className="flex items-center justify-center p-7 text-violet-800 ">
                <div className="flex items-center justify-center font-medium  text-violet-800 ">
                    <h1>Happy B-day</h1>
                </div>
                <button className="bg-violet-50 rounded-3xl px-4 py-2" onClick={statement}>
                    {isPlay ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
                </button>
            </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 sm:border-0 sm:gap-4  mx-6 p-2 h-[550px] rounded-lg overflow-y-scroll border-2 border-violet-800">
            {img.map((item)=>(
                    <img onClick={()=>working(item)} className=" cursor-pointer h-[300px] w-[180px] sm:h-[500px] sm:w-[300px] sm:rounded-2xl" src={item} alt="" /> 
            ))}
        </div>
        {work ? <div className="fixed top-0 bg-black/50 h-screen w-full flex items-center justify-center">
            <div className="absolute w-[300px] h-[500px] bg-violet-600 flex z-50  rounded-2xl justify-end">
                <h1 className="absolute px-2 cursor-pointer" onClick={()=>removing()}>X</h1>
                <img src={popupimg} className="w-full h-full rounded-lg" alt="" />
            </div>
        </div> : <div></div>}
        </>
    )
};

export default Home;

