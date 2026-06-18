//import {redis} from "@/lib/redis"

"use client";

import Desc from "@/components/description"
import {OptionSection} from "@/components/optionSectionUI/optDesk"




function Notification(){
    return(
        <div className="bg-[#8CABFA] text-center text-white text-sm">
           Notification Section goes here
        </div>
    )
}


function TestList(){
    return(
        <div>
            Give A Test
        </div>
    )
}

function DesktopHP(){
  return(
    <div className="hidden md:block" >
      <OptionSection/>
            <Notification/> 
            <div className="flex flex-row gap-10 ">
                <Desc/>
                <TestList/>
            </div>
    </div>
  )
}


function MobileHP(){
  return(
    <div>Mobile View Goes Here</div>
  )
}

export default function HomePage(){
    return (
        <div className="flex flex-col min-h-screen">
            <DesktopHP/>
        </div>
    )
}