import { Box ,Typography , Stack ,IconButton ,Card,CardContent , CardMedia, createTheme} from '@mui/material'
import {FetchApi} from '../utils/FetchApi'
import { useState , useEffect } from 'react'
import {useParams,Link} from 'react-router-dom'
import Channel from './Channel';
import { ThumbUp , ThumbDown ,Visibility,ExpandMore,ExpandLess, SettingsEthernet } from '@mui/icons-material'
import Video from './Video';
import {format} from 'date-fns'
import { demoVideoUrl } from '../utils/constants';
import millify from "millify";








const VideoDetails = () => {
  const [expand, setExpand] = useState(true)
  const [descr, setdescr] = useState('104') 
  const [videoContent, setVideoContent] = useState([])
  const [channelContent, setChannelContent] = useState([])
  const [relatedVideo, setRelatedVideo] = useState([])
  const {id}= useParams();
  const videoId = videoContent?.id
  const videoTitle = videoContent?.snippet?.title
  const channelID = videoContent?.snippet?.channelId
  const LikeCount = videoContent?.statistics?.likeCount
  const viewCount = videoContent?.statistics?.viewCount
  const description = videoContent?.snippet?.description
  const pubDate = videoContent?.snippet?.publishedAt


 

  
 
 

  useEffect(()=>{
    FetchApi(`videos?part='contentDetails,snippet,statistics'&id=${id}`).then((data)=> setVideoContent(data?.items[0]))

   

    FetchApi(`search?relatedToVideoId=${id}&part='snippet&type=video`).then((data)=> setRelatedVideo(data?.items))

    
    FetchApi(`channels?part="snippet&id=${channelID}`).then((data)=> 
    setChannelContent(data?.items)
    ) 
  },[id])
  return (
    <Stack minHeight='100vh'  overflow="hidden"  sx={{backgroundColor:"#121010" ,width:"100%"}} >
      {/* ======= video Content ========*/ }
      <Box  sx={{display:'flex',alignItems:{sm:'flex-start'},justifyContent:'space-between'}}>
     {videoContent != "undefined" ? <Box sx={{width:{xs:"100%",xxs:"100%" ,md:"66%"},mt:{sm:'100px',xs:"130px"} ,pr:{xs:2} ,pl:{xs:1}, display:{xs:"flex"} ,justifyContent:{xs:"center"},alignItems:{xs:"center"},flexDirection:{xs:"column"}}} >
        {<iframe className='w-[93%] h-[240px] sm:w-[100%] 2xl:w-[853px] sm:h-[480px]'  src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}
        <Typography sx={{width:{xs:"100%" ,xxs:"97%"}, fontSize:{xs:"13px",sm:"18px" ,lineHeight:{sm:"50px",xs:"25px"}},px:{xs:2},py:{xs:2},height:"auto"}} variant='h6'  fontWeight='bold' color='white' lineHeight='50px'>
       {videoTitle}
        </Typography><br />
        <Box width={"100%"} marginTop={"40px"} >
          <Box sx={{display:'flex',flexDirection:{sm:"row",xs:"column"} ,alignItems:'center',justifyContent:{sm:'space-between',xs:"center"}, gap:{sm:0 ,xs:"10px"} ,height:'100px',width:"100%"}}>
          <Channel  channelCard={channelContent} display='flex' alignItems='center' justifyContent='center' gap={3} height='45px' width='45px' marginTop='-15px' marginLeft='0px'   fontSize='15px' marginBottom={1.5} color='whitesmoke' position='relative'/>
          <Box>
            <Box sx={{width:'240px' ,height:'50px' ,backgroundColor:'#ffffffad' ,borderRadius:'50px' ,marginBottom:{sm:'20px',xs:"40px"},marginLeft:{lg:"290px",sm:"20px"} ,display:"flex",alignItems:'center' }}>
              <Typography variant='caption' color='black' borderRight='1px solid white' height='70%' textAlign='center' pr='10px' >
              <IconButton sx={{padding:'0px 0px 0px 9px'}}>{<ThumbUp sx={{fontSize:'30px',color:'whitesmoke',mb:'6px'} } />}</IconButton> 
              <Typography variant='p' fontSize='13px' fontWeight='bold' color='#000000b0' > {typeof(LikeCount) == "string" && millify (LikeCount)}</Typography>
              </Typography>
              <Typography variant='caption' color='black' borderRight='1px solid white' height='70%' textAlign='center' pr='10px'>
              <IconButton sx={{padding:'0px 0px 0px 9px'}} >{<ThumbDown sx={{fontSize:'30px',color:'whitesmoke',mt:'3px'}}/>}</IconButton>
              </Typography>
              <Typography variant='p' fontWeight='bold' p=' 0px 00px 00px 11px' fontSize='15px' color="#000000b0">
              {typeof(viewCount) == "string" &&millify (viewCount)}
              <IconButton sx={{padding:'0px 0px 4px 7px'}}><Visibility sx={{fontSize:'28px' ,color:'black'}}/></IconButton>
              </Typography>
            </Box>
            
          </Box>
        </Box></Box> 
        {/* ======= COMMENT SECTION ========= */ }

    
        <Box sx={{width:{xs:"100%"} ,height:`${descr}px`,
     
        backgroundColor:'grey',mt:{sm:'12px',xs:"18px"} ,borderRadius:'10px' ,overflow:'hidden' }} >
          <Typography variant='body2' p='10px 20px' fontWeight='bold'> 
          {typeof(viewCount) == "string" && millify(viewCount)} views 
          <Typography variant='subtitle2' mt='6px'  >
          {description}
            </Typography> 
          </Typography>
          
        </Box>
        
        <Box sx={{display:'flex',justifyContent:'center'}}>
         <IconButton  sx={{background:'white',mt:'-15px' }} onClick={()=> (descr ==='104'? setdescr('350') : setdescr('104')) ||
         (!expand ? setExpand(true) : setExpand(false) )
          }>
         {
          expand ? <ExpandMore sx={{fontSize:'25px' ,color:'orange' ,fontWeight:'bold'}}/> : <ExpandLess sx={{fontSize:'25px' ,color:'orange', fontWeight:'bold'}}/>
         }
         </IconButton>
        </Box>

        
      </Box> :<Stack className="w-full  min-h-screen flex justify-center items-center text-white text-2xl font-semibold">...Loading</Stack> }
         {/* ======= COMMENT SECTION ========= */ }

          
          
    
       {/* ======= sugest videos=============*/}
      
      
      { !relatedVideo.length == 0 ? <Stack mt="85px" sx={{display:{md:"flex",xs:"none"}}} className='md:flex sm:justify-center sm:items-center sm:gap-2 '>
        {relatedVideo?.map((vid , idx)=>(
                <Card key={idx}  sx={{backgroundColor:'transparent',display:'flex',width:{lg:'450px',md:"285px"} }}
                >
                <Link to={vid?.id?.videoId &&`/video/${vid?.id?.videoId }`}>
                <CardMedia 
                component='img'
                image={vid?.snippet?.thumbnails?.high?.url}
                sx={{width:{lg:'194px',md:"145px"}, maxWidth:"200px",borderRadius:'7px'}}
                />
                </Link>
                <CardContent>
                  <Typography variant='subtitle2' fontWeight='bold' color='white' sx={{fontSize:{lg:"auto",md:"10px"}}} >
                 {vid?.snippet?.title}
                  </Typography>
                  <br />
                  <Typography variant='body2' fontWeight='small' color="grey"   lineHeight='0px' >
                  {vid?.snippet?.channelTitle}
                  </Typography>
                  <br />
                </CardContent>
              </Card>

                 

           )) }
       </Stack>: <Stack className="w-full  min-h-screen flex justify-center items-center text-white text-2xl font-semibold">...Loading</Stack> }
     
        </Box>
       
    </Stack>
  )
}

export default VideoDetails