import { makeStyles, Paper } from '@material-ui/core'
import clsx from 'clsx'
import React from 'react'

const useStyles = makeStyles(() => ({
    root: {
        minHeight: "100vh",
    }
}))

function Page( {children,className, ...props}) {

    const classes = useStyles();

    return (
        <Paper {...props} className={clsx(classes.root,className)}>
            {children}
        </Paper>
    )
}

export default Page;