import React from 'react'
import { Box, Container, Typography, Link, Stack } from '@mui/material'
import rec from '../assets/img/Rectangle 9.png'

const articlesData = [
  {
    id: 1,
    title: 'Алкоголизм',
    date: 'Август 24, 2021',
    description: 'методы, направленные на избавление наркозависимого от физической и психологической тяги к наркотикам, а также на уменьшение'
  },
  {
    id: 2,
    title: 'Наркотическая зависимость',
    date: 'Август 24, 2021',
    description: 'методы, направленные на избавление наркозависимого от физической и психологической тяги к наркотикам, а также на уменьшение'
  },
  {
    id: 3,
    title: 'Созависимость',
    date: 'Август 24, 2021',
    description: 'методы, направленные на избавление наркозависимого от физической и психологической тяги к наркотикам, а также на уменьшение'
  }
]

const Section10 = () => {
  return (
    <Box sx={{ bgcolor: '#ffffff', py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        
        <Typography 
          variant="h3" 
          align="center" 
          sx={{ 
            fontWeight: '700', 
            color: '#1A2530', 
            mb: 6, 
            fontSize: { xs: '32px', md: '42px' } 
          }}
        >
          Наши статьи
        </Typography>

        {/* ЧИСТЫЙ ФЛЕКС КОНТЕЙНЕР ВМЕСТО GRID */}
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, // На мобилках в столбик, на десктопе - бок о бок
            gap: 4, 
            alignItems: 'stretch',
            justifyContent: 'center'
          }}
        >
          {articlesData.map((article) => (
            <Box 
              key={article.id}
              sx={{ 
                display: 'flex', 
                flexDirection: 'column',
                width: { xs: '100%', md: '33.33%' }, // Равномерно делим место на 3 карточки
                bgcolor: '#ffffff',
                borderRadius: '24px',
                boxShadow: '0px 10px 30px rgba(0,0, 0, 0.02)',
                overflow: 'hidden'
              }}
            >
              {/* КАРТИНКА И ДАТА */}
              <Box 
                sx={{ 
                  width: '100%', 
                  height: '200px', 
                  bgcolor: '#D1E3E0', 
                  borderRadius: '24px', 
                  position: 'relative',
                  overflow: 'hidden',
                  mb: 2.5
                }}
              >
                <img src={rec} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

                {/* Зеленый тег с датой */}
                <Stack 
                  direction="row" 
                  spacing={1} 
                  alignItems="center"
                  sx={{
                    position: 'absolute',
                    bottom: 16,
                    left: 16,
                    bgcolor: '#5CB85C',
                    color: '#ffffff',
                    px: 2,
                    py: 0.8,
                    borderRadius: '20px',
                    fontSize: '13px',
                    fontWeight: '600'
                  }}
                >
                  <span>📅</span>
                  <span>{article.date}</span>
                </Stack>
              </Box>

              {/* КОНТЕНТ (ЗАГОЛОВОК, ТЕКСТ, ПОДРОБНЕЕ) */}
              <Box sx={{ px: 1, pb: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontWeight: '700', 
                    color: '#1A2530', 
                    mb: 1.5, 
                    fontSize: '22px',
                    lineHeight: 1.3
                  }}
                >
                  {article.title}
                </Typography>

                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: '#7D8790', 
                    lineHeight: 1.6, 
                    fontSize: '14px',
                    mb: 3,
                    flexGrow: 1 // Оставляем, чтобы ссылки "Подробнее" выстроились в одну линию
                  }}
                >
                  {article.description}
                </Typography>

                {/* Ссылка "Подробнее" */}
                <Link 
                  href="#" 
                  underline="none"
                  sx={{ 
                    color: '#5CB85C', 
                    fontWeight: '700', 
                    fontSize: '15px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    width: 'fit-content',
                    transition: '0.2s',
                    '&:hover': {
                      color: '#4ca34c',
                      transform: 'translateX(4px)'
                    }
                  }}
                >
                  Подробнее
                </Link>
              </Box>

            </Box>
          ))}
        </Box>

      </Container>
    </Box>
  )
}

export default Section10