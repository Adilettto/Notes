import { DeleteForeverOutlined } from '@mui/icons-material';
import React from 'react';


function Note() {
  return (
    <div className='note'>
        <div className='note-body'></div>
        <div className='note-footer' style={{justifyContent: "flex-end"}}>
        <DeleteForeverOutlined className='note-delete'/>
        </div>
    </div>
  )
}

export default Note
