import React from 'react'
import { InfoSection } from '../../components';
import { homeObjOne, homeObjTwo } from './Data';

const Products = () => {
    return (
        <div>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
        </div>
    )
}

export default Products
