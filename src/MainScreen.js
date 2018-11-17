import React, { Component } from 'react';

class MainScreen extends Component {
    render() {
        return(
            <div className="main-screen-wrapper">
                <div className="main-screen" style={{backgroundImage: `url(/resource/bg/${this.props.bgSrc})`}}>
                    <TextWindow header="Tus" text='Wew lad.'/>
                </div>
            </div>
        )
    }
}

class TextWindow extends Component {
    renderHeader() {
        return this.props.header ? <h3 className="text-window-header">{this.props.header}</h3> : null 
    }

    render() {
        return (
            <div className="text-window">
                {this.renderHeader()}
                <p className="text-window-content">{this.props.text}</p>
            </div>
        )
    }
}

export default MainScreen