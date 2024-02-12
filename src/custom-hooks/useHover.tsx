// @flow 
import * as React from 'react';
import {useState} from "react";

type useAnimationType = (classNamePos: string, classNameNeg: string, element: React.MutableRefObject<any>) => {
    setHover: (value: (((prevState: boolean) => boolean) | boolean)) => void;
    isHover: boolean
}

const UseAnimation: useAnimationType = (classNamePos, classNameNeg, element) => {
    const [isHover, setHover] = useState(false);
    return {isHover, setHover}
};

export default UseAnimation;