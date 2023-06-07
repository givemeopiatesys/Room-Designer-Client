import React, {useState} from 'react';
import logo from '../Styles/Images/small_logo.svg'
import '../Styles/CSS/navbar.css'
import PropTypes from "prop-types";
import {useSpring} from "@react-spring/web";
import {animated} from '@react-spring/web'
import {Backdrop, Input, Modal} from "@mui/material";
import {ReactComponent as Logo} from '../Styles/Images/logo-big.svg'
import {login} from "../http/userAPI";
import {useNavigate} from "react-router-dom";


const Fade = React.forwardRef(function Fade(props, ref) {
    const {
        children,
        in: open,
        onClick,
        onEnter,
        onExited,
        ownerState,
        ...other
    } = props;
    const style = useSpring({
        from: {opacity: 0},
        to: {opacity: open ? 1 : 0},
        onStart: () => {
            if (open && onEnter) {
                onEnter(null, true);
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited(null, true);
            }
        },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
            {React.cloneElement(children, {onClick})}
        </animated.div>
    );
});


Fade.propTypes = {
    children: PropTypes.element.isRequired,
    in: PropTypes.bool,
    onClick: PropTypes.any,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
    ownerState: PropTypes.any,
};

const Navbar = () => {
    const navigate = useNavigate();

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [open, setOpen] = React.useState(false);

    const handleClick = async (e) => {
        e.preventDefault();
        const response = await login(email,password)
        console.log(response)
        handleClose()
    }

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div className={'main-container-navbar'}>
            <div className={'logo-container-navbar'}>
                <img onClick={()=>{navigate("/")}} className={'logo-navbar'} src={logo} alt={'Loading..'}/>
                <div onClick={()=>{navigate("/")}} className={'title-navbar'}>Room Designer</div>
            </div>
            <div className={'links-container-navbar'}>
                <button onClick={()=>{navigate("/rooms")}} className={'link-button-navbar'}>rooms</button>
                <button onClick={()=>{navigate("/news")}}  className={'link-button-navbar'}>news</button>
                <button onClick={()=>{navigate("/about us")}} className={'link-button-navbar'}>about us</button>
                <button onClick={()=>{navigate("/faq")}} className={'link-button-navbar'}>faq</button>
                <button onClick={()=>{navigate("/catalogue")}} className={'link-button-navbar'}>catalogue</button>
            </div>
            <div className={'auth-language-container-navbar'}>
                <button className={'login-button-navbar'} onClick={handleOpen}>login</button>
                <Modal
                    aria-labelledby="spring-modal-title"
                    aria-describedby="spring-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    slots={{backdrop: Backdrop}}
                    slotProps={{
                        backdrop: {
                            TransitionComponent: Fade,
                        },
                    }}
                >
                    <Fade in={open}>
                        <form className={'form-navbar'}>
                            <div>
                                <Input onChange={e=>setEmail(e.target.value)} className={'input-navbar'} placeholder="email"/>
                                <Input onChange={e=>setPassword(e.target.value)} type={'password'} className={'input-navbar'} placeholder="password"/>
                                <button  className={'login-button-navbar'} type={'submit'} onClick={handleClick}>
                                    sign in
                                </button>
                            </div>
                            <Logo/>
                        </form>
                    </Fade>
                </Modal>
                {/*<select className={'language-select-navbar'}>*/}
                {/*    <option>english</option>*/}
                {/*    <option>russian</option>*/}
                {/*</select>*/}
            </div>
        </div>
    );
};

export default Navbar;