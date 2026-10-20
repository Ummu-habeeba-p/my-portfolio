"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function Contact() {
  return (
    <Box id="contact" component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: "center",
            p: { xs: 4, md: 7 },
            borderRadius: 4,
            border: "1px solid",
            borderColor: "divider",
            backgroundColor: "background.paper",
            transition: "0.3s",

            "&:hover": {
              transform: "translateY(-5px)",
              borderColor: "primary.main",
            },
          }}
        >
          {/* <Typography
            variant="overline"
            color="primary.main"
            fontWeight={700}
            letterSpacing={2}
          >
            CONTACT
          </Typography> */}

          <Typography
            component="h2"
            variant="h3"
            sx={{
              fontWeight: 800,
              mt: 2,
              mb: 3,
              fontSize: { xs: "2rem", md: "3rem" },
              color: "primary.main",
            }}
          >
            Let&apos;s Work Together
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              maxWidth: 550,
              mx: "auto",
              lineHeight: 1.8,
              mb: 4,
            }}
          >
            I&apos;m a passionate aspiring full-stack developer interested in
            junior developer opportunities, internships, and exciting projects.
            Let&apos;s connect and build something meaningful together!
          </Typography>

          <Button
            variant="contained"
            size="large"
            startIcon={<EmailOutlinedIcon />}
            endIcon={<ArrowOutwardIcon />}
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ummuhabeebaperadathil@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              textTransform: "none",
              borderRadius: 2,
              px: 3,
              py: 1.5,
              mb: 4,
            }}
          >
            Get In Touch
          </Button>

          <Typography color="text.secondary" sx={{ mb: 2, fontSize: 14 }}>
            Or connect with me on
          </Typography>

          <Stack
            component="div"
            direction="row"
            spacing={2}
            useFlexGap
            sx={{ justifyContent: "center", flexWrap: "wrap" }}
          >
            <Button
              variant="outlined"
              startIcon={<GitHubIcon />}
              href="https://github.com/Ummu-habeeba-p"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ textTransform: "none", borderRadius: 2 }}
            >
              GitHub
            </Button>

            <Button
              variant="outlined"
              startIcon={<LinkedInIcon />}
              href="https://www.linkedin.com/in/ummuhabeeba-p/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ textTransform: "none", borderRadius: 2 }}
            >
              LinkedIn
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
