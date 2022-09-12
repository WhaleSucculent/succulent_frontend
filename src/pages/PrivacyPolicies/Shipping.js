
import { Box, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import shipping from "../../docs/shipping.md"


function Shipping() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(shipping)
      .then(res => res.text())
      .then(md => { setContent(md) })
  })

  return (
    <Box sx={{mt: 3}}>
      <Container>
        <Box sx={{textAlign: "left"}}>
          <Typography variant="h3" sx={{textAlign: "center"}} >
            Shipping Policy
          </Typography>
          <ReactMarkdown children={content} sourcePos={true} />
        </Box>
      </Container>

    </Box>
  )
}

export default Shipping
