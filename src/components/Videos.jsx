import { Stack , Box } from "@mui/material"
import Channel from "./Channel"
import Video from "./Video"

const Videos = ({ videos }) => {
if(!videos.length) return <div className="flex justify-center items-center h-screen w-auto text-white font-bold text-2xl  text-poppin">... Loading</div>
  return (
    
   <Stack direction='row' justifyContent='flex-start'  flexWrap='wrap' gap={1}  sx={{mt:{sm:"100px", xs:"80px"},ml:{sm:"-27px",xs:0},px:{xs:"10px"},justifyContent:{xs:"center"}}} >
    {
      videos.map((item,i)=>(
     

        <Box  key={i +1} sx={{width:'320px',height:{sm:'360px',xs:"360px"}, borderRadius:'2px' ,cursor:'pointer'}} >
          {
            item?.id?.videoId &&  <Video video={item} />
          }
          {item?.id?.channelId != "undefined" ? <Channel 
          channelCard={item} />:<div className="w-full  min-h-screen flex justify-center items-center text-white text-2xl font-semibold">...Loading</div>}

         
        </Box>
      ))
    }

   </Stack>
  )
}

export default Videos