import React from 'react';

interface Props {
    children: any;
    show?: boolean;
    hide?: boolean;
}

export function If(props: Props) {
    const hide = props.hide !== undefined && props.hide === true;
    const show = props.show !== undefined && props.show === false;
    return show || hide ? <></> : props.children;
};

