
import { Box, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import privacy from "../../docs/privacy.md"


function Privacy() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(privacy)
      .then(res => res.text())
      .then(md => { setContent(md) })
  })

  return (
    <div>
      <Container>
        <Box sx={{textAlign: "left"}}>
          <Typography variant="h3" sx={{textAlign: "center"}} >
            Privacy Policy
          </Typography>
          {console.log(privacy)}
          <ReactMarkdown children={content} sourcePos={true} />
        </Box>
      </Container>

    </div>
  )
}

export default Privacy
