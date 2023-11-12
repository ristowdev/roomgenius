import React, { useState } from 'react';

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

  return (
    <div className="modal" style={{ width: '100%', height: '100vh', zIndex: '999', position:'absolute', top:0, left:0 }}>
      <div className="modal-content">
        <div className='dspadppapp'>
          <h2>Add Point</h2>
        </div>
        <input
          type="text"
          placeholder="Enter the name for this point"
          value={pointName}
          onChange={(e) => setPointName(e.target.value)}
        />
        <div className='md-d-a'>
          <button onClick={closeModal} style={{marginRight:'10px', background:'none', border:'1px solid #dcdcdc', color:'#767676'}}>Cancel</button>
          <button onClick={handleAddPoint} style={{background:'#0070EF'}}>Done</button>
        </div>
      </div>
    </div>
  );
};

export default AddPointModal;
