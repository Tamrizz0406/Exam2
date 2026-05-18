import React from 'react'
import { Box, Container, Grid, Typography, TextField, Button, Stack, InputAdornment } from '@mui/material'
import docImage from '../assets/img/Rectangle 28.png'

const Section9 = () => {
  return (
    <Box sx={{ bgcolor: '#ffffff',ml:"150px", py: { xs: 8, md: 12 }, position: 'relative', overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 0 }} alignItems="stretch">
          
          <Grid item xs={12} md={6} sx={{ display: 'flex', zIndex: 2 }}>
            <Box 
              sx={{ 
                width: '100%',
                minHeight: { xs: '320px', md: 'auto' },
                borderRadius: '24px',
                bgcolor: '#EAEAEA', 
                overflow: 'hidden',
                boxShadow: '0px 15px 40px rgba(0,0,0,0.06)'
              }}
            >
              <img src={docImage} alt="Наши врачи" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
          </Grid>

          <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              component="form"
              sx={{
                bgcolor: '#5CB85C', 
                borderRadius: { xs: '24px', md: '0px 32px 32px 0px' },
                p: { xs: 4, sm: 6, md: 7 },
                width: '100%',
                ml: { xs: 0, md: '-30px' }, 
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <Typography 
                variant="h3" 
                sx={{ fontWeight: '700', color: '#ffffff', mb: 1, fontSize: { xs: '28px', md: '36px' } }}
              >
                Кому нужна помощь?
              </Typography>
              
              <Typography 
                variant="body1" 
                sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 4, fontSize: '15px' }}
              >
                Мы будем рады помочь Вам!
              </Typography>

              <Stack spacing={2.5}>
                <TextField
                  fullWidth
                  placeholder="Ваше имя"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end" sx={{ color: '#ffffff', opacity: 0.8 }}>
                        👤
                      </InputAdornment>
                    ),
                    sx: { 
                      color: '#ffffff',
                      borderRadius: '30px',
                      border: '1px solid rgba(255, 255, 255, 0.4)',
                      '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                      bgcolor: 'rgba(255, 255, 255, 0.15)',
                      px: 1
                    }
                  }}
                  inputProps={{ style: { color: '#ffffff' } }}
                />

                <TextField
                  fullWidth
                  placeholder="Номер телефона"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end" sx={{ color: '#ffffff', opacity: 0.8 }}>
                        📞
                      </InputAdornment>
                    ),
                    sx: { 
                      color: '#ffffff',
                      borderRadius: '30px',
                      border: '1px solid rgba(255, 255, 255, 0.4)',
                      '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                      bgcolor: 'rgba(255, 255, 255, 0.15)',
                      px: 1
                    }
                  }}
                  inputProps={{ style: { color: '#ffffff' } }}
                />

                <TextField
                  fullWidth
                  placeholder="Город"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end" sx={{ color: '#ffffff', opacity: 0.8 }}>
                        📍
                      </InputAdornment>
                    ),
                    sx: { 
                      color: '#ffffff',
                      borderRadius: '30px',
                      border: '1px solid rgba(255, 255, 255, 0.4)',
                      '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                      bgcolor: 'rgba(255, 255, 255, 0.15)',
                      px: 1
                    }
                  }}
                  inputProps={{ style: { color: '#ffffff' } }}
                />

                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  placeholder="От чего лечить?"
                  variant="outlined"
                  InputProps={{
                    sx: { 
                      color: '#ffffff',
                      borderRadius: '20px',
                      border: '1px solid rgba(255, 255, 255, 0.4)',
                      '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                      bgcolor: 'rgba(255, 255, 255, 0.15)',
                      p: 2
                    }
                  }}
                  inputProps={{ style: { color: '#ffffff' } }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    bgcolor: '#ffffff',
                    color: '#5CB85C',
                    fontWeight: '700',
                    textTransform: 'none',
                    borderRadius: '30px',
                    py: 1.8,
                    fontSize: '16px',
                    boxShadow: 'none',
                    '&:hover': {
                      bgcolor: '#f4f4f4',
                      boxShadow: 'none'
                    }
                  }}
                >
                  Отправить
                </Button>
              </Stack>
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  )
}

export default Section9