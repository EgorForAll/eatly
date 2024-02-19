// @flow
import * as React from 'react';
import { HashLink } from 'react-router-hash-link';

type TAnchor = {
    title: string,
    href: string,
    className: string
};

const AnchorLink: React.FC<TAnchor> = ({href, title, className}) => {
    return (
        <HashLink to={`${href}`} className={className} smooth>{title}</HashLink>
    );
};

export default AnchorLink;