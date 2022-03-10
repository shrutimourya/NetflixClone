import Row from './Row';
import './App.css';
import request from './request';
import React from 'react'
import Banner from './Banner';
import Navbar from './Navbar';
function App() {
  return (
    <div className="App">
     
     <Navbar/>
     <Banner/>
     <Row title= "NETFLIX ORGINAL" fetchurl={request.fetchNetflixOriginals} isLargeRow/>
     <Row title="TRENDING NOW" fetchurl={request.fetchTrending}/>
     <Row title="TOP RATED" fetchurl={request.fetchTopRated}/>
     <Row title="ACTION MOVIES" fetchurl={request.fetchActionMovies}/>
     <Row title="COMEDY MOVIES" fetchurl={request.fetchComedyMovies}/>
     <Row title="HORROR MOVIES" fetchurl={request.fetchHorrorMovies}/>
     <Row title="ROMANCE MOVIES" fetchurl={request.fetchRomanceMovies}/>
     <Row title="DOCUMENTARIES" fetchurl={request.fetchDocumantaries}/>
    </div>
  );
}

export default App;
