import { Box, BoxProps } from "@mui/material";

function AspectRatio({
  ratio = 1,
  children,
  relevantToHeight,
  ...props
}: PropsType) {
  const p = relevantToHeight ? ratio * 100 : (1 / ratio) * 100;

  return (
    <Box
      {...props}
      sx={{
        [relevantToHeight ? "height" : "width"]: 1,
        [!relevantToHeight ? "height" : "width"]: "auto",
        position: "relative",
        overflow: "hidden",
        // [relevantToHeight ? "pl" : "pt"]: `${p}%`,
        aspectRatio: ratio,
        borderRadius: 1,
        ...props.sx,
      }}
    >
      <Box sx={{ width: 1, height: 1, top: 0, left: 0, position: "absolute" }}>
        {children}
      </Box>
    </Box>
  );
}

export default AspectRatio;

type PropsType = {
  children: React.ReactNode;
  ratio?: number;
  relevantToHeight?: boolean;
} & BoxProps;
