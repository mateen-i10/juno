import React from 'react';
import {Avatar, Box, Card, CardContent, Direction, Typography} from "@mui/material";
import {useKeenSlider} from "keen-slider/react";


const Testimonials = ({direction}:  {direction: Direction }) => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    rtl: direction === 'rtl',
    slides: {
      perView: 3,
      spacing: 16
    }
  }, [
    slider => {
      let mouseOver = false
      let timeout: NodeJS.Timeout
      const clearNextTimeout = () => {

          // @ts-ignore
        clearTimeout(timeout as number)
      }
      const nextTimeout = () => {

          // @ts-ignore
        clearTimeout(timeout as number)
        if (mouseOver) return
        timeout = setTimeout(() => {
          slider.next()
        }, 2000)
      }
      slider.on('created', () => {
        slider.container.addEventListener('mouseover', () => {
          mouseOver = true
          clearNextTimeout()
        })
        slider.container.addEventListener('mouseout', () => {
          mouseOver = false
          nextTimeout()
        })
        nextTimeout()
      })
      slider.on('dragStarted', clearNextTimeout)
      slider.on('animationEnded', nextTimeout)
      slider.on('updated', nextTimeout)
    }
  ])

  return (
    <Box  ref={ref} className='keen-slider' >
      <Box className='keen-slider__slide'>
        <Card  sx={{m: 4}}>
          <Avatar
            alt='Robert Meyer'
            src='/images/avatars/1.png'
            sx={{
              width: 75,
              height: 75,
              left: '42%',
              top: '1rem',
              position: 'absolute',
              border: theme => `0.25rem solid ${theme.palette.common.white}`
            }}
          />
          <CardContent sx={{mt: 18}}>
                      <Typography variant='body1' sx={{px: 2}}>
                        At RTS, our approach to implementing artificial intelligence (AI)

                        is rooted in a commitment to innovation, problem-solving, and

                        delivering tangible value to our clients. We understand that AI

                        is not a one-size-fits-all solution but a transformative technology

                        that, when applied strategically, can drive significant

                        improvements in various domains.
                      </Typography>
                      <Typography variant='body2'   sx={{textAlign: 'start', my: 1, px:2}}>
                        Sarah Thompson
                      </Typography>
                      <Typography variant='body2'  sx={{textAlign: 'start', my: 1, px:2}}>
                        Chief Technology Officer, Tech Innovations Inc
                      </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box className='keen-slider__slide'>
      <Card sx={{m: 4}}>
        <Avatar
          alt='Robert Meyer'
          src='/images/avatars/1.png'
          sx={{
            width: 75,
            height: 75,
            left: '42%',
            top: '1rem',
            position: 'absolute',
            border: theme => `0.25rem solid ${theme.palette.common.white}`
          }}
        />
        <CardContent sx={{mt: 18}}>
          <Typography variant='body1' sx={{px: 2}}>
            At RTS, our approach to implementing artificial intelligence (AI)

            is rooted in a commitment to innovation, problem-solving, and

            delivering tangible value to our clients. We understand that AI

            is not a one-size-fits-all solution but a transformative technology

            that, when applied strategically, can drive significant

            improvements in various domains.
          </Typography>
          <Typography variant='body2'   sx={{textAlign: 'start', my: 1, px:2}}>
            Sarah Thompson
          </Typography>
          <Typography variant='body2'  sx={{textAlign: 'start', my: 1, px:2}}>
            Chief Technology Officer, Tech Innovations Inc
          </Typography>
        </CardContent>
      </Card>
      </Box>
      <Box className='keen-slider__slide'>
      <Card sx={{m: 4}}>
        <Avatar
          alt='Robert Meyer'
          src='/images/avatars/1.png'
          sx={{
            width: 75,
            height: 75,
            left: '42%',
            top: '1rem',
            position: 'absolute',
            border: theme => `0.25rem solid ${theme.palette.common.white}`
          }}
        />
        <CardContent sx={{mt: 18}}>
          <Typography variant='body1' sx={{px: 2}}>
            At RTS, our approach to implementing artificial intelligence (AI)

            is rooted in a commitment to innovation, problem-solving, and

            delivering tangible value to our clients. We understand that AI

            is not a one-size-fits-all solution but a transformative technology

            that, when applied strategically, can drive significant

            improvements in various domains.
          </Typography>
          <Typography variant='body2'   sx={{textAlign: 'start', my: 1, px:2}}>
            Sarah Thompson
          </Typography>
          <Typography variant='body2'  sx={{textAlign: 'start', my: 1, px:2}}>
            Chief Technology Officer, Tech Innovations Inc
          </Typography>
        </CardContent>
      </Card>
      </Box>
      <Box className='keen-slider__slide'>
      <Card  sx={{m: 4}}>
        <Avatar
          alt='Robert Meyer'
          src='/images/avatars/1.png'
          sx={{
            width: 75,
            height: 75,
            left: '42%',
            top: '1rem',
            position: 'absolute',
            border: theme => `0.25rem solid ${theme.palette.common.white}`
          }}
        />
        <CardContent sx={{mt: 18}}>
          <Typography variant='body1' sx={{px: 2}}>
            At RTS, our approach to implementing artificial intelligence (AI)

            is rooted in a commitment to innovation, problem-solving, and

            delivering tangible value to our clients. We understand that AI

            is not a one-size-fits-all solution but a transformative technology

            that, when applied strategically, can drive significant

            improvements in various domains.
          </Typography>
          <Typography variant='body2'   sx={{textAlign: 'start', my: 1, px:2}}>
            Sarah Thompson
          </Typography>
          <Typography variant='body2'  sx={{textAlign: 'start', my: 1, px:2}}>
            Chief Technology Officer, Tech Innovations Inc
          </Typography>
        </CardContent>
      </Card>
      </Box>
    </Box>
  );
};

export default Testimonials;
