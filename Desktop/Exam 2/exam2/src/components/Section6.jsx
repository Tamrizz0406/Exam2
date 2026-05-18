import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import patient from '../assets/img/patient 2.png'

const servicesData = [
  { id: 1, title: 'Вывод из запоя', text: 'начиная от лечения на дому (кодирование, капельницы и прочие услуги)' },
  { id: 2, title: 'Реабилитация', text: 'начиная от лечения на дому (кодирование, капельницы и прочие услуги)' },
  { id: 3, title: 'Вызов педиатра', text: 'начиная от лечения на дому (кодирование, капельницы и прочие услуги)' },
  { id: 4, title: 'Вызов терапевта', text: 'начиная от лечения на дому (кодирование, капельницы и прочие услуги)' },
  { id: 5, title: 'Вызов невролога', text: 'начиная от лечения на дому (кодирование, капельницы и прочие услуги)' },
  { id: 6, title: 'Кодирование', text: 'начиная от лечения на дому (кодирование, капельницы и прочие услуги)' },
]

const Section6 = () => {
  return (
    <Box sx={{ bgcolor: '#0B1E33', py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        
        <Typography 
          variant="h3" 
          align="center" 
          sx={{ fontWeight: '700', color: '#ffffff', mb: 6, fontSize: '38px' }}
        >
          Наши услуги
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap', 
            gap: 4,           
            justifyContent: 'center',
            alignItems: 'stretch'
          }}
        >
          {servicesData.map((item) => (
            <Box
              key={item.id}
              sx={{
                bgcolor: '#ffffff',
                borderRadius: '20px',
                p: '32px 24px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: 2.5,
               
                width: { 
                  xs: '100%', 
                  sm: 'calc(50% - 16px)', 
                  md: 'calc(33.33% - 22px)' 
                },
                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.15)',
                transition: 'transform 0.2s',
                '&:hover': { transform: 'translateY(-4px)' } 
              }}
            >
              <Box
                sx={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  border: '1px solid #E8F5E9',
                  bgcolor: '#F9FBF9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <img 
                  src={patient} 
                  alt="" 
                  style={{ width: '24px', height: '24px', objectFit: 'contain' }} 
                />
              </Box>

              <Box>
                <Typography 
                  variant="h6" 
                  sx={{ fontWeight: '700', color: '#1A2530', mb: 1, fontSize: '18px' }}
                >
                  {item.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ color: '#7D8790', lineHeight: 1.6, fontSize: '13px' }}
                >
                  {item.text}
                </Typography>
              </Box>

            </Box>
          ))}
        </Box>

      </Container>
    </Box>
  )
}

export default Section6