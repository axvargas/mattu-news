import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({

    paperFoot: {
        
        textAlign: 'center',
        backgroundColor: '#0277bd',
        borderRadius: '0px',
        width: '100%',
        color: 'white',
        minHeight: '48px'
    },
    typo:{
        padding: '10px',
        fontFamily: "'Raleway' , sans-serif",
        fontWeight: 'bold'
    }
 
}));
export default useStyles;