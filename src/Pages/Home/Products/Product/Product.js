import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import './Product.css'
import Zoom from 'react-reveal/Zoom'
import { Link } from 'react-router-dom'

const Product = (props) => {
  const { name, price, description, img, _id } = props.product
  return (
    <div>
      <Zoom>
        <Link
          style={{ textDecoration: 'none' }}
          to={`/exploreProductDetails/${_id}`}
        >
          <Card
            sx={{ maxWidth: 345, height: 400 }}
            className="product-card-img"
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={img}
                alt="green iguana"
                className="card-img-body"
              />

              <CardContent className="card-body">
                <Typography
                  className="name"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {name}
                </Typography>
                <Typography
                  className="price"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {price} TK
                </Typography>
                <Typography className="description1" variant="body2">
                  {description.slice(0, 150)}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </Zoom>
    </div>
  )
}

export default Product
