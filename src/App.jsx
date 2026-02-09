import { useState } from 'react'
import './App.css'
import backgroundImage from './assets/background.jpg'
import imageCouple from './assets/couple.jpg'

const initialRomanticMessage = "Bidhya, 11 years later and you’re still the first person I want to tell everything to. I don’t want you to be my Valentine just because we're married. I want to ask because I still choose you, every single day.";

const phrases = [
  "Are you sure?", 
  "Really sure?", 
  "Think again!", 
  "Last chance!", 
  "Surely not?", 
  "You're heartless!", 
  "Please? 🥺", 
  "Why are you being so mean!"
];

const sadGifs = [
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExY245c210Y2EweDRvNnN5OGg4N2ZwZzk5anBiYjkzdHRhbXQ0cXY2YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/W0c3xcZ3F1d0EYYb0f/giphy.gif",
  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzFnc2EyaGFyZ2hhMDlzZHA2dDA0aGMzNmJya3YzNDEyNHo1YzZpbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/12Bpme5pTzGmg8/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnI0dmg5YTF6amwzdWZ6dmc4aHBtcHo3aHNjb3RibDdjNXFmbWg4OSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/P53TSsopKicrm/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnI0dmg5YTF6amwzdWZ6dmc4aHBtcHo3aHNjb3RibDdjNXFmbWg4OSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/dCwNmR9BBOzKpiBQOs/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnI0dmg5YTF6amwzdWZ6dmc4aHBtcHo3aHNjb3RibDdjNXFmbWg4OSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1BXa2alBjrCXC/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NnIweGc4bG8zbm1jZjltdTd0ZG9mcHNjMnBvcmtneDRzeDF4dXo2bCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ruyS8Zw9sBqE5UjOnY/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NzZ1cHd3dG56bmMweGl2YmcwYW81Y2FwenkzNzR2YjF1enZuNmtwYiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/OYTxmrJq3SlBNHtG6q/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3aTZyZzQyaDM5dzlpN2JxNWJoMDZvMTU4dWZkOTQwcXhjeHY0OGtlZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/goQ4bc8X0Lh6w/giphy.gif"
]

function App() {
  const [noProps, setNoProps] = useState({ top: 'auto', left: 'auto', isMoved: false });
  const [msgIndex, setMsgIndex] = useState(-1); 
  const [accepted, setAccepted] = useState(false);

  const handleNoInteraction = (e) => {
    if (e.type === 'touchstart') e.preventDefault();
    
    const randomTop = Math.floor(Math.random() * 70) + 15;
    const randomLeft = Math.floor(Math.random() * 70) + 15;
    
    setNoProps({ top: `${randomTop}%`, left: `${randomLeft}%`, isMoved: true });
    setMsgIndex((prev) => prev + 1);
  };

  const bgStyle = { backgroundImage: `url(${backgroundImage})` };

  if (accepted) {
    return (
      <div className="page-wrapper" style={bgStyle}>
        <div className="card wider-card">
          <img className='myImage' src={imageCouple} alt="Our Image" />
          <h1 className="success-text">I knew you'd say yes! Tuku ❤️✨. Thats me dancin</h1>
          <img className="gif" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExazhvM2YxaHZiODAwMjc0bTh6cDg3aThwd2EzOHVmaG40MGh0ODU5eiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/tlawNnswcTAmGjKRHQ/giphy.gif" alt="celebration" />
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrapper" style={bgStyle}>
      {/* GIF only appears after the first interaction with "No" */}
      {msgIndex >= 0 && (
        <img className="sad-gif" src={sadGifs[msgIndex % sadGifs.length]} alt="sad" />
      )}
      
      <div className="card wider-card">
        <h1 className="title">Will you be my Valentine, Budi? 🌹</h1>
        
        <div className="message-display">
        {msgIndex === -1 ? (
            <span className="initial-msg">{initialRomanticMessage}</span>
          ) : (
            <span className="phrase-msg">{phrases[msgIndex % phrases.length]}</span>
          )}
        </div>

        <div className="btn-group">
          <button className="yes-btn" onClick={() => setAccepted(true)}>Yes</button>
          
          <button
            className="no-btn"
            style={{ 
              position: noProps.isMoved ? 'fixed' : 'relative', 
              top: noProps.top, 
              left: noProps.left 
            }}
            onMouseEnter={handleNoInteraction}
            onTouchStart={handleNoInteraction}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;