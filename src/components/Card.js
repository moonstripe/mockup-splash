import * as React from 'react'
import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@mui/material'

export function MediaCard(props) {
    return (
      <Card sx={{ maxWidth: 345, textAlign: "left", mx: 'auto', borderRadius: "0px" }}>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "left"}}>
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">{props.callToAction}</Button>
        </CardActions>
      </Card>
    );
  }