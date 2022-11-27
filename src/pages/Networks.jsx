import React from 'react'
import { Link } from "react-router-dom";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box, Card, CardContent, Typography } from '@mui/material'
import { Networkdata } from './Networkdata';
import '../pagecss/Network.css';


const Networks = () => {
  return (
    <>

      <div className="netowrks">
        <div className="heading">
          <h1>PATIENTS</h1>
        </div>
        <div className="cards">
          {Networkdata.map((item, index) => {
            return (
              <div className="card">
                <Box width='300px' >
                  <Card>
                    <CardContent>
                      <Typography varient='h5' component='div'>
                        NAME : {item.name}
                      </Typography>
                      <Typography varient='body2' color='text.secondary'>
                        AGE : {item.age}
                      </Typography>
                      <Typography varient='body2' color='text.secondary'>
                        BED NO : {item.bed}
                      </Typography>

                      <Typography varient='body2' color='text.secondary'>
                        <Button variant="contained" color={item.btncolor}>
                          <Link to={item.redirect} className='expand'>
                            Expand
                          </Link>
                        </Button>
                        <Button variant="outlined" color="error">
                          {item.status}
                        </Button>
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>

              </div>
            )
          })}
        </div>


        <div className='pagination' >
          <Stack spacing={2}>
            <Pagination count={10} variant="outlined" color="secondary" />
          </Stack>
        </div>
      </div>
    </>
  )
}

export default Networks



// {SidebarData.map((item, index) => {
//   return (
//       <li key={index} className={item.cName}>
//           <Link to={item.path}>
//               {item.icon}
//               <span>{item.title}</span>
//           </Link>
//       </li>
//   );
// })}

