
// import { Box, Container, Divider, Typography } from "@mui/material";

// const currentYear = new Date().getFullYear();

// export default function Footer() {
//   return (
//     <Box
//       component="footer"
//       sx={{
//         mt: 4,
//         py: 4,
//         backgroundColor: "background.paper",
//         borderTop: "1px solid rgba(255,255,255,0.08)",
//       }}
//     >
//       <Container maxWidth="lg">
//          <Box
//           sx={{
//             textAlign: "center",
//             py: 2,
//           }}
//         > 
//           {/* <Typography
//             variant="h6"
//             fontWeight={700}
//             color="primary.main"
//           >
//             Ummu Habeeba
//           </Typography>

//           <Typography
//             variant="body2"
//             color="text.secondary"
//             sx={{ mt: 1, mb: 3 }}
//           >
//             Junior Full Stack Developer
//           </Typography>  */}

//           <Divider
//             sx={{
//               borderColor: "rgba(255,255,255,0.08)",
//               mb: 3,
//             }}
//           />

//           <Typography variant="body2" color="text.secondary">
//             © {currentYear} Ummu Habeeba. All rights reserved.
//           </Typography>
//         </Box>
//       </Container>
//     </Box>
//   );
// }



"use client";

import { Box, Container, Divider, Typography, Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useEffect, useState } from "react";

const currentYear = new Date().getFullYear();

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the button after scrolling past the About section
      const aboutSection = document.getElementById("about");

      if (aboutSection) {
        setShowScrollTop(
          window.scrollY >= aboutSection.offsetTop
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Back to Top Button */}
      {showScrollTop && (
        <Fab
          color="primary"
          aria-label="back to top"
          onClick={scrollToTop}
          sx={{
            position: "fixed",
            right: { xs: 16, md: 32 },
            bottom: { xs: 20, md: 32 },
            zIndex: 1200,
            boxShadow: 3,
          }}
        >
          <KeyboardArrowUpIcon fontSize="large" />
        </Fab>
      )}

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          mt: 4,
          py: 4,
          backgroundColor: "background.paper",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              textAlign: "center",
              py: 2,
            }}
          >
           <Typography variant="body2" color="text.secondary">
              © {currentYear} Ummu Habeeba. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}
