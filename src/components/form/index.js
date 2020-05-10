import React, { useState } from 'react';
import { Typography, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
//OJO
import { categories } from './variables';

import useSelect from '../../hooks/useSelect';
import useStyles from './style'
const Form = ({setGlobalCategory}) => {
    const classes = useStyles();

    // State
    const [error, setError] = useState(false);
    const [helper, setHelper] = useState('');

    // Hook
    const [category, SelectCategory] = useSelect('Category', null, categories);

    const handleSubmit = (event) => {
        event.preventDefault();
        let numberOfErrors = 0;
        if (category === null) {
            numberOfErrors += 1
            setError(true)
            setHelper('Select a category')
        }

        if (numberOfErrors > 0) {
            console.log("Stopped")
            return;
        }

        setGlobalCategory(category.value);
        console.log('Submiting');
        
    }
    return (
        <form onSubmit={handleSubmit}>

            <Typography variant="h4" className={classes.typo}>Find the news you want by category</Typography>
            <SelectCategory error={error} helper={helper} setError={setError} setHelper={setHelper} />
            <Button
                className={classes.btn}
                type="submit"
                variant="contained"
            >
                <Typography variant="h6" className={classes.typoBtn}>find the news</Typography>
            </Button>
        </form>
    );
}

Form.propTypes = {
    setGlobalCategory: PropTypes.func.isRequired
}
export default Form;
