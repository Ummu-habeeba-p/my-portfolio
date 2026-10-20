import { Box, Container, Grid, Typography } from "@mui/material";
export default function About() {
  return (
    <Box
      id="about"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        // backgroundColor: "background.paper",
      }}
    >
      <Container maxWidth="lg">
        {/* Highlighted About Container */}
        <Box
          sx={{
            p: { xs: 3, sm: 4, md: 6 },
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 4,
            backgroundColor: "background.paper",

            boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",

            transition: "0.3s",

            "&:hover": {
              transform: "translateY(-5px)",
              borderColor: "primary.main",
            },
          }}
        >
          {/* Section Heading */}
          <Box sx={{ mb: { xs: 5, md: 7 } }}>
            <Typography
              component="h2"
              variant="h5"
              sx={{
                color: "primary.main",
                fontWeight: 700,
                letterSpacing: 1,
                mb: 2,
              }}
            >
              ABOUT ME
            </Typography>

            {/* Underline */}
            <Box
              sx={{
                width: 80,
                height: 4,
                borderRadius: 2,
                backgroundColor: "primary.main",
              }}
            />
          </Box>

          {/* Image and Content */}
          {/* <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center"> */}
          <Grid
            container
            spacing={{ xs: 5, md: 8 }}
            sx={{ alignItems: "center" }}
          >
            {/* Left: Profile Image */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src="/image/profile.jpeg"
                  alt="Ummu Habeeba - Junior Full Stack Developer"
                  sx={{
                    //   display: "block",
                    //   width: "100%",
                    //   maxWidth: 340,
                    //   aspectRatio: "4 / 5",
                    //   objectFit: "cover",
                    //   objectPosition: "center",
                    //   borderRadius: "4",
                    width: {
                      xs: 250,
                      sm: 300,
                      md: 350,
                    },
                    height: {
                      xs: 250,
                      sm: 300,
                      md: 350,
                    },
                    aspectRatio: "1 / 1",
                    objectFit: "cover",
                    objectPosition: "center",
                    borderRadius: "50%",
                    border: "2px solid",
                    borderColor: "primary.main",
                    boxShadow: "0 10px 30px rgba(56, 189, 248, 0.15)",
                  }}
                />
              </Box>
            </Grid>

            {/* Right: About Content */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                component="h3"
                sx={{
                  fontSize: { xs: "1.5rem", md: "2rem" },
                  fontWeight: 700,
                  lineHeight: 1.4,
                  mb: 3,
                }}
              >
                I'm a Junior Full Stack Developer
              </Typography>

              <Typography
                color="text.secondary"
                sx={{ lineHeight: 1.9, mb: 2 }}
              >
                I am a passionate developer focused on building modern,
                responsive, and user-friendly web applications. I enjoy working
                with both frontend and backend technologies and continuously
                improving my development skills.
              </Typography>

              <Typography
                color="text.secondary"
                sx={{ lineHeight: 1.9, mb: 2 }}
              >
                I have trained in full-stack development with technologies
                including React, Next.js, TypeScript, Python, Django, Django
                REST Framework, and PostgreSQL.
              </Typography>

              <Typography color="text.secondary" sx={{ lineHeight: 1.9 }}>
                My goal is to start my career as a developer, work on real-world
                software projects, and continue growing as a full-stack
                developer.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
