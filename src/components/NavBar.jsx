import { Stack } from "@mui/material"
import { Link } from "react-router-dom"
import {logo} from '../utils/constants'
import SearchBar from "./SearchBar"
const NavBar = () => {
  return (
    <Stack direction='row' alignItems='center' p={2} sx={{backgroundColor:'#000',top:0,justifyContent:'space-between',position:'fixed',width:'100%'}} className="px-8">
      <Link to='/' style={{display :"flex" ,alignItems:'center'}}>
        <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
      </Link>
      <SearchBar />

    </Stack>
  )
}

export default NavBar