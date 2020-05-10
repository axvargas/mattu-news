import React, { Fragment } from 'react';
import { Typography, Grid, } from '@material-ui/core';
import PropTypes from 'prop-types';

import New from '../new';

import useStyles from './style'
const ListOfNews = ({ news, globalCategory }) => {
    const classes = useStyles();
    return (
        <Fragment>
            <Typography className={classes.typo} variant="h5">{globalCategory}</Typography>
            <Grid container spacing={3}>
                {news &&
                    news.map((newThing, index) => (
                        <New key={index} newN={newThing} />
                    ))

                }
            </Grid>
        </Fragment>


    );
}
ListOfNews.propTypes = {
    news: PropTypes.array.isRequired,
    globalCategory: PropTypes.string.isRequired
}
export default ListOfNews;
