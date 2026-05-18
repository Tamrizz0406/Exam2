import React, { useState } from 'react'
import { Box, Container, Typography, Button, Stack, Dialog, DialogTitle, DialogContent, DialogActions, TextField, InputAdornment } from '@mui/material'
import rec from '../assets/img/Rectangle 27.png'

const initialServices = [
  { id: 1, title: 'Вывод из запоя на дому', price: '4 500 руб' },
  { id: 2, title: 'Стационар с питанием и лечением', price: '5 600 руб' },
  { id: 3, title: 'Алкогольная кодировка «Аквилонг»', price: '2 000 руб' },
  { id: 4, title: 'Плазмаферез (очистка крови)', price: '4 500 руб' },
]

const Section8 = () => {
  const [services, setServices] = useState(initialServices)
  const [searchTerm, setSearchTerm] = useState('')
  const [openModal, setOpenModal] = useState(false)
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [editId, setEditId] = useState(null)

  const handleOpenAdd = () => {
    setEditId(null)
    setTitle('')
    setPrice('')
    setOpenModal(true)
  }

  const handleOpenEdit = (item) => {
    setEditId(item.id)
    setTitle(item.title)
    setPrice(item.price)
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
    setTitle('')
    setPrice('')
    setEditId(null)
  }

  const handleSave = (e) => {
    e.preventDefault() 
    if (!title || !price) return 

    if (editId) {
      setServices(services.map(item => item.id === editId ? { ...item, title, price } : item))
    } else {
      const newService = {
        id: Date.now(), 
        title,
        price
      }
      setServices([...services, newService])
    }

    handleCloseModal() 
  }

  const handleDelete = (id) => {
    setServices(services.filter(item => item.id !== id))
  }

  const filteredServices = services.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Box sx={{ bgcolor: '#ffffff', py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        
        <Stack 
          direction={{ xs: 'column', sm: 'row' }} 
          justifyContent="space-between" 
          alignItems="center" 
          spacing={2}
          sx={{ mb: 4 }}
        >
          <Typography 
            variant="h3" 
            sx={{ fontWeight: '700', color: '#1A2530', fontSize: { xs: '30px', md: '38px' } }}
          >
            Наши услуги и цены
          </Typography>

          <Button
            variant="contained"
            onClick={handleOpenAdd}
            sx={{
              bgcolor: '#5CB85C',
              '&:hover': { bgcolor: '#4ca34c' },
              borderRadius: '30px',
              textTransform: 'none',
              px: 4, py: 1,
              fontWeight: '600'
            }}
          >
            + Добавить услугу
          </Button>
        </Stack>

        <Box sx={{ mb: 5, maxWidth: '400px', mx: { xs: 'auto', sm: '0' } }}>
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            placeholder="Поиск услуги по названию..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ mr: 0.5 }}>
                  🔍
                </InputAdornment>
              ),
              sx: { borderRadius: '12px', bgcolor: '#F4F7F6' }
            }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 4,
            justifyContent: 'flex-start',
            alignItems: 'stretch'
          }}
        >
          {filteredServices.length > 0 ? (
            filteredServices.map((item) => (
              <Box
                key={item.id}
                sx={{
                  bgcolor: '#ffffff',
                  borderRadius: '24px',
                  boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.04)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  width: { 
                    xs: '100%', 
                    sm: 'calc(50% - 16px)', 
                    md: 'calc(25% - 24px)' 
                  },
                  border: '1px solid #EAEAEA'
                }}
              >
                <Box sx={{ width: '100%', height: '160px', bgcolor: '#D1E3E0', position: 'relative' }}>
                  <img src={rec} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 12,
                      left: 12,
                      bgcolor: '#E2F1A7',
                      color: '#1A2530',
                      fontWeight: '700',
                      fontSize: '12px',
                      px: 1.5, py: 0.5,
                      borderRadius: '20px',
                      zIndex: 3
                    }}
                  >
                    {item.price}
                  </Box>
                </Box>

                <Box sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'center' }}>
                  <Typography 
                    variant="h6" 
                    sx={{ fontWeight: '700', color: '#1A2530', mb: 3, fontSize: '16px', lineHeight: 1.4 }}
                  >
                    {item.title}
                  </Typography>

                  <Stack direction="row" spacing={1} justifyContent="center">
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => handleOpenEdit(item)}
                      sx={{
                        bgcolor: '#3498db',
                        '&:hover': { bgcolor: '#2980b9' },
                        borderRadius: '20px',
                        textTransform: 'none',
                        fontSize: '12px',
                        px: 2
                      }}
                    >
                      Изменить
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      color="error"
                      onClick={() => handleDelete(item.id)}
                      sx={{
                        borderRadius: '20px',
                        textTransform: 'none',
                        fontSize: '12px',
                        px: 2
                      }}
                    >
                      Удалить
                    </Button>
                  </Stack>
                </Box>

              </Box>
            ))
          ) : (
            <Box sx={{ width: '100%', py: 4, textAlign: 'center' }}>
              <Typography sx={{ color: '#7D8790' }}>
                Услуги с таким названием не найдены 😕
              </Typography>
            </Box>
          )}
        </Box>

        <Dialog 
          open={openModal} 
          onClose={handleCloseModal}
          fullWidth
          maxWidth="xs"
          PaperProps={{
            sx: { borderRadius: '20px', p: 1 }
          }}
        >
          <DialogTitle sx={{ fontWeight: '700', color: '#1A2530', pb: 1 }}>
            {editId ? '✏️ Редактировать услугу' : '➕ Добавить новую услугу'}
          </DialogTitle>
          
          <DialogContent>
            <Stack spacing={2.5} sx={{ mt: 1 }}>
              <TextField 
                label="Название услуги" 
                variant="outlined" 
                size="small"
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextField 
                label="Цена (например: 4 500 руб)" 
                variant="outlined" 
                size="small"
                fullWidth
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Stack>
          </DialogContent>

          <DialogActions sx={{ px: 3, pb: 2 }}>
            <Button 
              onClick={handleCloseModal} 
              color="inherit"
              sx={{ textTransform: 'none', fontWeight: '600' }}
            >
              Отмена
            </Button>
            <Button 
              onClick={handleSave} 
              variant="contained"
              sx={{ 
                bgcolor: '#5CB85C', 
                '&:hover': { bgcolor: '#4ca34c' },
                textTransform: 'none',
                fontWeight: '600',
                borderRadius: '10px',
                px: 3
              }}
            >
              {editId ? 'Сохранить' : 'Добавить'}
            </Button>
          </DialogActions>
        </Dialog>

      </Container>
    </Box>
  )
}

export default Section8