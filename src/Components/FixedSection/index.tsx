import { Box, Typography } from "@mui/material";
import AboutImg from "../../assets/animatedNumberImage.png";
import { useTranslation } from "react-i18next";

function FixedSection({ title }: { title: string }) {
  const [t] = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `linear-gradient(rgba(0, 82, 164,.5),rgba(0, 82, 164,.5)
        ), url(${AboutImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        padding: "100px 0px",
        height: "85vh",
      }}
    >
      <Typography
        variant="h2"
        sx={{ fontWeight: "900", color: "#fff", mt: 10 }}
      >
        {title}
      </Typography>
    </Box>
  );
}

export default FixedSection;
