import React from 'react'
import { Box, Container, Typography, Button, Stack } from '@mui/material'

import face from "../assets/img/facebook.png"
import inst from "../assets/img/instagram (42) 1.png"
import twit from "../assets/img/twitter (8) 1.png"
import you from "../assets/img/youtube (25) 1.png"
import loc from "../assets/img/pin (5) 1.png"
import call from "../assets/img/call (39) 1.png"
import woman from "../assets/img/IMG.png"

const Section1 = () => {
  return (
    <Box sx={{ width: '100%', bgcolor: '#ffffff', position: 'relative', overflow: 'hidden' }}>
      
      <Box sx={{ borderBottom: '1px solid #EAEAEA', py: 1.5, display: { xs: 'none', sm: 'block' } }}>
        <Container maxWidth="lg">
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            
            <Stack direction="row" spacing={1.5} alignItems="center">
              <img src={face} alt="facebook" style={{ width: '16px', height: '16px', objectFit: 'contain', cursor: 'pointer' }} />
              <img src={inst} alt="instagram" style={{ width: '16px', height: '16px', objectFit: 'contain', cursor: 'pointer' }} />
              <img src={twit} alt="twitter" style={{ width: '16px', height: '16px', objectFit: 'contain', cursor: 'pointer' }} />
              <img src={you} alt="youtube" style={{ width: '16px', height: '16px', objectFit: 'contain', cursor: 'pointer' }} />
            </Stack>
            
            <Stack direction="row" spacing={4} alignItems="center">
              <Stack direction="row" spacing={1} alignItems="center">
                <img src={loc} alt="location" style={{ width: '14px', height: '14px', objectFit: 'contain' }} />
                <Typography variant="body2" sx={{ color: '#7D8790', fontSize: '13px' }}>
                  Краснодарский край, г. Сочи, Северная, 6
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1.5} alignItems="center">
                <img src={call} alt="call" style={{ width: '16px', height: '16px', objectFit: 'contain' }} />
                <Stack direction="column" alignItems="flex-start">
                  <Typography variant="body2" sx={{ color: '#5CB85C', fontWeight: '700', fontSize: '14px', lineHeight: 1.2 }}>
                    +7 (862) 225-73-29
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#7D8790', fontSize: '11px' }}>
                    Звонок бесплатный и анонимный
                  </Typography>
                </Stack>
              </Stack>
            </Stack>

          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 2, mb: 4 }}>
        <Box 
          sx={{ 
            bgcolor: '#ffffff', 
            borderRadius: '16px', 
            p: '12px 24px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.04)'
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: '800', color: '#1A2530', fontSize: '20px' }}>
            Narko<span style={{ color: '#5CB85C' }}>.Net</span>
          </Typography>

          <Stack direction="row" spacing={3} sx={{ display: { xs: 'none', md: 'flex' } }}>
            {['Алкоголизм', 'Наркомания', 'Другие зависимости', 'Клиника', 'Статьи', 'Контакты'].map((item) => (
              <Typography key={item} variant="body2" sx={{ color: '#1A2530', fontWeight: '500', cursor: 'pointer', '&:hover': { color: '#5CB85C' }, fontSize: '14px' }}>
                {item} <span style={{ fontSize: '10px', color: '#7D8790' }}>▼</span>
              </Typography>
            ))}
          </Stack>

          <Button 
            variant="contained" 
            sx={{ 
              bgcolor: '#5CB85C', 
              borderRadius: '12px', 
              textTransform: 'none', 
              fontSize: '12px',
              fontWeight: '600',
              px: 2.5,
              py: 1,
              boxShadow: 'none',
              '&:hover': { bgcolor: '#4ca34c', boxShadow: 'none' }
            }}
          >
            Версия для слабовидящих
          </Button>
        </Box>
      </Container>

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 }, pb: { xs: 6, md: 10 } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' }, 
            alignItems: 'center',
            justifyContent: 'space-between', 
            gap: 4
          }}
        >
          <Box 
            sx={{ 
              textAlign: { xs: 'center', md: 'left' },
              maxWidth: { xs: '100%', md: '500px' }, 
              width: '100%'
            }}
          >
            <Typography 
              variant="h2" 
              sx={{ fontWeight: '700', color: '#1A2530', mb: 2, fontSize: { xs: '34px', md: '50px' }, lineHeight: 1.2 }}
            >
              Семь круглосуточных бригад
            </Typography>
            
            <Typography variant="body1" sx={{ color: '#7D8790', mb: 4, fontSize: '16px' }}>
              Выезд в течении <span style={{ color: '#3498db', fontWeight: '600' }}>20 минут</span>
            </Typography>

            <Button 
              variant="contained" 
              sx={{ 
                bgcolor: '#5CB85C', 
                borderRadius: '30px', 
                px: 4, 
                py: 1.5, 
                textTransform: 'none', 
                fontWeight: '600',
                boxShadow: '0px 10px 20px rgba(92, 184, 92, 0.2)',
                '&:hover': { bgcolor: '#4ca34c' }
              }}
            >
              Вызов нарколога на дом
            </Button>
          </Box>

          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: { xs: 'center', md: 'flex-end' }, 
              width: { xs: '100%', md: 'auto' },
              flexGrow: 1
            }}
          >
            <Box 
              sx={{ 
                width: { xs: '280px', sm: '360px', md: '420px' }, 
                height: { xs: '280px', sm: '360px', md: '420px' }, 
                borderRadius: '50%', 
                border: '1px solid rgba(92, 184, 92, 0.3)', 
                p: 1.5,
                position: 'relative'
              }}
            >
              <Box sx={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', bgcolor: '#F4F7F6' }}>
                <img src={woman} alt="Doctor" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Box>
              
              <Box 
                sx={{ 
                  position: 'absolute', 
                  top: '12%', 
                  left: '4%', 
                  width: 42, 
                  height: 42, 
                  bgcolor: '#2D9CDB', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: '#ffffff', 
                  fontWeight: '700',
                  fontSize: '16px',
                  boxShadow: '0px 4px 10px rgba(45, 156, 219, 0.3)',
                  zIndex: 3
                }}
              >
                7
              </Box>
            </Box>
          </Box>

        </Box>
      </Container>

    </Box>
  )
}

export default Section1