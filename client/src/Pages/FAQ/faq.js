import React from 'react';
import Navigate from '../../Components/Navigate';
import FaqBody from '../../Components/FaqBody';
import Container from "@mui/material/Container";

export const Faq = () => {
  return (
    <div className='faqwrapper'> 
        <Navigate />
        <Container sx={{ width: 1500, height: 0, mt: 20, borderRadius: 20}}>
            <FaqBody />
        </Container>
    </div>
  )
}
