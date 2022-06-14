import React, {useState} from 'react'
import { Box, Tooltip, IconButton, Fab, Modal, Typography } from '@mui/material'
import {Add} from '@mui/icons-material'

const AddPost = () => {
  const [open, setOpen] = useState(false)
  return (
    <Box >
        <Tooltip 
          // onClick={e=>setOpen(true)}
          title="Delete" sx={{
          position:"fixed",
          bottom:"20px",
          left:{
            xs:"calc(50% - 25px)",
            md:30,
          }
        }}>
        <Fab color="primary" aria-label="add">
          <Add />
        </Fab>
        </Tooltip>
        {/* <Modal
        open={open}
        onClose={e=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box >
          Hello EberyOne
        </Box>
      </Modal> */}
    </Box>
  )
}

export default AddPost