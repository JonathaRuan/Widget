import { Camera, Trash } from "phosphor-react";
import html2canvas from "html2canvas";
import { useState } from "react";
import { Loading } from "../Loading";
import { backgroundPosition } from "html2canvas/dist/types/css/property-descriptors/background-position";

interface ScreenShotButtonProps{
    screenshot:string|null; 
    onScreenshotTook: (screenShot:string| null) => void;
}

export function ScreenshotButton({screenshot,onScreenshotTook}:ScreenShotButtonProps){
    const [isTakingScreenShot, setIsTakingScreenShot] = useState(false)

    async function handleTakeScreenshot(){
        setIsTakingScreenShot(true);

        const canvas = await html2canvas(document.querySelector('html')!)
        const base64image = canvas.toDataURL('image/png');

        onScreenshotTook(base64image);
        setIsTakingScreenShot(false);
    }

    if(screenshot) {
        return(
            <button
            type="button"
            className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
            onClick={()=>{onScreenshotTook(null)}
            }style={{
                backgroundImage:`url(${screenshot})`
            }}
            >
            <Trash weight="fill"/>
            </button>
        );
    }

    return(
        <button
        type="button"
        onClick={handleTakeScreenshot}
        className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700  focus:ring-brand-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 transition-colors"
        >
          { isTakingScreenShot ? <Loading /> : <Camera className="w-6 h-6" /> }
        </button>
    )
}