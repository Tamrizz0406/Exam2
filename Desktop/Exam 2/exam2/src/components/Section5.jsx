import React from 'react'
import { Box, Container, Typography } from '@mui/material'

const advantagesData = [
  'если вам нужна профессиональная помощь обращайтесь к нам. Штат клиники состоит из опытных узкоквалифицированных медиков — с вами будут работать неврологи и психологи, наркологи и психиатры.',
  'мы оказываем широкий спектр услуг, начиная от лечения на дому (кодирование, капельницы и прочие услуги), заканчивая комплексной реабилитацией в стационаре.',
  'гарантируем полную анонимность. Вы можете быть уверены, что мы сохраним полную конфиденциальность данных, полученных от вас в ходе диагностики и лечения.',
  'используем самые современные методики, доказавшие свою эффективность, и лучшие препараты. Большой выбор методик и медикаментов позволяет нам подобрать индивидуальный план лечения для каждого пациента с учетом особенностей его организма, выраженности зависимости, замотивированности и так далее.'
]

const Section5 = () => {
  return (
    <Box sx={{ bgcolor: '#ffffff', py: { xs: 8, md: 10 } }}>
      <Container maxWidth="md"> 
        
        <Typography 
          variant="h3" 
          sx={{ 
            fontWeight: '700', 
            color: '#1A2530', 
            mb: 3, 
            fontSize: { xs: '28px', md: '38px' },
            lineHeight: 1.3,
            textAlign: 'center'
          }}
        >
          Анонимная наркологическая клиника в Сочи: преимущества обращения к нам
        </Typography>

        <Typography 
          variant="body1" 
          sx={{ color: '#7D8790', mb: 5, fontSize: '15px', textAlign: 'center' }}
        >
          Мы предлагаем комплексную реабилитацию наркоманов и алкоголиков
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {advantagesData.map((text, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
              
             <Box 
                sx={{ 
                  width: '18px', 
                  height: '18px', 
                  bgcolor: '#5CB85C', 
                  borderRadius: '4px',
                  flexShrink: 0,
                  marginTop: '4px'
                }} 
              />

              <Typography variant="body2" sx={{ color: '#7D8790', lineHeight: 1.7, fontSize: '14px' }}>
                {text}
              </Typography>
            </Box>
          ))}
        </Box>

      </Container>
    </Box>
  )
}

export default Section5