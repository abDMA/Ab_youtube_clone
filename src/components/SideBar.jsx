import { Stack } from "@mui/material"
import {motion} from 'framer-motion'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SchoolIcon from '@mui/icons-material/School';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';


const SideBar = ({ selectedCategory , setselectedCategory }) => {
  const Categories = [
    { name: 'New', icon: <HomeIcon/> },
    { name: 'Coding', icon: <CodeIcon /> },
    { name: 'NextJS', icon: <CodeIcon /> },
    { name: 'Music', icon: <MusicNoteIcon /> },
    { name: 'Education', icon: <SchoolIcon />},
    { name: 'Podcast', icon: <GraphicEqIcon /> },
    { name: 'Movie', icon: <OndemandVideoIcon /> },
    { name: 'Gaming', icon: <SportsEsportsIcon /> },
    { name: 'Live', icon: <LiveTvIcon /> },
    { name: 'Sport', icon: <FitnessCenterIcon /> },
    { name: 'Fashion', icon: <CheckroomIcon /> },
    { name: 'Beauty', icon: <FaceRetouchingNaturalIcon /> },
    { name: 'Comedy', icon: <TheaterComedyIcon /> },
    { name: 'Gym', icon: <FitnessCenterIcon /> },
    { name: 'Crypto', icon: <DeveloperModeIcon /> },
  ]
  return (
    <Stack 
    direction='row' 
    sx={{overflowY:'auto',
    height:{sx:'auto' ,sm:'93% ',xs:'auto'},
    flexDirection:{md:'column'},overflow:"hidden" }} 
    >
        <motion.div drag='y' dragConstraints={{bottom:0}} className="sm:block hidden">
        {Categories.map((category)=>(
          <motion.div key={category.name} >
            <button onClick={()=> setselectedCategory(category.name)  } className="category-btn "
            style={{background: category.name === selectedCategory && '#FC1503',
            color:'white'}}
            >
                <span style={{color:category.name === selectedCategory? 'white' : 'red'}}>{category.icon}</span>
                <span style={{fontWeight: category.name === selectedCategory? '500':'300'}}>{category.name}</span>
            </button>
            </motion.div>
        ))}
        </motion.div>
        
    </Stack>
    
    
  )
}

export default SideBar