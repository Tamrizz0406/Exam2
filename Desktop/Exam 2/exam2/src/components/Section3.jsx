import React from 'react'
import { Box, Container, Typography, Button, Grid } from '@mui/material'
import aboutImg from '../assets/img/users.png'

const Section3 = () => {
  return (
    <Box sx={{ bgcolor: '#ffffff', py: { xs: 6, md: 10 }, overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              sx={{
                width: { xs: '280px', sm: '350px', md: '420px' },
                height: { xs: '280px', sm: '350px', md: '420px' },
                borderRadius: '40% 60% 40% 60% / 40% 40% 60% 60%',
                overflow: 'hidden',
                boxShadow: '0px 20px 40px rgba(0,0,0,0.04)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img 
                src={aboutImg} 
                alt="О нашей компании" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover' 
                }} 
              />
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' }, pl: { md: 4 } }}>
              <Typography 
                variant="h3" 
                sx={{ 
                  fontWeight: '700', 
                  color: '#1A2530', 
                  mb: 3, 
                  fontSize: { xs: '28px', md: '40px' },
                  letterSpacing: '-0.5px'
                }}
              >
                О нашей компании
              </Typography>
              
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#7D8790', 
                  lineHeight: 1.8, 
                  mb: 2, 
                  fontSize: '15px',
                  maxWidth: '500px' 
                }}
              >
                методы, направленные на избавление наркозависимого от физической и психологической тяги к наркотикам, а также на уменьшение методы, направленные на избавление наркозависимого от физической и психологической тяги к наркотикам, а также на уменьшение
              </Typography>
              
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#7D8790', 
                  lineHeight: 1.8, 
                  mb: 5, 
                  fontSize: '15px',
                  maxWidth: '500px'
                }}
              >
                методы, направленные на избавление наркозависимого от физической и психологической тяги к наркотикам, а также на уменьшение
              </Typography>
              
              <Button 
                variant="contained"
                sx={{ 
                  bgcolor: '#5CB85C', 
                  '&:hover': { bgcolor: '#4ca34c' },
                  borderRadius: '30px',
                  px: 5,
                  py: 1.6,
                  textTransform: 'none',
                  fontWeight: '600',
                  boxShadow: '0px 10px 20px rgba(92, 184, 92, 0.15)'
                }}
              >
                Консультация
              </Button>
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  )
}

export default Section3