import React from 'react'
import { styled } from '@mui/material/styles'
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
  colors,
} from '@mui/material'

import type { IconButtonProps, Theme } from '@mui/material'

import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material'

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean
  theme?: Theme
}

const ExpandMore = styled(IconButton)(({ theme, expand }: ExpandMoreProps) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition:
    theme &&
    theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
}))

export default function RecipeReviewCard(): JSX.Element {
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" sx={{ bgcolor: colors.red[500] }}>
            R
          </Avatar>
        }
        subheader="September 14, 2016"
        title="Shrimp and Chorizo Paella"
      />
      <CardMedia
        alt="Paella dish"
        component="img"
        height="194"
        image="https://mui.com//static/images/cards/paella.jpg"
      />
      <CardContent>
        <Typography color="text.secondary" variant="body2">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          aria-expanded={expanded}
          aria-label="show more"
          expand={expanded}
          onClick={handleExpandClick}
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} orientation="horizontal" timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}
