import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
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

const options = [
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


const ITEM_HEIGHT = 48;

export default function PhoneSideBar({ selectedCategory , setselectedCategory }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className=' rounded-full bg-white sm:hidden block'>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((category) => (
          <MenuItem key={category.name} selected={category.name === 'New'} onClick={handleClose}>
          <motion.div key={category.name} >
            <button onClick={()=> setselectedCategory(category.name)  } className="category-btn "
            style={{background: category.name === selectedCategory && '#FC1503',
            color:'white'}}
            key={category.name}>
                <span style={{color:category.name === selectedCategory? 'white' : 'red'}}>{category.icon}</span>
                <span style={{fontWeight: category.name === selectedCategory? '500':'300'}}>{category.name}</span>
            </button>
            </motion.div>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}