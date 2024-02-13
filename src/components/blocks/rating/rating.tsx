// @flow
import * as React from 'react';
import Star from "@/components/ui/star/star";

type TRating = {
    rate: number
};

const Rating: React.FC<TRating> = ({rate}) => {

    const stars = new Array(5).fill(rate);

    return (
        <div style={{display: 'flex'}}>
            {stars && stars.map((_, index) => <Star key={index}/>)}
        </div>
    );
};

export default Rating;