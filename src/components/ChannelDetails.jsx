import { Stack , Box , Typography  } from "@mui/material"
import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { FetchApi } from "../utils/FetchApi"
import Channel from "./Channel"
import Videos from "./Videos"




const ChannelDetails = () => {
  const [channel, setChannel] = useState([])
  const [content, setContent] = useState([])

  
  const {id} = useParams()
  useEffect(()=>{
     FetchApi(`channels?part="snippet&id=${id}`).then((data)=> setChannel(data?.items[0])) 

     FetchApi(`search?channelId=${id}&part=snippet&order=date`).then((data)=> setContent(data?.items))
  },[id])
  const subscriberCount = channel?.statistics?.subscriberCount

 
  return (
<Stack minHeight='100vh'>
  <Box >
    <div style={{ height:'300px',background:'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)'}}/>
    
  </Box>

  <Box >
    <Channel channelCard={channel} height ='120px' width='120px' display='flex' alignItems='center' justifyContent='center' flexDirection='column' marginLeft='-5px' color='white' textAlign='center' />
    
  </Box>
  <Box ml={20} mt={3} display='flex' justifyContent='center' background='#121010'>
    <Videos videos={content}  />
  </Box>

</Stack>
  )
}

export default ChannelDetails