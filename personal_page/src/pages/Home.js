import React from 'react';

import "../css/Home.css";
import img from '../media/personal_photo.png';

function Home() {

	return (
		<div id='container2'>
    		<div className="column-1 box">
				
				<div style={{ display: 'table-cell',width:'100%',textAlign:'center'}}>
					<img className='personal_photo' src={img} width={300} alt="A descriptive text" />
					<h3>Grigoris Katrakazas</h3>
					<h4 ><strong>Full-Stack Developer</strong></h4>
				</div>
    		</div>
    		<div className="column-2 box">
			<div style={{ display: 'table-cell',width:'100%',textAlign:'justify'}}>

				<p>
					I am Grigoris Katrakazas, a full-stack developer with a strong passion for programming, particularly in web application development.  I have a Bachelor of Informatics and Telecommunications from the National and Kapodistrian University of Athens, where I specialized in Data and Knowledge Management. I also hold a Master of Computer Science from the same university. With extensive experience in programming languages such as Python, Flask, Django, HTML, CSS, React, JavaScript, C, C++, and Unix/Linux OS, I have worked on various projects throughout my short career. Currently, I am a software engineer at 8BELLS Research LTD, working on varius project as a full-stack developer.
				</p>
				<p>
				In my free time, I enjoy painting and sketching and have a degree in Byzantine church music. I am a team player and am committed to continuous learning and personal growth.
				</p>
				</div>
    		</div>
		</div>
	);
}
export default Home;