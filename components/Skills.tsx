import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import BuildIcon from "@mui/icons-material/Build";
import DnsIcon from "@mui/icons-material/Dns";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <CodeIcon />,
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Redux Toolkit",
      "MUI",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Backend Development",
    icon: <DnsIcon />,
    skills: ["Python", "Django", "Django REST Framework", "REST API"],
  },
  {
    title: "Database",
    icon: <StorageIcon />,
    skills: ["PostgreSQL"],
  },
  {
    title: "Tools & Technologies",
    icon: <BuildIcon />,
    skills: ["Git", "GitHub", "Axios", "REST API"],
  },
];

export default function Skills() {
  return (
    <Box
      id="skills"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        // backgroundColor: "rgba(30, 41, 59, 0.3)",
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
            MY SKILLS
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
        {/* Skill Cards */}
        <Grid container spacing={3}>
          {skillCategories.map((category) => (
            <Grid key={category.title} size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  height: "100%",
                  backgroundColor: "background.paper",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 3,
                  transition: "0.3s",

                  "&:hover": {
                    transform: "translateY(-5px)",
                    borderColor: "primary.main",
                    boxShadow: "0 10px 30px rgba(56, 189, 248, 0.08)",
                  },
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  {/* Category Title */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 3,
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "rgba(56, 189, 248, 0.1)",
                        color: "primary.main",
                      }}
                    >
                      {category.icon}
                    </Box>

                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {category.title}
                    </Typography>
                  </Box>

                  {/* Skill Chips */}
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1.2,
                    }}
                  >
                    {category.skills.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        variant="outlined"
                        sx={{
                          borderColor: "rgba(255,255,255,0.15)",
                          color: "text.secondary",

                          "&:hover": {
                            borderColor: "primary.main",
                            color: "primary.main",
                          },
                        }}
                      />
                    ))}
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
