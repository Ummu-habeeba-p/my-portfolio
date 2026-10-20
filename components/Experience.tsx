"use client";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Stack,
  Divider,
} from "@mui/material";

import CodeIcon from "@mui/icons-material/Code";

export default function Experience() {
  const responsibilities = [
    "Built responsive interfaces using React, Next.js, TypeScript, and MUI.",
    "Developed REST APIs using Python, Django, and Django REST Framework.",
    "Integrated APIs with PostgreSQL-backed applications.",
    "Collaborated using Git and GitHub.",
  ];

  return (
    <Box id="experience" component="section" sx={{ py: { xs: 7, md: 10 } }}>
      <Container maxWidth="lg">
        {/* Section Heading */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              color: "primary.main",
              fontWeight: 600,
              mb: 1,
            }}
          >
            EXPERIENCE
          </Typography>

          <Box
            sx={{
              width: 80,
              height: 4,
              borderRadius: 5,
              bgcolor: "primary.main",
              transition: "0.3s",

              "&:hover": {
                transform: "translateY(-5px)",
                borderColor: "primary.main",
              },
            }}
          />
        </Box>

        {/* Compact Experience Card */}
        <Card
          elevation={0}
          sx={{
            borderRadius: 3,
            border: "1px solid",
            borderColor: "divider",
            boxShadow: "0 8px 28px rgba(15, 23, 42, 0.07)",
            overflow: "hidden",
            transition: "0.3s",

            "&:hover": {
              transform: "translateY(-5px)",
              borderColor: "primary.main",
            },
          }}
        >
          <CardContent sx={{ p: { xs: 2, md: 3 } }}>
            <Stack
              component="div"
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 3, sm: 4 }}
              sx={{ alignItems: "center" }}
            >
              {/* Left: Image */}
              <Box
                sx={{
                  width: { xs: "100%", sm: 220, md: 260 },
                  // height: { xs: 180, sm: 230 },
                  height: { xs: 400, sm: 230 },
                  flexShrink: 0,
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src="/image/exp.jfif"
                  alt="Developer working on a laptop"
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    objectFit: "contain",
                    objectPosition: "center",
                    // backgroundColor: "primary.main",
                  }}
                />
              </Box>

              {/* Right: Content */}
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{
                    alignItems: "center",
                    mb: 1,
                  }}
                >
                  <CodeIcon color="primary" />

                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: { xs: "1.25rem", md: "1.6rem" },
                      fontWeight: 700,
                    }}
                  >
                    Full Stack Developer Intern
                  </Typography>
                </Stack>

                <Typography color="primary.main" sx={{ fontWeight: 700 }}>
                  Upcode
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 0.5, mb: 2 }}
                >
                  Internship · 2026
                </Typography>

                <Divider sx={{ mb: 2 }} />

                <Typography
                  color="text.secondary"
                  sx={{ lineHeight: 1.8, mb: 2 }}
                >
                  Gained practical full-stack development experience through
                  projects using React, Next.js, TypeScript, Python, Django, and
                  PostgreSQL.
                </Typography>

                <Typography sx={{ fontWeight: 700, mb: 1.5 }}>
                  Key Responsibilities
                </Typography>

                <Box component="ul" sx={{ pl: 2.5, my: 0 }}>
                  {responsibilities.map((item) => (
                    <Box component="li" key={item} sx={{ mb: 0.75 }}>
                      <Typography
                        color="text.secondary"
                        variant="body2"
                        sx={{ lineHeight: 1.7 }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
