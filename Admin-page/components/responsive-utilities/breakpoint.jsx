import React from 'react';
import {useMediaQuery} from 'react-responsive';

const Breakpoint = {
    desktop: 992,
    tablet: 768,
    phone: 576,
};

const {string, object} = React.PropTypes;

export default function ResponsiveBreakpoint(props){
    const breakpoint = breakpoints[props.name] || breakpoints.desktop;

    return (
        <Responsive minWidth={breakpoint}>
            {props.children}
        </Responsive>
    );
}

React.propTypes = {
    name: string,
    children: object,   
}