import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    typo: {
        fontFamily: "'Raleway' , sans-serif",
        textTransform: 'uppercase',
        textAlign: 'center',
        color: 'black',
        fontWeight: '900',
        marginTop: '15px',
    },
    searcher: {
        marginTop: '2rem',
        marginBottom: '2rem',
        textAlign: 'left'
    },
    btn: {
        marginTop: '25px',
        marginBottom: '25px',
        width: '100%',
        backgroundColor: '#ffa000',
        color: 'white',
        borderRadius: '0px',
        "& .MuiButton-label": {
            paddingTop: '5px',
            paddingBottom: '5px'
        },
        '&:hover': {

            backgroundColor: '#ff8f00',
        },
    },
    typoBtn: {
        fontFamily: "'Raleway' , sans-serif",
        fontWeight: '700',
        textAlign: 'center',
    }
}));
export default useStyles;