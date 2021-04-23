import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Checkbox, Container, Divider, FormControlLabel } from '@material-ui/core';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { useHistory } from 'react-router';
import './styles.css'
import StyledTextInput from '../StyledTextInput/StylesTextInput';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        margin: 0
    },
    authInput: {
        marginTop: 15,
    },
    checkFormControlLabel: {
        marginTop: 15,
        width: 'fit-content',
        display: 'block',
        marginRight: 0,
        marginLeft: 0
    },
    checkbox: {
        paddingLeft: 0
    },
    authButtonBG: {
        marginTop: 10,
        width: '-webkit-fill-available',
        textTransform: 'none',
        borderRadius: 12
    },
    heading: {
        marginTop: 5,
        color: theme.palette.primary,
        marginBottom: 10
    },
    error: {
        color: '#ff4747'
    },
    errorIcon: {
        verticalAlign: 'middle'
    },
    inputWrapper: {
        marginTop: 25
    },
    containerForm: {
        maxWidth: '30vw',
        padding: '3em',
        margin: '10vw auto',
        background: '#fff',
        textAlign: 'center',
        borderRadius: 20
    }
}));

function Signup() {
    const classes = useStyles();
    const history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [policy, setPolicy] = useState(false);
    const [disableButton, setDisableButton] = useState(true);
    const [error, setError] = useState(null);
    document.title = 'SJoshuadarth\'s Template | Signup';

    const checkUserExists = user => {
        return email === user.email;
    }

    const isUniqueEmail = () => {
        try {
            const users = JSON.parse(localStorage.getItem('darthUsers'));
            const userExists = users.filter(checkUserExists);
            if (userExists.length > 0) {
                setError('This email is already being used by another member.\nPlease signup with another email!')
                return false;
            } else {
                setError(null);
                return true;
            }
        } catch (error) {
            setError(null);
            return true;
        }
    }

    const handleSignup = event => {
        event.preventDefault();
        if (isUniqueEmail()) {
            const user = { name, email, password }
            var users = [];
            try {
                users = JSON.parse(localStorage.getItem('darthUsers'));
                users.push(user);
            } catch (error) {
                users = [user]
                console.log(error)
            }
            localStorage.setItem('darthUsers', JSON.stringify(users));
            localStorage.setItem('currentDarthUser', JSON.stringify(user));
            history.push('/');
        } else setError('This email is already being used by another member.\nPlease signup with another email!');
    }

    useEffect(() => {
        setError(null);
        if (name !== '' && email !== '' && password !== '' && policy) {
            setDisableButton(false)
        } else setDisableButton(true)
    }, [name, email, password, policy])

    useEffect(() => {
        isUniqueEmail();
    }, [email])

    useEffect(() => {
        if (error) setDisableButton(true)
        else setDisableButton(false);
    }, [error])

    const configNameInput = {
        id: "name-input",
        label: "Name",
        type: "name"
    }

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
                            Create Account
                        </h1>
                        <span>Already have an account? <Link to='/login'>Sign in</Link></span>

                        <form onSubmit={handleSignup}>
                            <div className={classes.inputWrapper}>
                                <StyledTextInput
                                    {...configNameInput}
                                    handleChange={event => setName(event.target.value)} />
                                <StyledTextInput
                                    {...configEmailInput}
                                    handleChange={event => setEmail(event.target.value)} />
                                <StyledTextInput
                                    {...configPasswordInput}
                                    handleChange={event => setPassword(event.target.value)} />
                            </div>
                            {error &&
                                <p className={classes.error}><ErrorOutlineIcon className={classes.errorIcon} /> {error}
                                </p>}
                                <Button
                                        fullWidth
                                        id="signup-button"
                                        variant="contained"
                                        size="large"
                                        color="primary"
                                        className={classes.authButtonBG}
                                        type="submit"
                                        style={{ color: '#fff' }}
                                        disabled={disableButton}>
                                        Sign Up
                                    </Button>
                                    <FormControlLabel
                                control={
                                    <Checkbox
                                        name="checkedB"
                                        color="secondary"
                                        className={classes.checkbox}
                                        onClick={event => event.target.checked ? setPolicy(true) : setPolicy(false)}
                                    />
                                }
                                label="I have read and agreed to the Terms of Service"
                                className={classes.checkFormControlLabel}
                            />
                        </form>
            </Container>
        </div>
    );
}

export default Signup
