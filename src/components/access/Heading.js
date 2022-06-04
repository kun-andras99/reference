import React from 'react';

function Heading(props) {
    const Tag = 'h' + props.tag;
    return (
         <Tag>
             { props.children }
         </Tag>
    )
}

export default Heading;