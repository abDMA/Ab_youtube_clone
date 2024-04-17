import { useState,useEffect } from "react"
import { Box,Typography } from "@mui/material"
import Videos from "./Videos"
import { FetchApi } from "../utils/FetchApi"
import { useParams } from "react-router-dom"





const SearchFeed = () => {
  const {searchTerm} = useParams()
  const [videos, setvideos] = useState([])
  
  useEffect(()=>{
    FetchApi(`search?q=${searchTerm}&part=snippet`).then((data)=>{setvideos(data.items)})

  },[searchTerm])
  
;
  return (
    <Box sx={{display:'block' ,mt:'110px'}}>
        <Typography variant="h4" pl={5} pb={3}  sx={{color:'white',fontWeight:'bold',position:'fixed',top:'75px',left:'0px',backgroundColor:'black',width:'100%'}}> Search Resolved From : <span style={{color:'#fc1503'}}>{searchTerm}</span>

          
        </Typography>
        <Videos videos={videos} marginLeft='25px'/>
      </Box>
  )
}

export default SearchFeed