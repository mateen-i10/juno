// ** MUI Components
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import React from "react";
import Button from "@mui/material/Button";

// ** Types
const UserProfileHeader = () => {
  // ** State


  return (
    <div>
      <Card>
        <CardContent>

          <div className="image-container">
            <img width='100%' height='100%' style={{objectFit: 'contain', borderRadius:'10px'}} alt='Juno Labs' src='/images/juno-banner-dashboard.png' />
            <div className="text-overlay">
                <h1>Welcome John Doe</h1>
                <h4>Welcome to JUNO Innovate lab!
                <br/>
                  You have no running labs.
                </h4>
                 <p style={{fontSize: '14px'}}>Click on the below button to run your first lab.</p>
                <Button variant='contained'>Create your First Lab</Button>
              </div>
          </div>

        </CardContent>
      </Card>
    </div>
  )
}

export default UserProfileHeader
