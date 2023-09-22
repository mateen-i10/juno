import React, {Fragment, useState} from 'react';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {FormControl} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import { useDropzone } from 'react-dropzone'
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import {appRoutes} from "../../../../routes/client-app-routes";

interface FileProp {
  name: string
  type: string
  size: number
}

const EditDataSource = () => {

  // ** State
  const [files, setFiles] = useState<File[]>([])

  // ** Hooks
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles: File[]) => {
      setFiles(acceptedFiles.map((file: File) => Object.assign(file)))
    }
  })

  const renderFilePreview = (file: FileProp) => {
    if (file.type.startsWith('image')) {
      return <img width={38} height={38} alt={file.name} src={URL.createObjectURL(file as any)} />
    } else {
      return <Icon icon='tabler:file-description' />
    }
  }

  const handleRemoveFile = (file: FileProp) => {
    const uploadedFiles = files
    const filtered = uploadedFiles.filter((i: FileProp) => i.name !== file.name)
    setFiles([...filtered])
  }

  const fileList = files.map((file: FileProp) => (
    <ListItem key={file.name} className='liSet'>
      <div className='file-details'>
        <div className='file-preview'>{renderFilePreview(file)}</div>
        <div>
          <Typography className='file-name'>{file.name}</Typography>
          <Typography className='file-size' variant='body2'>
            {Math.round(file.size / 100) / 10 > 1000
              ?  (Math.round(file.size / 100) / 10000).toFixed(1) + 'mb'
              : (Math.round(file.size / 100) / 10).toFixed(1) + 'kb'}
          </Typography>
        </div>
      </div>
      <IconButton onClick={() => handleRemoveFile(file)}>
        <Icon icon='tabler:x' fontSize={20} />
      </IconButton>
    </ListItem>
  ))

  const handleRemoveAllFiles = () => {
    setFiles([])
  }


  return (
    <div>
      <Grid container spacing={12}>
        <Grid item xs={12} md={12} style={{marginLeft: '10px'}}>
          <h2 style={{color: 'rgb(122 121 127)'}} title={'Error Detail'}>Edit Data Source</h2>
        </Grid>
      </Grid>

      <Grid container spacing={6}>

        <Grid item md={12}>
          <Card sx={{ position: 'relative'}}>

            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  marginTop: -4,
                  justifyContent: 'space-between'
                }}
              >
                <Grid container spacing={2}>

                  <Grid item md={6}>
                    <Typography variant='h5' sx={{color: 'rgb(102 97 120 / 78%)', marginBottom: '20px'}}>Data Source Info:</Typography>

                    <Typography variant='h6' sx={{marginBottom: '10px'}}>Data Source Name:</Typography>
                    <FormControl fullWidth>
                      <TextField
                        multiline
                        fullWidth
                        size='small'
                        type='text'
                        label='Name'
                        placeholder='Enter Name'
                      />
                    </FormControl>

                  </Grid>

                  <Grid item md={6}></Grid>

                  <Grid item md={6} sx={{mt: 4}}>

                    <Typography variant='h6' sx={{marginBottom: '10px'}}>Short Description:</Typography>
                    <FormControl fullWidth>
                      <TextField
                        rows={5}
                        multiline
                        fullWidth
                        size='small'
                        type='text'
                        label='Description'
                        placeholder='Enter Description'
                      />
                    </FormControl>

                  </Grid>

                  <Grid item md={6} sx={{mt: 4}}>

                    <Typography variant='h6' sx={{marginBottom: '10px'}}>Long Description:</Typography>
                    <FormControl fullWidth>
                      <TextField
                        rows={5}
                        multiline
                        fullWidth
                        size='small'
                        type='text'
                        label='Description'
                        placeholder='Enter Description'
                      />
                    </FormControl>

                  </Grid>

                  <Grid item md={12} sx={{mt: 4}}>

                    <Typography variant='h6' sx={{marginBottom: '10px'}}>Attachment File:</Typography>
                    <div {...getRootProps({ className: 'dropzone' })} style={{border: '2px dashed black'}}>
                      <input {...getInputProps()} />
                      <Box sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <Box
                          sx={{
                            mb: 8.75,
                            width: 48,
                            height: 48,
                            display: 'flex',
                            borderRadius: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#dcdcdc'
                          }}
                        >
                          <Icon icon='tabler:upload' fontSize='1.75rem' />
                        </Box>
                        <Typography variant='h4' sx={{ mb: 2.5 }}>
                          Drop files here or click to upload.
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>
                          (This is just a demo drop zone. Selected files are not actually uploaded.)
                        </Typography>
                      </Box>
                    </div>
                    {files.length ? (
                      <Fragment>
                        <List>{fileList}</List>
                        <div className='buttons btnSet'>
                          <Button color='error' variant='outlined' sx={{marginRight: '10px'}} onClick={handleRemoveAllFiles}>
                            Remove All
                          </Button>
                          <Button variant='contained'>Upload Files</Button>
                        </div>
                      </Fragment>
                    ) : null}

                  </Grid>

                  <Grid item md={12} sx={{mt: 6, textAlign: 'right'}}>
                    <Button type='btn btn-secondary' href={`${appRoutes.dataSource}`} variant='outlined' color='secondary' style={{textDecoration: "none",marginRight: '10px'}}>
                      Cancel
                    </Button>
                    <Button variant='contained'>Save</Button>
                  </Grid>

                </Grid>

              </Box>
            </CardContent>
          </Card>
        </Grid>

      </Grid>

    </div>
  );
};

export default EditDataSource;
