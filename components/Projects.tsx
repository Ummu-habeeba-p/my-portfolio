import { Box, Container, Grid, Typography } from "@mui/material";

import ProjectCard from "./ProjectCard";

import { projects } from "../app/data/Projects";

export default function Projects() {
  return (
    <Box
      id="projects"
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
            MY PROJECTS
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

        {/* Project Cards */}
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid key={project.title} size={{ xs: 12, md: 6 }}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
