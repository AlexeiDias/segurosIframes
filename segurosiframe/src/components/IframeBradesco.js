import React, { Component } from 'react'
import Iframe from 'react-iframe'

export default function iframeBradesco() {
    return (
        <div>
            <Iframe url="https://www.abraseuatendimento.com.br/#/bradesco/passo1"
        width="100%"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
        </div>
    )
}

