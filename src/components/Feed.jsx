import { useState,useEffect } from "react"
import { Box,Stack,Typography } from "@mui/material"
import SideBar from "./SideBar"
import Videos from "./Videos"
import { FetchApi } from "../utils/FetchApi"
import PhoneSideBar from "./PhoneSideBar"





const Feed = () => {
  const [selectedCategory,setselectedCategory] = useState('New')
  const [videos, setvideos] = useState([])
  useEffect(()=>{
    FetchApi(`search?q=${selectedCategory}&part=snippet`).then((data)=>{setvideos(data.items)})

  },[selectedCategory])
  
;
  return (
    <Stack sx={{flexDirection:{xs:'column',md:'row'},}}>
      <Box sx={{height:{sx:'auto',md:'84%',sm:"auto"},position:{sm:'fixed',top:"140px", xs:'block'},backgroundColor:'black',borderRight:'1px solid #3d3d3d',px:{xs:0,md:2}}}>
        
        <SideBar
        selectedCategory ={selectedCategory} setselectedCategory ={setselectedCategory}/>
        <Typography  className="CopyRight" variant="body2" sx={{mb:'15px',color:'#fff',display:{md:"block",sm:"none"}}}>

        
          Copyright 2023 Zian Media
        </Typography>

      </Box>
    
        <div className="block sm:ml-[255px]  sm:top-[110px]  ">
          
        <Typography pl={5} className="flex justify-between items-center px-5"  sx={{variant:{sm:"h4",xs:"h2"} ,pb:{sm:3,xs:1},color:'white',fontWeight:'bold',position:'fixed',top:'75px',left:{md:'200px',xs:0},backgroundColor:'black',width:'100%'}}>
          <div>{selectedCategory} <span style={{color:'#fc1503'}}>Videos</span></div>
          
          <PhoneSideBar selectedCategory ={selectedCategory} setselectedCategory ={setselectedCategory}/>
        </Typography>
        
       
        <Videos videos={videos}/>
        </div>
     
     
    </Stack>
  
  )
}

export default Feed