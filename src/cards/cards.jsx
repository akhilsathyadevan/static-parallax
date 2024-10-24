import './cards.css';

function Cards(){
  return(    
    <div className="card-gallery">
      <h2 className="gallery-heading">From The Resource Center</h2>
    <div className="card-container">
      <img 
        src="https://picsum.photos/id/669/300/300" 
        alt="the back of random person"
      />
      <img 
        src="https://assets.codepen.io/1480814/pexels-pixabay-62655.jpg" 
        alt="an eagle" 
        style={{ "--f": ".12", "--r": "5px" }}
      />
      <img 
        src="https://picsum.photos/id/326/300/300" 
        alt="a cup of something to drink, probably some tea" 
        style={{ "--f": ".08", "--r": "20px" }}
      />
      <img 
      src="https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb"
      alt="a cup of something to drink, probably some tea" 
      style={{ "--f": ".08", "--r": "20px" }} />
    </div>
    </div>
  );
}

export default Cards;
