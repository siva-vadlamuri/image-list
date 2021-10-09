
import './App.css';
import SearchBar from './Components/SearchBar';
import ImageList from './Components/ImageList';
import Header from './Components/Header';
import React from 'react';
import DummyApi from './Components/DummyApi';

class  App extends React.Component {

  state= {
    searchTerm : '',
    results : [{}],
  }

  onSearchSubmit =  async(searchItem)=>{
    this.setState({searchTerm:searchItem});
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${searchItem}`,{
       
        headers: {
          Authorization : 'Client-ID sjJyQTp3puuP_cdgk6h3qg_4Wi_S6yAbOFPABAaXPXk'
        }
    })
    const data = await  response.json();
    // console.log(data);
    this.setState({results: data.results});
  }

render(){

  return (
    <div>
      <Header/>
      {/* <SearchBar searchSubmit={this.onSearchSubmit} />
      <ImageList data={this.state.results}/> */}
      <DummyApi/>
    </div>
  );

}
  
}

export default App;
