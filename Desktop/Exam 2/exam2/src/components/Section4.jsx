import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import docImage from '../assets/img/5a3855d889a208 1.png';

const doctorsData = [
  { id: 1, name: 'Евгения Роал', role: 'Врач кандидатских наук и технологий' },
  { id: 2, name: 'Евгения Роал', role: 'Врач кандидатских наук и технологий' },
  { id: 3, name: 'Евгения Роал', role: 'Врач кандидатских наук и технологий' },
  { id: 4, name: 'Евгения Роал', role: 'Врач кандидатских наук и технологий' },
];

const Section4 = () => {
  return (
    <Box sx={{ bgcolor: '#EDF5F4', py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        
        <Typography 
          variant="h4" 
          align="center" 
          sx={{ fontWeight: '700', color: '#1A2530', mb: 6, fontSize: '32px' }}
        >
          Наши доктора
        </Typography>

        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'row',
            justifyContent: 'center', 
            gap: '20px', 
            overflowX: 'auto', 
            pb: 2, 
            '&::-webkit-scrollbar': { display: 'none' } 
          }}
        >
          {doctorsData.map((doc) => (
            <Box 
              key={doc.id}
              sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                flex: '0 0 220px',
                position: 'relative'
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '240px',
                  borderRadius: '20px 20px 0px 0px',
                  bgcolor: '#D1E3E0', 
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'flex-end', 
                  justifyContent: 'center'
                }}
              >
                <img 
                  src={docImage} 
                  alt={doc.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </Box>

              <Box
                sx={{
                  bgcolor: '#ffffff',
                  borderRadius: '12px',
                  p: '12px 16px', 
                  textAlign: 'center',
                  width: '88%',
                  marginTop: '-30px', 
                  boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.04)',
                  zIndex: 2,
                }}
              >
                <Typography 
                  variant="subtitle2" 
                  sx={{ fontWeight: '700', color: '#1A2530', mb: 0.5, fontSize: '14px' }}
                >
                  {doc.name}
                </Typography>
                <Typography 
                  variant="caption" 
                  sx={{ color: '#7D8790', display: 'block', lineHeight: 1.3, fontSize: '11px' }}
                >
                  {doc.role}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
          <Button 
            variant="contained"
            sx={{ 
              bgcolor: '#5CB85C', 
              '&:hover': { bgcolor: '#4ca34c' },
              borderRadius: '30px',
              px: 5,
              py: 1.3,
              textTransform: 'none',
              fontWeight: '600',
              boxShadow: 'none',
              fontSize: '14px'
            }}
          >
            Врачи
          </Button>
        </Box>

      </Container>
    </Box>
  );
};

export default Section4;