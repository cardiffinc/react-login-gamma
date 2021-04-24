import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button, Checkbox, Container, FormControlLabel } from '@material-ui/core';
import { useHistory } from 'react-router';
import StyledTextInput from '../StyledTextInput/StylesTextInput';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
    },
    formInputContentHolder:{
        marginTop: 25,
        marginBottom: 10
    },
    authInput: {
        marginTop: 15,
    },
    loginSubOptions: {
        marginTop: 25,
    },
    checkbox: {
        paddingLeft: 0,
    },
    authButton: {
        width: '-webkit-fill-available',
        textTransform: 'none',
        borderRadius: 12
    },
    heading: {
        marginTop: 5,
        color: theme.palette.primary
    },
    forgotPassword: {
        textAlign: 'end',
        color: '#989898'
    },
    checkboxLabel:{
        color: '#989898'
    },
    error: {
        marginRight: '5em',
        color: '#ff4747'
    },
    containerForm: {
        maxWidth: '30vw',
        padding: '3em',
        margin: '10vw auto',
        background: '#fff',
        textAlign: 'center',
        borderRadius: 20
    },
    addonGrid: {
        textAlign: 'start',
        paddingLeft: 10,
    }
}));

function Login() {
    const classes = useStyles();
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disableButton, setDisableButton] = useState(true);
    const [error, setError] = useState(null);
    document.title = 'SJoshuadarth\'s Template | Login';

    const checkUserExists = user => {
        return email === user.email;
    }

    const handleLogin = event => {
        event.preventDefault();
        var userExists = [];
        try {
            const users = JSON.parse(localStorage.getItem('darthUsers'));
            userExists = users.filter(checkUserExists);
            history.push('/');
        } catch (error) {
            console.log(error)
        }
        if (userExists.length > 0) {
            if (userExists[0].password === password) {
                localStorage.setItem('currentDarthUser', JSON.stringify(userExists[0]));
                history.push('/');
            } else setError('Password is incorrect. Please try again!')
        } else setError('No such user found. Please signup!')
    }

    useEffect(() => {
        if (error) setDisableButton(true)
        else setDisableButton(false);
    }, [error])

    useEffect(() => {
        setError(null);
        if (email !== '' && password !== '') {
            setDisableButton(false)
        } else setDisableButton(true)
    }, [email, password])

    const configEmailInput = {
        id: "email-input",
        label: "Email",
        type: "email"
    }

    const configPasswordInput = {
        id: "password-input",
        label: "Password",
        type: "password"
    }
    return (
        <div className={classes.root}>
            <Container className={classes.containerForm} center>
            <h1 className={classes.heading}>
                            Welcome Back
                        </h1>
                        <span>Don't have an account? <Link to='/signup'>Sign up</Link></span>

                        <form onSubmit={handleLogin}>
                            <div className={classes.formInputContentHolder}>
                                <StyledTextInput {...configEmailInput} handleChange={event => setEmail(event.target.value)} />
                                <StyledTextInput {...configPasswordInput} handleChange={event => setPassword(event.target.value)} />
                                <Grid container alignItems="center" className={classes.addonGrid}>
                                <Grid item xs={6}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                name="checkedB"
                                                color="secondary"
                                                className={classes.checkbox}
                                            />
                                        }
                                        label="Keep me logged in"
                                        className={classes.checkboxLabel}
                                    />
                                </Grid>
                                <Grid item xs={6} className={classes.forgotPassword}>
                                    <span>Forgot Password?</span>
                                </Grid>
                            </Grid>
                            </div>
                            {error &&
                                <p className={classes.error}>{error}
                                </p>}
                            <Button 
                                id="signin-button" 
                                variant="contained" 
                                size="large" 
                                color="primary" 
                                className={classes.authButton} 
                                type="submit" disabled={disableButton}>
                                Sign In
                            </Button>
                        </form>
            </Container>
        </div>
    );
}

export default Login
