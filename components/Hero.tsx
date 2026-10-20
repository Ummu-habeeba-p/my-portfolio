import { Box, Button, Container, Stack, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Hero() {
  return (
    <Box
      id="home"
      component="section"
      sx={{
        minHeight: { xs: "85vh", md: "90vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pt: { xs: 12, md: 10 },
        pb: { xs: 8, md: 10 },
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: "center",
            maxWidth: 850,
            mx: "auto",
          }}
        >
          <Typography
            variant="h6"
            color="primary.main"
            sx={{ fontWeight: 600, mb: 2 }}
          >
            Hello, I'm
          </Typography>

          <Typography
            component="h1"
            sx={{
              fontSize: {
                xs: "2.5rem",
                sm: "3.5rem",
                md: "3.5rem",
              },
              fontWeight: 600,
              lineHeight: 1.15,
              mb: 2,

              animation: "fadeUp 0.8s ease-out both",
              "@keyframes fadeUp": {
                from: {
                  opacity: 0,
                  transform: "translateY(20px)",
                },
                to: {
                  opacity: 1,
                  transform: "translateY(0)",
                },
              },
            }}
          >
            Ummu Habeeba
          </Typography>

          <Typography
            component="h2"
            sx={{
              fontSize: {
                xs: "1.25rem",
                md: "1.8rem",
              },
              fontWeight: 600,
              color: "primary.main",
              mb: 3,
            }}
          >
            Junior Full Stack Developer
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              maxWidth: 700,
              mx: "auto",
              fontSize: { xs: "1rem", md: "1.15rem" },
              lineHeight: 1.9,
              mb: 4,
            }}
          >
            I build modern, responsive web applications using React, Next.js,
            TypeScript, Python, Django, and PostgreSQL. I'm passionate about
            creating useful applications and continuously improving my skills.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              href="#projects"
              sx={{
                textTransform: "none",
                borderRadius: 2,
                px: 3,
                py: 1.3,
              }}
            >
              View My Projects
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<DownloadIcon />}
              href="/Ummu_Habeeba_CV.pdf"
              download="Ummu_Habeeba_CV.pdf"
              sx={{
                textTransform: "none",
                borderRadius: 2,
                px: 3,
                py: 1.3,
              }}
            >
              Download CV
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
