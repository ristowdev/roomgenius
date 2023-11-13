import React, { useState } from 'react';
import PriceRangeSlider from './slider';

interface AddPointModalProps {
  closeModal: () => void;
  addPoint: (pointName: string) => void;
}

const AddPointModal: React.FC<AddPointModalProps> = ({ closeModal, addPoint }) => {
  const [pointName, setPointName] = useState<string>('');

  const handleAddPoint = () => {
    // Check if the user entered a name before adding the point
    if (pointName.trim() !== '') {
      addPoint(pointName);
    }

    // Reset the name and close the modal
    setPointName('');
    closeModal();
  }; 
  
  const handleRangeChange = (values: number[]) => {
    // Handle the range change as needed
    console.log('Price range changed:', values);
  };     


  return (
    <div className="modal" style={{ width: '100%', height: '100vh', zIndex: '999', position:'absolute', top:0, left:0 }}>
      <div className="modal-content">
        <div className='dspadppapp'>
          <h2>Enter your budget</h2>
          <p>In order to give you the most suitable products, you need to enter your budget.</p>
        </div>
        <form style={{width:'100%'}}>

        <div className='dsdddpdpep'>
          <div className='pp0epp'>
            <span>$</span>
          </div>
          <input
            type="text"
            placeholder="150"
            value={pointName}
            onChange={(e) => setPointName(e.target.value)}
          />
        </div>
        </form>

         {/* <PriceRangeSlider onRangeChange={handleRangeChange} /> */}

        <div className='md-d-a'>
          <button onClick={closeModal} style={{marginRight:'5px', background:'none', border:'1px solid #dcdcdc', color:'#767676'}}>Cancel</button>
          <button onClick={handleAddPoint} style={{background:'#0070EF', color:'white'}}>Done</button>
        </div>
      </div>
    </div>
  );
};

export default AddPointModal;
