import React, { Component } from 'react'
import Iframe from 'react-iframe'

export default function IframeSmart() {
    return (
        <div>
            <Iframe url="https://www.abraseuatendimento.com.br/#/smartauto/passo1"
        width="100%"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
        </div>
    )
}

