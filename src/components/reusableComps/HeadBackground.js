import React from 'react';


const HeadBackground = ({children, cssClass, img}) => {

    let background=null;
    if(img){
      background={
        backgroundImage:`url(${img})`
      }
    }else{
        background={}
    }

    return (
        <header className={cssClass} style={background}>
            {children}
        </header>
    );
};

//Setting up default prop value
HeadBackground.defaultProps={
    cssClass:"defaultHero"
};

export default HeadBackground;
