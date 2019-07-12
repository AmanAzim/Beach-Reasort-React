import React, {useContext} from 'react';
import {ResortContext} from "../../contextStore/ResortContextProvider";

import Title from '../reusableComps/Title'


const Services=()=>{

    const contextResort=useContext(ResortContext);
    const {services}=contextResort;

    return (
        <section className="services">
            <Title title="services"/>
            <div className="services-center">
                {services.map(service=>{
                    return (
                      <article key={service.icon} className="service">
                          <span>{service.icon}</span>
                          <h6>{service.title}</h6>
                          <p>{service.info}</p>
                      </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Services;
