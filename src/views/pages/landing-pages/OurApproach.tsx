import React from 'react';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {useTheme} from "@mui/material/styles";

const OurApproach = () => {
  const theme = useTheme()
  const typoHeading = {
    textAlign: 'center',
    my: 2,
    color:  theme.palette.primary.main,
    fontSize: '1.5em',
    fontWeight: 700,
  }
  const typoBody = {
    textAlign: 'center',
    fontSize: '1.1em',
    lineHeight: 1.5,
    mb: 5,
  }

  return (
    <>
      <Grid container spacing={12} sx={{bgcolor: theme.palette.background.paper, minHeight: '85vh'}} justifyContent='center' alignItems='center'>
        <Grid item xs={5} >
          <Grid item container xs={12} >
            <Grid item xs={12}>
              <Typography sx={{mx: 1, lineHeight: 1.3, fontSize: '1.5em', fontWeight: 500}}>
                At RTS, our approach to implementing artificial intelligence (AI) is rooted in a commitment to innovation,
                problem-solving, and delivering tangible value to our clients. We understand that AI is not a
                one-size-fits-all solution but a transformative technology that, when applied strategically,
                can drive significant improvements in various domains.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <Grid item container xs={12} >
            <Grid item xs={12}>
              <img width='100%' height='100%' style={{objectFit: 'contain', borderRadius:'10px'}} alt='Juno Labs' src='/images/approach-page.webp' />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{bgcolor: theme.palette.background.paper, minHeight: '140%'}} justifyContent='center' alignItems='center'>
        <Grid item xs={9} sx={{my: 15}}>
          <Typography sx={{...typoHeading}}>Understanding Your Goal</Typography>
          <Typography sx={{...typoBody}}>The first step in our AI journey is to understand your unique goals and challenges. We work closely with you to identify the specific
            problems you want to solve or opportunities you want to seize. Whether it's streamlining operations, enhancing customer experiences,
            or improving decision-making, our AI solutions are tailored to align with your business objectives.</Typography>

          <Typography sx={{...typoHeading}}>Data-Driven Insights</Typography>
          <Typography sx={{...typoBody}}>Data is the lifeblood of AI. We place a strong emphasis on data collection, preparation, and analysis. Our team works diligently to ensure
            that your data is accurate, clean, and relevant. Through advanced data analytics and machine learning techniques, we extract meaningful
            insights that guide our AI strategy.</Typography>

          <Typography sx={{...typoHeading}}>Customized Solutions</Typography>
          <Typography sx={{...typoBody}}>We believe in the power of customization. Off-the-shelf AI solutions may provide some benefits, but we go further. Our AI experts develop
            custom models and algorithms that are designed to address your specific needs. This ensures that the AI solution seamlessly integrates
            with your existing processes and workflows.</Typography>

          <Typography sx={{...typoHeading}}>Ethical AI</Typography>
          <Typography sx={{...typoBody}}>Responsible AI is at the core of our approach. We adhere to strict ethical guidelines and industry best practices to ensure that AI is used
            ethically and transparently. Data privacy, fairness, and accountability are non-negotiable principles that guide every stage of our AI
            implementation.</Typography>

          <Typography sx={{...typoHeading}}>Continuous Learning</Typography>
          <Typography sx={{...typoBody}}>AI is a rapidly evolving field, and we stay at the forefront of technological advancements. Our team is committed to continuous learning
            and staying updated with the latest AI trends and breakthroughs. This allows us to adapt and refine our AI solutions to keep them
            cutting-edge.</Typography>

          <Typography sx={{...typoHeading}}>Collaborative Partnership</Typography>
          <Typography sx={{...typoBody}}>We view our clients as partners in the AI journey. Our collaborative approach involves close communication and feedback loops. We value
            your insights and experiences, and they play a crucial role in refining and optimizing our AI solutions over time.</Typography>

          <Typography sx={{...typoHeading}}>Measure and Optimize</Typography>
          <Typography sx={{...typoBody}}>Implementing AI is not a one-time effort; it's an ongoing process. We continually monitor the performance of our AI systems, collect
            feedback, and measure their impact on your business. This data-driven approach allows us to make necessary adjustments and
            optimizations to ensure that AI consistently delivers value.</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default OurApproach;


