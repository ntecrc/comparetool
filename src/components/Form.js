import React, { Component } from 'react';

class TextArea extends Component {
    render () {
        return (
            <form>
                <textarea rows={50} cols={100} class="text1" style={{marginRight: 10}}></textarea>
                <textarea rows={50} cols={100} class="text2"></textarea>
            </form>
        )
        }
}

export default TextArea;