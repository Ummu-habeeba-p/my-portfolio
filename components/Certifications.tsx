"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const certifications = [
  {
    title: "Full Stack Development Internship",
    provider: "Upcode Software Labs",
    date: "2026",
    description:
      "Practical experience in full-stack web development using React, Next.js, Python, Django REST Framework, PostgreSQL, and REST APIs.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Python",
      "Django",
      "DRF",
      "PostgreSQL",
    ],
    certificate: "/Certificates/upcode_internship.pdf",
  },
  {
    title: "AI Predictive Model",
    provider: "Upcode Software Labs",
    date: "2025",
    description:
      "Certificate related to AI predictive modeling and machine learning.",
    technologies: ["AI", "Predictive Modeling", "Machine Learning"],
    certificate: "/Certificates/ai-predictive-model.pdf",
  },
  {
    title: "One Million Prompters Dubai",
    provider: "One Million Prompters",
    date: "2025",
    description:
      "Certificate recognizing participation in the One Million Prompters initiative in Dubai.",
    technologies: ["Artificial Intelligence", "Prompt Engineering"],
    certificate: "/Certificates/one million.pdf",
  },
];

export default function Certifications() {
  return (
    <Box
      id="certifications"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        {/* Section Heading */}

        <Box
          sx={{
            textAlign: "left",
            mb: { xs: 5, md: 6 },
          }}
        >
          <Typography
            component="h5"
            sx={{
              fontSize: {
                xs: "2rem",
                md: "3rem",
              },
              fontWeight: 600,
              color: "primary.main",
            }}
          >
            Training & Certifications
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              maxWidth: "650px",
              mt: 2,
              lineHeight: 1.7,
            }}
          >
            My professional training and certifications in full-stack
            development, artificial intelligence, and related technologies.
          </Typography>
        </Box>

        {/* Certification Cards */}

        <Grid container spacing={4}>
          {certifications.map((certification) => (
            <Grid key={certification.title} size={{ xs: 12, md: 6, lg: 4 }}>
              <Card
                sx={{
                  height: "100%",
                  backgroundColor: "background.paper",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 3,
                  transition: "0.3s",

                  "&:hover": {
                    transform: "translateY(-6px)",
                    borderColor: "primary.main",
                    boxShadow: "0 15px 40px rgba(56, 189, 248, 0.1)",
                  },
                }}
              >
                <CardContent
                  sx={{
                    p: { xs: 3, md: 4 },
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  {/* Certificate Icon */}

                  <Box
                    sx={{
                      width: 55,
                      height: 55,
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "rgba(56, 189, 248, 0.1)",
                      color: "primary.main",
                      mb: 3,
                    }}
                  >
                    <WorkspacePremiumIcon fontSize="large" />
                  </Box>

                  {/* Certificate Name */}

                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                    }}
                  >
                    {certification.title}
                  </Typography>

                  {/* Provider */}

                  <Typography
                    color="primary.main"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    {certification.provider}
                  </Typography>

                  {/* Completion Date */}

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      mb: 3,
                    }}
                  >
                    Certificate · {certification.date}
                  </Typography>

                  {/* Description */}

                  <Typography
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.8,
                      mb: 3,
                    }}
                  >
                    {certification.description}
                  </Typography>

                  {/* Technologies */}

                  <Stack
                    direction="row"
                    spacing={1}
                    useFlexGap
                    sx={{
                      mb: 4,
                      flexWrap: "wrap",
                    }}
                  >
                    {certification.technologies.map((technology) => (
                      <Chip
                        key={technology}
                        label={technology}
                        size="small"
                        variant="outlined"
                      />
                    ))}
                  </Stack>

                  {/* Certificate Button */}

                  <Box sx={{ mt: "auto" }}>
                    <Button
                      variant="outlined"
                      startIcon={<OpenInNewIcon />}
                      href={certification.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        textTransform: "none",
                        borderRadius: 2,
                      }}
                    >
                      View Certificate
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
