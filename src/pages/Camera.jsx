import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from '@material-tailwind/react';

export default function Camera() {
  const VideoRef = useRef(null);
  const canvasRef = useRef(null);
  const [photo, setPhoto] = useState(null);
  const [streaming, setStreaming] = useState(false);
  const width = 320;
  const [height, setHeight] = useState(0);

  const handleCanPlay = () => {
    if (!streaming) {
      const video = VideoRef.current;
      if (video) {
        const computedHeight = (video.videoHeight / video.videoWidth) * width;
        setHeight(isNaN(computedHeight) ? width / (16 / 9) : computedHeight);

        video.setAttribute('width', width);
        video.setAttribute('height', height);
        canvasRef.current.setAttribute('width', width);
        canvasRef.current.setAttribute('height', computedHeight);
        setStreaming(true);
      }
    }
  };

  const clearPhoto = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.fillStyle = '#AAA';
    context.fillRect(0, 0, canvas.width, canvas.height);
    setPhoto(canvas.toDataURL('image/png'));
  };

  const takePicture = () => {
    const canvas = canvasRef.current;
    const video = VideoRef.current;
    const context = canvas.getContext('2d');
    if (width && height) {
      canvas.width = width;
      canvas.height = height;
      context.drawImage(VideoRef.current, 0, 0, width, height);
      const data = canvas.toDataURL('image/png');
      setPhoto(data);
    } else {
      clearPhoto();
    }
  };

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });
        if (VideoRef.current) {
          VideoRef.current.srcObject = stream;
          VideoRef.current.play();
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };
    startCamera();
    return () => {
      if (VideoRef.current && VideoRef.current.srcObject) {
        const tracks = VideoRef.current.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <>

      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="w-full sm:w-96 relative rounded-xl shadow-xl">
          <CardHeader floated={false} className="h-80 p-0">
            <div className="relative w-full h-full">
              <video
                ref={VideoRef}
                onCanPlay={handleCanPlay}
                style={{
                  display: streaming ? 'block' : 'none',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '12px 12px 0 0', // rounded top corners
                }}
              />
              <canvas ref={canvasRef} style={{ display: 'none' }} />
            </div>
          </CardHeader>
          <CardBody className="text-center py-4">
          <div className="mt-4">
              <button
                onClick={takePicture}
                className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-xl hover:bg-blue-600 transition-colors"
              >
                Take Picture
              </button>
            </div>
            {photo && (
              <div className="mt-4">
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  Captured Image
                </Typography>
                <img src={photo} alt="Captured" className="rounded-lg shadow-lg w-full max-w-sm mx-auto" />
              </div>
            )}
          </CardBody>
        </Card>
      </div>
    </>
  );
}
