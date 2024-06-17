import { Box, Card } from "@mui/material";
import AspectRatio from "Components/AspectRatio";
import "./card.css";
import { LocalNavLink } from "hooks/useLocalNavigate";
function FeaturedCard({ image }: FeaturedCardProps) {
  return (
    <Card className="imgCard" component={LocalNavLink} to={""}>
      <AspectRatio ratio={3 / 2}>
        <Box
          sx={{
            position: "relative",
          }}
        >
          <img
            className="imgCard"
            src={image}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "90px",
            }}
          />
          <Box
            className={"bgHover"}
            sx={{
              position: "absolute",
              background: "rgb(0,0,0)",
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
            }}
          ></Box>
        </Box>
      </AspectRatio>
    </Card>
  );
}

export type FeaturedCardProps = {
  image: string;
};

export default FeaturedCard;
