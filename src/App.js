import React from 'react';
import './App.css';
import Header from './Header.js';
import ImageList from './ImageList.js'
import { images } from './data.js';


let keywords = []
images.map(image => {
    
    if(!keywords.includes(`${image.keyword}`)) {
      keywords.push(`${image.keyword}`)
    }
    return keywords;
})

let horns = []
images.map(image => {
    
    if(!horns.includes(`${image.horns}`)) {
      horns.push(`${image.horns}`)
    }
    return horns;
})


class App extends React.Component {
  state = {
    keyFilter: 'narwhal',
    hornFilter: 1,
  }
  handleKeyword = (e) => {
    const keyword = e.target.value;

    this.setState({ keyFilter: keyword})
  }
  handleHorn = (e) => {
    const horn = Number(e.target.value);

    this.setState({ hornFilter: horn})
  }

  render() {

    const keywordImages = images.filter(image => image.keyword === this.state.keyFilter)
    const hornImages = images.filter(image => image.horns === this.state.hornFilter)
    
    return (
      <body>
        <Header />
        <main>
          <label>
            Filter Beasts By Species:
          <select onChange={this.handleKeyword} name="" id="">
            {
              keywords.map(keyword => <option key={keyword} value={keyword}>{keyword}</option>)
            }
          </select>
          </label>
          <ImageList images={keywordImages} />
          
          <label>
            Filter Beasts By Horns:
          <select onChange={this.handleHorn} name="" id="">
            {
              horns.map(horn => <option key={horn} value={horn}>{horn}</option>)
            }
          </select>
          </label>
          <ImageList images={hornImages} />

        </main>
      </body>
      );
  }
 
}

export default App;
