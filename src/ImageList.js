import React, { Component } from 'react'
import ImageItem from './ImageItem.js';


export default class ImageList extends Component {
    render() {
        return (
            <ul  className="images">
                {
                    this.props.images.map((image) => <ImageItem key={image} image={image} />)
                }
            </ul>
        )
    }
}
