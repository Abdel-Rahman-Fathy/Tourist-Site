import { Box, Typography } from "@mui/material";
import AboutImg from "../../assets/animatedNumberImage.png";
import { useTranslation } from "react-i18next";
import RenderRte from "Components/RenderRte";

function FixedSection({ title }: { title?: string }) {
  const [t] = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${AboutImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        padding: "100px 0px",
        height: "65vh",
      }}
    >
      <Typography
        variant="h3"
        sx={{ fontWeight: "700", color: "#fff", mt: 15, textAlign: "center" }}
      >
        <RenderRte rte={title} />
      </Typography>
    </Box>
  );
}

export default FixedSection;
