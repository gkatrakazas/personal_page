import React from 'react';

import "../css/Datavisualization.css";
import data_img from '../media/ai_img.png';

function Datavisualization() {

	return (
		<div id='container_data_visualization'>
			<div style={{ display: 'table-cell',width:'100%',textAlign:'center'}}>
				<img className='data_img' src={data_img} style={{width:'70%'}} alt="A descriptive text" />

				<div id='content_data_visualization'>
					<p>
						I chose the visualized data on the language and image recognition capabilities of AI systems because I find it to be a fascinating topic that is relevant to our daily lives. The development of AI in the last two decades has been phenomenal and this data provides a great overview of how far AI has come in terms of recognizing language and images. The chart clearly shows how AI systems have become steadily more capable and are now outperforming humans in tests across multiple domains.				
					</p>
					<p>
						Furthermore, the chart highlights the significance of this development by comparing the performance of AI systems to that of humans. The comparison is made by setting the initial performance of the AI system to -100 and human performance as the baseline set to zero. This makes it easy to understand when the AI system has outperformed humans, as it is represented by the performance crossing the zero line. This visual representation of the data makes it easier for us to understand the magnitude of the progress made in this field and the potential impact it can have in the future.
					</p>
				</div>

			</div>

    	</div>
	);
}
export default Datavisualization;