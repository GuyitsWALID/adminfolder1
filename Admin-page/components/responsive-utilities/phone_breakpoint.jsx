import React from 'react';
import ResponsiveBreakpoint from './breakpoint';


export default function PhoneBreakpoints(props){
    return(
        <Breakpoints name="phone">
            {props.children}
        </Breakpoints>
    );
}