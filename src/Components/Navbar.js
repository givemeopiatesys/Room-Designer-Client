import React from 'react';
import logo from '../Styles/Images/small_logo.svg'
import '../Styles/CSS/navbar.css'
import PropTypes from "prop-types";
import {useSpring} from "@react-spring/web";
import {animated} from '@react-spring/web'
import {Backdrop, Input, Modal} from "@mui/material";
import {ReactComponent as Logo} from '../Styles/Images/logo-big.svg'

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

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div className={'main-container-navbar'}>
            <div className={'logo-container-navbar'}>
                <img className={'logo-navbar'} src={logo} alt={'Loading..'}/>
                <div className={'title-navbar'}>Room Designer</div>
            </div>
            <div className={'links-container-navbar'}>
                <button className={'link-button-navbar'}>rooms</button>
                <button className={'link-button-navbar'}>news</button>
                <button className={'link-button-navbar'}>about us</button>
                <button className={'link-button-navbar'}>faq</button>
                <button className={'link-button-navbar'}>catalogue</button>
                <button className={'link-button-navbar'}>support</button>
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
                                <Input className={'input-navbar'} placeholder="email"/>
                                <Input className={'input-navbar'} placeholder="password"/>
                                <button className={'login-button-navbar'} onClick={handleClose}>sign in</button>
                            </div>
                            <Logo/>
                        </form>
                    </Fade>
                </Modal>
                <select className={'language-select-navbar'}>
                    <option>english</option>
                    <option>russian</option>
                </select>
            </div>
        </div>
    );
};

export default Navbar;