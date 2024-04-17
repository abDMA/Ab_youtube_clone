import { Typography,Card,CardContent,CardMedia } from "@mui/material"
import { Link } from "react-router-dom";
import {demoThumbnailUrl,demoVideoUrl,demoVideoTitle,demoChannelTitle} from '../utils/constants'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Video = ({video: { id: {videoId} ,snippet}   }  ) => {



  const images = snippet?.thumbnails?.high?.url
  const title = snippet?.title
  const channel = snippet?.channelTitle
 

 

  return (
    <Card  sx={{width:'100%' ,height:'100%' ,backgroundColor:'#121010'}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
      <CardMedia 
      component='img'
      image={images ? images : demoThumbnailUrl}
      height='190'
      />
       </Link>
      <CardContent sx={{p:{sm:2,xs:0},px:{xs:2},py:{xs:2}}}>
        <Typography variant="h8" fontWeight='bold' fontFamily='Roboto' color='white'> 
        
          {title ? title : demoVideoTitle}
        </Typography>
        <br />
        <Typography variant="body2"  lineHeight='40px' color='grey' fontWeight='400' display='flex' alignItems='center' gap='2px'>
          {channel ? channel : demoChannelTitle}
          <CheckCircleIcon fontSize="20px" />

        </Typography>

      </CardContent>

     
     
    </Card>
 
  )
}

export default Video