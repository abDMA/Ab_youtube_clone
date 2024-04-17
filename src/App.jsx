import { BrowserRouter ,Routes ,Route} from 'react-router-dom'
import {Box} from '@mui/material'
import { NavBar,Feed,VideoDetails,ChannelDetails,SearchFeed} from './components'
import { createTheme,ThemeProvider } from '@mui/material'

const App = () => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        xxs:375,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Box sx={{backgroundColor :'#000' }}>
        <NavBar />
       <Routes>
        <Route path='/' exact element ={<Feed />} />
        <Route path='/video/:id'  element={<VideoDetails />} />
        <Route path='/channel/:id'  element={<ChannelDetails />}/>
        <Route path='/search/:searchTerm' element={<SearchFeed />}/>
        </Routes>
       
      </Box>
    </BrowserRouter>
  </ThemeProvider>
  )
}

export default App