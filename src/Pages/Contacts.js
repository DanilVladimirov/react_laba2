import React, {
    Component,
    useState,
    useEffect
} from "react";
import {
    Form,
    Button
} from "react-bootstrap";
export default function Contacts() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [email, setEmail] = useState('')
    const [text, setText] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [textDirty, setTextDirty] = useState(false)
    const [emailError, setEmailError] = useState('Email не може бути порожнім')
    const [textError, setTextError] = useState('Пароль не може бути порожнім')
    const [formValid, setFormValid] = useState(false)

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!re.test(String(e.target.value.toLowerCase()))) {
            setEmailError('Некоректний email')
        } else {
            setEmailError('')
        }
    }
    
    const textHandler = (e) => {
        setText(e.target.value)
        if (e.target.value.length < 5 || e.target.length > 500) {
            setTextError('Текст повинен мати не менше 5 і не більше 500 символів')
            if (!e.target.value) {
                setTextError('Текст не може бути порожнім')
            }
        } else {
            setTextError('')
        }
    }
    
    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'text':
                setTextDirty(true)
                break
        }
    }
    
    useEffect(() => {
        if (emailError || textError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, textError])


    return (
        <Form>
            <Form.Group controlId="fromBasicEmail">
                <Form.Label>Email Address</Form.Label>
                {(emailDirty && emailError) && <div style={{ color: "red" }}>{emailError}</div>}
                <Form.Control onChange={e => emailHandler(e)} name="email" value={email} onBlur={e => blurHandler(e)} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="fromBasicFeedback">
                <Form.Label>Відгук</Form.Label>
                {(textError && textDirty) && <div style={{ color: "red" }}>{textError}</div>}
                <Form.Control onChange={e => textHandler(e)} name="text" value={text} onBlur={e => blurHandler(e)} type="text" placeholder="Enter text">
                </Form.Control>
            </Form.Group>

            <Button disabled={!formValid} variant="primary" type="submit">
                Submit
            </Button>
    </Form>
    );

}
