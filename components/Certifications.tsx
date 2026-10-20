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
            mb: { xs: 5, md: 8 },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "primary.main",
              fontWeight: 600,
              mb: 1,
            }}
          >
            CERTIFICATIONS
          </Typography>

          {/* <Typography
            component="h2"
            sx={{
              fontSize: {
                xs: "2rem",
                md: "3rem",
              },
              fontWeight: 800,
            }}
          >
            Certifications & Training
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              maxWidth: "650px",
              mx: "auto",
              mt: 2,
              lineHeight: 1.7,
            }}
          >
            My professional training and certifications in full-stack web
            development and related technologies.
          </Typography> */}
        </Box>

        {/* Certification Card */}

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
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

                <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                  Full Stack Development
                </Typography>

                {/* Provider */}

                <Typography
                  color="primary.main"
                  sx={{ fontWeight: 600, mb: 1 }}
                >
                  Upcode
                </Typography>

                {/* Completion */}

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 3 }}
                >
                  Full Stack Development Training · 2026
                </Typography>

                {/* Description */}

                <Typography
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.8,
                    mb: 3,
                  }}
                >
                  Completed practical training in modern full-stack web
                  development with a focus on frontend, backend, REST APIs,
                  databases, and application development.
                </Typography>

                {/* Technologies */}

                <Stack
                  direction="row"
                  spacing={1}
                  useFlexGap
                  sx={{ mb: 4, flexWrap: "wrap" }}
                >
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Python",
                    "Django",
                    "DRF",
                    "PostgreSQL",
                  ].map((technology) => (
                    <Chip
                      key={technology}
                      label={technology}
                      size="small"
                      variant="outlined"
                    />
                  ))}
                </Stack>

                {/* Certificate Button */}

                <Button
                  variant="outlined"
                  startIcon={<OpenInNewIcon />}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    textTransform: "none",
                    borderRadius: 2,
                  }}
                >
                  View Certificate
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
