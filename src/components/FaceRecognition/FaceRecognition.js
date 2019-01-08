import React from 'react';
import './FaceRecognition.css';
const FaceRecognition = ({imageUrl,box}) => {
	return (
     <div className='center ma'>
     <div className='absolute mt2'>
     <img id='inputimage' alt=' ' src={imageUrl} width='auto' height='auto'/>
     {
        	box.map((boxItem,i)=>{
        		return (
        			<div key={i} className='bounding-box' style={{top: boxItem.topRow, right: boxItem.rightCol, bottom: boxItem.bottomRow, left: boxItem.leftCol}}></div>
        		)
        	})
        }
     {/*<div className='bounding-box' style={{ top:box.topRow, left:box.leftCol, bottom:box.bottomRow ,right:box.rightCol}}></div>*/}
     </div>
    </div>

		);

}
export default FaceRecognition;