import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './botao.css'

export default function ColorButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button className='botao' variant="contained" color="success">
        Saiba mais
      </Button>
    </Stack>
  );
}