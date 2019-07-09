import React from 'react';


const HeadBackground = ({children, cssClass}) => {
    return (
        <header className={cssClass}>
            {children}
        </header>
    );
};

//Setting up default prop value
HeadBackground.defaultProps={
    cssClass:"defaultHero"
}

export default HeadBackground;
