import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import motor from '../../../images/motor.png'
import { Typography, Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
import './Banner.css'
import Zoom from 'react-reveal/Zoom'
import Roll from 'react-reveal/Roll'
import Fade from 'react-reveal/Fade'
import { Container } from 'react-bootstrap'

const Banner = () => {
  return (
    <Box
      style={{
        background: 'url("")',
        marginTop: '9px',
      }}
      sx={{ flexGrow: 1 }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            textAlign: 'left',
          }}
        >
          <Container>
            <Box sx={{ pl: 12 }}>
              <Typography className="" gutterBottom component="div">
                <Zoom left cascade>
                  <span className="heading-subName project-title">
                    MAHIMA MOTORS
                  </span>
                </Zoom>
              </Typography>

              <Typography variant="h5" gutterBottom component="div">
                <Zoom left cascade>
                  <span className="heading-2nd">
                    A Desired Satisfaction from MAHIMA MOTORS
                  </span>
                </Zoom>
              </Typography>
              <Typography variant="h5" gutterBottom component="div">
                <Zoom left cascade>
                  <span className="heading-2nd">More Freedom to Buy</span>
                </Zoom>
              </Typography>
              <Typography variant="h5" gutterBottom component="div">
                <Zoom left cascade>
                  <span className="heading-subName">
                    Welcome to MAHIMA MOTORS
                  </span>
                </Zoom>
              </Typography>

              <NavLink
                style={{ textDecoration: 'none', marginTop: '30px' }}
                to="/explore"
              >
                {' '}
                <Button variant="contained">Explore Products</Button>
              </NavLink>
            </Box>
          </Container>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Fade right>
            <img src={motor} alt="" width="100%"  />
          </Fade>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Banner
