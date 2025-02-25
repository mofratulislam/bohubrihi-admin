import React from 'react';
import { Spinner, ListGroup } from 'reactstrap';
import Feature from './Feature';

const Features = ({features, selectFeature, FAIcon, icons, loading}) => {
    const featuresMap = [];
    for(let feat in features){
        const _feat = features[feat];
        featuresMap.push(<Feature
            key={feat}
            id={feat}
            selectFeature={selectFeature}
            icon={<FAIcon icon={icons[_feat.icon]}/>}
            name={_feat.name}
        />);
    }
    return <ListGroup className='featuresWrap'>
        {loading ? <Spinner className='mx-auto my-3 bg-info' /> : featuresMap}
    </ListGroup>;
}
export default Features;