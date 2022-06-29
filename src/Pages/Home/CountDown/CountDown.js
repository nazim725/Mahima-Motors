import React from 'react'
import './CountDown.css'
import CountUp from 'react-countup'
import { Grid } from '@mui/material'

const CountDown = () => {
  return (
    <div className='countDown'>
      <Grid container spacing={2}>
        <Grid xs={12} md={4}>
          <div>
            <h4>Total Customer</h4>
            <h1>
              <CountUp end={432} duration={12} /> ++
            </h1>
          </div>
        </Grid>
        <Grid xs={12} md={4}>
          <div>
            <h4>Total Reviewers</h4>
            <h1>
              <CountUp end={1235} duration={16} /> ++
            </h1>
          </div>
        </Grid>
        <Grid xs={12} md={4}>
          <div>
            <h4>Total SubScriber</h4>
            <h1>
              <CountUp end={1101} duration={18} /> ++
            </h1>
          </div>
        </Grid>
        
      </Grid>
    </div>
  )
}

export default CountDown
