import { Link } from "react-router-dom"
import { Card ,CardMedia , CardContent ,Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import millify from "millify";




const Channel = ({channelCard,marginTop,display,alignItems,justifyContent,flexDirection,marginLeft,height,width,marginBottom ,fontSize,color,textAlign}) => {

 
  
  
  const image = channelCard?.snippet?.thumbnails?.high?.url
  const channel = channelCard?.snippet?.title
  const channelId = channelCard?.id?.channelId
  const subs = channelCard?.statistics?.subscriberCount

  
  
  

  
  return (
 <Card sx={{width: '100%',height: '100%',padding:{sm:'67px 72px',xs:"53px 72px"} ,backgroundColor:'#121010', marginTop,display,alignItems,justifyContent,flexDirection,  }}>
     <Link to={channelId }>
      <CardMedia
       component='img'
       image={image}
       sx={{borderRadius:'50%',marginLeft,marginTop,width,height,}}
      />
      </Link>
      <CardContent sx={{display:'flex',flexDirection:"column"}}>
        <Typography variant="body2"  lineHeight='40px' fontWeight='600' display='flex' alignItems='center' justifyContent='center' gap='4px' sx={{fontSize,color, }} >
          {channel}
          <CheckCircleIcon fontSize="20px" />
        </Typography>
        <Typography variant="caption" color='#121010' sx={{marginBottom,textAlign,color}}>
        {typeof(subs) == "string" && millify(subs)} Subscribers
        </Typography>

      </CardContent>
      

    </Card>
  )
}

export default Channel