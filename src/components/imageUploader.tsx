import React, { ChangeEvent, useState } from 'react';
import AddPointModal from './addPointModal';
import {IoChevronBack} from "react-icons/io5";
import {GiCancel} from "react-icons/gi";

interface MarkedPoint {
  id: number;
  name: string;
  coordinates: { x: number; y: number };
}

const ImageUploader: React.FC = () => {
  const [isUploadedImage, setIsUploadedImage] = useState<string | null>(null);
  const [markedPoints, setMarkedPoints] = useState<MarkedPoint[]>([]);
  const [clickCoordinates, setClickCoordinates] = useState<{ x: number; y: number } | null>(null);
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        if (e.target?.result) {
          setIsUploadedImage(e.target.result.toString());
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = (event: React.MouseEvent<HTMLImageElement>) => {
    // Get the coordinates of the click
    const { offsetX, offsetY } = event.nativeEvent;
    setClickCoordinates({ x: offsetX, y: offsetY });

    // Open the modal
    setIsModalOpened(true);
  };

  const handleViewPointsClick = () => {
    // Implement logic to show all marked points in a modal or other UI
    console.log('View Points clicked');
  };

  const handleAddPoint = (pointName: string) => {
    // Add the logic to add the point to your array or state
    if (clickCoordinates) {
      setMarkedPoints((prevPoints) => [
        ...prevPoints,
        {
          id: Date.now(),
          name: pointName,
          coordinates: clickCoordinates,
        },
      ]);
    }

    // Reset coordinates and close the modal
    setClickCoordinates(null);
    setIsModalOpened(false);
  };

  console.log(markedPoints)

  return (
    <div>
      {!isUploadedImage && (
        <div>
          <h4>Upload Image</h4>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </div>
      )}

      {isUploadedImage && (
        <div>

          <div className='header-scanner'>
            <div className='hcpd-sa'>
                <IoChevronBack color='white' size={30}/>
            </div>
          </div>
          {/* <h4>Uploaded Image</h4> */}
          <div style={{ position: 'relative', width:'100vw', height:'100vh' }}>
            <img
              src={isUploadedImage}
              alt="Uploaded"
              onClick={handleImageClick}
              style={{ cursor: 'crosshair', width: '100%', height: '100%', objectFit:'cover' }}
            />

            {/* Render marked points on the image */}
            {markedPoints.map((point, index) => (
              <div
                key={point.id}
                style={{
                  position: 'absolute',
                  top: point.coordinates.y,
                  left: point.coordinates.x,
                  cursor: 'pointer',
                  // width: '10px',
                  // height: '10px',
                  borderRadius: '50%',
                  display:'flex',
                  justifyContent:'center',
                  alignItems:'center'
                }}
              >
                <div style={{
                  backgroundColor: 'transparent',
                  width:'40px',
                  height:'40px',
                  border:'8px solid rgba(255, 255, 255, 0.25)', 
                  borderRadius:'50%'
                }}>
                  <div style={{background:'white', width:'25px', height:'25px', display:'flex', alignItems:'center', justifyContent:'center', borderRadius:'50%'}}>
                    {/* <span style={{color:'#696a62', fontWeight:'400', fontSize:'16px'}}>{index+1}</span> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{
              position:'absolute', 
              width:'100%', 
              height:'100px', 
              background:'white', 
              bottom:0, 
              borderTopRightRadius:'40px', 
              borderTopLeftRadius:'40px', 
              display:'flex', 
              alignItems:'center', 
              justifyContent:'center',
              paddingLeft:'30px',
              paddingRight:'30px'
          }}>
            <div className='dpdpa'>
              <span>{'7'} objects selected.</span>
              <p>Select atleast 5 objects.</p>
            </div>
          </div>

          {/* Button to view all marked points */}
          {/* <button onClick={handleViewPointsClick}>View All Points</button> */}
        </div>
      )}

      {isModalOpened && (
        <AddPointModal closeModal={() => setIsModalOpened(false)} addPoint={handleAddPoint} />
      )}
    </div>
  );
};

export default ImageUploader;
