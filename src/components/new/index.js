import React from 'react';
import PropTypes from 'prop-types';

import useStyles from './style'
import { Typography, Card, Grid, CardHeader, Avatar, CardActions, CardContent, CardMedia, IconButton, Link } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
const New = ({ newN }) => {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar aria-label={newN.author? newN.author: "NA"} className={classes.avatar}>
                            {newN.author ? newN.author[0] : 'NA'}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={<strong>{newN.title}</strong>}
                    subheader={newN.publishedAt}
                />
                <CardMedia
                    className={classes.media}
                    component="img"
                    src={newN.urlToImage}
                    title={newN.title}

                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {newN.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />

                    </IconButton>
                    <Link
                        href={newN.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes.left}
                    >
                        <IconButton
                           
                            aria-label="Go to source"
                            
                        >
                            <ExitToAppIcon />
                        </IconButton>
                    </Link>


                </CardActions>
            </Card>
        </Grid>
    );
}
New.propTypes = {
    newN: PropTypes.object.isRequired
}

export default New;
