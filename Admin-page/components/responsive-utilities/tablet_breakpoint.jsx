import React from 'react';
import ResponsiveBreakpoint from 'breakpoint';

export default function TabletBreakpoint(props){
    return(
        <Breakpoint name="tablet">
            {props.children}
        </Breakpoint>
    );
}