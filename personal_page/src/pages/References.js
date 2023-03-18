import React, { useState } from 'react';
import "../css/References.css";
// import MySVG from './media/ref_icon.svg';

const links = [
    { text: 'React', url: 'https://reactjs.org/' },
    { text: 'HTML', url: 'https://el.wikipedia.org/wiki/HTML' },
    { text: 'CSS', url: 'https://el.wikipedia.org/wiki/CSS' },
    { text: 'React icons', url: 'https://react-icons.github.io/react-icons' },
    { text: 'Javascript', url: 'https://en.wikipedia.org/wiki/JavaScript' },
    { text: 'Github', url: 'https://github.com/' },
    { text: 'Our World in Data', url: 'https://ourworldindata.org/' },    
  ];

function References() {
  const [isVisible, setIsVisible] = useState({ circle: true, square: true, triangle: true });
  const [animationState, setAnimationState] = useState('running');

  const handleShapeClick = () => {

    if (animationState==='running'){
      setAnimationState('paused');
    }
    else if(animationState==='paused'){
        setIsVisible({ circle: false, square: false, triangle: false });

    }

  };

  const handleShapeClick_showall = () => {
    setIsVisible({ circle: true, square: true, triangle: true });
    setAnimationState('running');
  };

	return (
		<div id='container_references'>
      <div className="column-1 box">
      <div style={{ display: 'table-cell',width:'100%',textAlign:'center'}}>
      <h5 >SVG shapes, starts with moving. If you click just one of them, the froze, of you click again they hidden. Then you could click the button to start again!</h5>

        <svg className='shapes' width="100%" height="400px">
          {isVisible.circle && (
            <circle

              cx="70"
              cy="70"
              r="50"
              fill="red"
              className="circle-animation"
              onClick={() => handleShapeClick()}
              style={{ animationPlayState: animationState }}
            />
          )}
          {isVisible.square && (
            <rect
              x="200"
              y="50"
              width="80"
              height="80"
              fill="green"
              className="square-animation"
              onClick={() => handleShapeClick()}
              style={{ animationPlayState: animationState }}
            />
          )}
          {isVisible.triangle && (
            <polygon
              points="25,150 125,150 75,100"
              fill="blue"
              className="triangle-animation"
              onClick={() => handleShapeClick("resumeAll")}
              style={{ animationPlayState: animationState }}
            />
          )}
        </svg>
        <button className='movebutton' onClick={() => handleShapeClick_showall()}>Show/ Move Again</button>

      </div>

      </div>
    	<div className="column-2 box">
			<div style={{ display: 'table-cell',width:'100%',textAlign:'justify'}}>

            <ul>
            {links.map((link) => (
              <li key={link.url}>
                <div className="link-container">
                  <div className="link-icon">{link.icon}</div>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="link-text">
                    {link.text}
                  </a>
                </div>
              </li>
            ))}
          </ul>
			</div>
    		</div>
    	</div>
	);
}
export default References;