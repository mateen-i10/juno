import React, {useRef, useState} from 'react';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Icon from "../../../../../@core/components/icon";

const RightCol = () => {

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const togglePlay = () => {
    if (videoRef.current?.play()) {
      videoRef.current;
      setIsPlaying(true);
    } else {
      videoRef.current?.pause();
      setIsPlaying(false);
    }
  };


  return (
    <div>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <h4 style={{paddingLeft: '23px'}}>Short Demo</h4>
        </Grid>
        <Grid item md={12} sx={{ pb: 4 }}>
          <Card style={{marginRight: '20px', marginLeft: '20px'}}>
            <div className='image-container'>
              {/*<img width='100%' height='100%' style={{objectFit: 'contain', borderRadius:'10px', filter: 'brightness(35%)'}} alt='Juno Labs' src='/images/videoImg.png' />*/}
              <video ref={videoRef} poster="/images/videoImg.png" controls width='100%' height='100%' style={{objectFit: 'contain', borderRadius:'10px', filter: 'brightness(35%)'}}>
                <source src="/images/Nature-Beautiful.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {!isPlaying && (
                <div className="play-button" onClick={togglePlay}>
                  <Icon icon='streamline:entertainment-control-button-play-button-television-buttons-movies-play-tv-video-controls' fontSize={40} />
                </div>
              )}
            </div>
            <CardContent>
              <Typography variant='h4' sx={{ mb: 2 }}>
                Video 1
              </Typography>
              <Typography variant='body2'>
                Some quick example to Guide
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default RightCol;
