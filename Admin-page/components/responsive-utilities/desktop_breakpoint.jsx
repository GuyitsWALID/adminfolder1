import React from 'react';
import ResponsiveBreakpoint from './breakpoint';

export default function DesktopBreakpoint(props){
    return (
        <Breakpoint name="desktop">
            {props.children}
        </Breakpoint>
    );
}