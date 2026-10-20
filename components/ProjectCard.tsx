import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

interface Project {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  features: string[];
  github: string;
  demo?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "background.paper",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 3,
        overflow: "hidden",
        transition: "0.3s",

        "&:hover": {
          transform: "translateY(-6px)",
          borderColor: "primary.main",
          boxShadow: "0 15px 40px rgba(56, 189, 248, 0.1)",
        },
      }}
    >
      {/* Project Image */}
      <Box
        sx={{
          height: { xs: 240, md: 260 },
          backgroundColor: "#111827",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={project.image}
          alt={project.title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
          }}
        />
      </Box>

      {/* Project Content */}
      <CardContent
        sx={{
          p: { xs: 3, md: 4 },
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
          {project.title}
        </Typography>

        <Typography
          color="text.secondary"
          sx={{
            lineHeight: 1.7,
            mb: 3,
          }}
        >
          {project.description}
        </Typography>

        {/* Technologies */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5 }}>
            Technologies
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            {project.technologies.map((technology: string) => (
              <Chip
                key={technology}
                label={technology}
                size="small"
                variant="outlined"
                sx={{
                  borderColor: "rgba(255,255,255,0.15)",
                  color: "text.secondary",
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Features */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
            Key Features
          </Typography>

          {project.features.slice(0, 4).map((feature: string) => (
            <Typography
              key={feature}
              variant="body2"
              color="text.secondary"
              sx={{
                mb: 0.5,
                "&::before": {
                  content: '"✓ "',
                  color: "primary.main",
                  fontWeight: 700,
                },
              }}
            >
              {feature}
            </Typography>
          ))}
        </Box>

        {/* Buttons */}
        <Stack
          direction="row"
          spacing={1.5}
          sx={{
            mt: "auto",
          }}
        >
          <Button
            variant="contained"
            startIcon={<GitHubIcon />}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              textTransform: "none",
              borderRadius: 2,
            }}
          >
            GitHub
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
