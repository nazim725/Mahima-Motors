import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useParams } from 'react-router'
import useAuth from '../../../Components/hooks/useAuth'
import NavigationBar from '../../Shared/Navigation/NavigationBar'
import Zoom from 'react-reveal/Zoom'
import { useHistory, useLocation } from 'react-router-dom'

const Purchase = () => {
  const [product, setProduct] = useState({})
  const { user } = useAuth()
  const { productId } = useParams()
  const history = useHistory()
  const location = useLocation()
  const initialInfo = {
    email: user.email,
    phone: '',
    address: '',
    status: 'Pending',
  }
  const [purchaseInfo, setPurchaseInfo] = useState(initialInfo)

  const handleOnBlur = (e) => {
    const field = e.target.name
    const value = e.target.value
    const newInfo = { ...purchaseInfo }
    newInfo[field] = value
    setPurchaseInfo(newInfo)
  }

  useEffect(() => {
    const url = `https://mahima-motors-server.herokuapp.com/products/${productId}`
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data)
        console.log(data)
      })
  }, [])

  const handlePurchaseSubmit = (e) => {
    // collect data
    const purchaseProduct = {
      ...purchaseInfo,
      productName: product.name,
      productPrice: product.price,
    }
    console.log(purchaseProduct)
    // send to the server
    fetch('https://mahima-motors-server.herokuapp.com/orders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(purchaseProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert('Successfully Order Your Product')
          history.push('/dashboard/myOrders')
          window.location.reload(false)
        }
      })

    e.preventDefault()
  }
  return (
    <div
      style={{
        background: 'url("https://wallpaperaccess.com/full/4129330.jpg")',
        paddingBottom: '40px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '700px',
      }}
    >
      <Zoom>
        <Box>
          <NavigationBar></NavigationBar>
          <Typography
            id="transition-modal-title"
            style={{ color: '#fff', textAlign: 'center',padding:"20px" }}
            sx={{ mt: 4 }}
            variant="h4"
            component="h4"
          >
            {product.name}
          </Typography>

          <form className="login-form" onSubmit={handlePurchaseSubmit}>
            <TextField
              sx={{ width: '90%', m: 1, input: { color: '#fff' } }}
              id="outlined-password-input"
              name="customerName"
              onBlur={handleOnBlur}
              placeholder="Your Name"
              size="small"
              className="input-field"
              required
            />
            <TextField
              sx={{ width: '90%', m: 1, input: { color: '#fff' } }}
              id="outlined-size-small"
              name="email"
              onBlur={handleOnBlur}
              defaultValue={user.email}
              size="small"
              className="input-field"
              required
            />
            <TextField
              sx={{ width: '90%', m: 1, input: { color: '#fff' } }}
              id="outlined-size-small"
              name="phone"
              onBlur={handleOnBlur}
              defaultValue="Phone Number"
              size="small"
              className="input-field"
              required
            />
            <TextField
              sx={{ width: '90%', m: 1, input: { color: '#fff' } }}
              id="outlined-size-small"
              name="address"
              onBlur={handleOnBlur}
              defaultValue="Address"
              size="small"
              className="input-field"
              required
            />

            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              style={{
                color: '#fff',
                fontWeight: 'bold',
                paddingBottom: '20px',
                marginTop:'20px'
              }}
            >
              Your Product Charged will be <span>{product.price} </span>tk
            </Typography>
            <Button type="submit" className='see-more-button mt-3'>
              Order Confirm
            </Button>
          </form>
        </Box>
      </Zoom>
    </div>
  )
}

export default Purchase
