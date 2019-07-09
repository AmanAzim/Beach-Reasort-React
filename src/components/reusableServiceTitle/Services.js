import React, {useState} from 'react';

import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
import Title from './Title'

const Services=()=>{

    const [services, setServices]=useState([
                    {   icon:<FaCocktail/>,
                        title:"Free Cocktails",
                        info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, possimus.'
                    },
                    {   icon:<FaHiking/>,
                        title:"Endless Hikings",
                         info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, possimus.'
                    },
                    {   icon:<FaShuttleVan/>,
                        title:"Free Shuttle",
                        info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, possimus.'
                    },
                    {   icon:<FaBeer/>,
                        title:"Strongest Beer",
                        info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, possimus.'
                    } ]);

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
}

export default Services;
