import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper , IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState()
  const navigate = useNavigate()
  const submitHndler = (e)=>{
   e.preventDefault();
   if (searchTerm){
    navigate(`search/${searchTerm}`)

    setSearchTerm('')
    
   }
  }
  return (
    <Paper component='form' onSubmit={submitHndler} sx={{borderRadius: 20 ,
    border:'1px solid #e3e3e3',
    pl:2,
    mr:{sm : 5 },
    display:"flex",
    justifyContent: 'center',
    alignItems:"center",
    }}
      >
     <input className='sm:w-[350px] w-40 sm:text-[15px] font-medium border-none  outline-none ' placeholder='... Search' value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)} }/>
     <IconButton type='submit' sx={{p:'10px', color:'red',}}> <SearchIcon />
     </IconButton>
        </Paper>
  )
}

export default SearchBar