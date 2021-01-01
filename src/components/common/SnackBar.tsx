import { makeStyles, Snackbar } from '@material-ui/core';
import React from 'react';

interface IProps {
    isOpen: boolean;
    message: string;
    autoHideDuration?: number;
    handle: () => void;
}

const useStyles = makeStyles(() => ({
    root: {
        '& > .MuiSnackbarContent-root': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    },
}));

/**
 * @param isOpen open state for modal
 * @param message snackbar message
 * @param autoHideDuration duration time for hiding snackbar
 * @param handle open/close handler
 */

const SnackBar: React.FC<IProps> = ({ isOpen, message, autoHideDuration = 2000, handle }) => {
    const classes = useStyles();

    const handleClose = (_: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        handle();
    };
    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            classes={{
                root: classes.root,
            }}
            onClose={handleClose}
            open={isOpen}
            message={message}
            autoHideDuration={autoHideDuration}
            className={classes.root}
        />
    );
};

export default React.memo(SnackBar);
