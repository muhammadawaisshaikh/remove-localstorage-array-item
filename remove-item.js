// remove favrourite
  removeFav(index){
    var items = JSON.parse(localStorage.getItem("items")).splice(index, 1);
    localStorage.setItem('items', JSON.stringify(items));
    
    // update state with newly marked favourite films
    this.setState({
      favourites: JSON.parse(localStorage.getItem("items"))
    });
  }
