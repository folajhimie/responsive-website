import React from 'react';
import { InfoSection, Pricing } from '../../components';

import { homeObjOne } from './Data';

const Services = () => {
    return (
        <div>
            <Pricing/>
            <InfoSection {...homeObjOne}/>
        </div>
    )
}

export default Services;
