import React from 'react'
import { Box, Container, Typography, Link, Stack } from '@mui/material'

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#F4F7F6', pt: 5, pb: 3, mt: 8 }}>
      <Container maxWidth="lg">
        
        <Box
          sx={{
            bgcolor: '#ffffff',
            borderRadius: '24px',
            p: 3,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 3,
            boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.02)',
            mb: 6
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box sx={{ bgcolor: '#EAF6EA', p: 1, borderRadius: '50%', fontSize: '18px' }}>📍</Box>
            <Typography sx={{ color: '#1A2530', fontSize: '14px', fontWeight: '500' }}>
              Краснодарский край, г.Сочи, Северная, 6
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box sx={{ bgcolor: '#EAF6EA', p: 1, borderRadius: '50%', fontSize: '18px' }}>✉️</Box>
            <Link href="mailto:narko.net@gmail.com" sx={{ color: '#1A2530', fontSize: '14px', fontWeight: '500', textDecoration: 'none' }}>
              narko.net@gmail.com
            </Link>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box sx={{ bgcolor: '#EAF6EA', p: 1, borderRadius: '50%', fontSize: '18px' }}>📞</Box>
            <Box>
              <Typography sx={{ color: '#1A2530', fontSize: '14px', fontWeight: '700' }}>
                +7 (862) 225-73-29
              </Typography>
              <Typography sx={{ color: '#7D8790', fontSize: '12px' }}>
                +800 (225)-73-29
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: 4,
            pb: 5,
            borderBottom: '1px solid #EAEAEA'
          }}
        >
          <Box sx={{ width: { xs: '100%', sm: '45%', md: '22%' }, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: '800', color: '#1A2530' }}>
              Narko<Box component="span" sx={{ color: '#5CB85C' }}>.Net</Box>
            </Typography>
            <Typography sx={{ color: '#7D8790', fontSize: '13px', lineHeight: 1.6 }}>
              Вывод из запоя и вывод из запоя на дому кодирование от алкоголизма кодирование по методу Довженко
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
              <Link href="#" sx={{ color: '#1A2530', fontSize: '18px', textDecoration: 'none' }}>📘</Link>
              <Link href="#" sx={{ color: '#1A2530', fontSize: '18px', textDecoration: 'none' }}>📷</Link>
              <Link href="#" sx={{ color: '#1A2530', fontSize: '18px', textDecoration: 'none' }}>🕊️</Link>
              <Link href="#" sx={{ color: '#1A2530', fontSize: '18px', textDecoration: 'none' }}>📺</Link>
            </Stack>
          </Box>

          <Box sx={{ width: { xs: '100%', sm: '45%', md: '18%' }, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            <Typography sx={{ fontWeight: '700', color: '#1A2530', fontSize: '14px', textTransform: 'uppercase', mb: 1 }}>
              Алкоголизм
            </Typography>
            {['Вывод из запоя', 'Вывод из запоя на дому', 'Кодирование от алкоголизма', 'Кодирование по методу Довженко', 'Лечение алкоголизма'].map((text) => (
              <Link key={text} href="#" sx={{ color: '#7D8790', fontSize: '13px', textDecoration: 'none', '&:hover': { color: '#5CB85C' } }}>
                {text}
              </Link>
            ))}
          </Box>

          <Box sx={{ width: { xs: '100%', sm: '45%', md: '18%' }, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            <Typography sx={{ fontWeight: '700', color: '#1A2530', fontSize: '14px', textTransform: 'uppercase', mb: 1 }}>
              Наркомания
            </Typography>
            {['Помощь при наркомании', 'Виды', 'Лечение'].map((text) => (
              <Link key={text} href="#" sx={{ color: '#7D8790', fontSize: '13px', textDecoration: 'none', '&:hover': { color: '#5CB85C' } }}>
                {text}
              </Link>
            ))}
            
            <Typography sx={{ fontWeight: '700', color: '#1A2530', fontSize: '14px', textTransform: 'uppercase', mt: 2, mb: 1 }}>
              Другие зависимости
            </Typography>
            {['Созависимость', 'Игромания', 'Лечение лудомании'].map((text) => (
              <Link key={text} href="#" sx={{ color: '#7D8790', fontSize: '13px', textDecoration: 'none', '&:hover': { color: '#5CB85C' } }}>
                {text}
              </Link>
            ))}
          </Box>

          <Box sx={{ width: { xs: '100%', sm: '45%', md: '18%' }, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            <Typography sx={{ fontWeight: '700', color: '#1A2530', fontSize: '14px', textTransform: 'uppercase', mb: 1 }}>
              Клиника
            </Typography>
            {['Врачи', 'Палаты', 'Лицензии', 'Процедура приема в клинику'].map((text) => (
              <Link key={text} href="#" sx={{ color: '#7D8790', fontSize: '13px', textDecoration: 'none', '&:hover': { color: '#5CB85C' } }}>
                {text}
              </Link>
            ))}
          </Box>

          <Box sx={{ width: { xs: '100%', sm: '45%', md: '12%' }, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography sx={{ fontWeight: '700', color: '#1A2530', fontSize: '14px', textTransform: 'uppercase' }}>
              Статьи
            </Typography>
            <Typography sx={{ fontWeight: '700', color: '#1A2530', fontSize: '14px', textTransform: 'uppercase' }}>
              Контакты
            </Typography>
          </Box>

        </Box>

        <Box
          sx={{
            pt: 3,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2
          }}
        >
          <Typography sx={{ color: '#7D8790', fontSize: '13px' }}>
            Narko.Net 2021 © Все права защищены
          </Typography>
          
          <Link href="#" sx={{ color: '#7D8790', fontSize: '13px', textDecoration: 'underline', '&:hover': { color: '#5CB85C' } }}>
            Политика конфиденциальности
          </Link>
        </Box>

      </Container>
    </Box>
  )
}

export default Footer