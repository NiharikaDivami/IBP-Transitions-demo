import { styled } from "@mui/material/styles";
import { Box } from "@react-three/drei";

export const CardsContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    gap: "1.5rem",
    justifyContent: "center",
    alignItems: "flex-start",
    margin: "2rem 0",
}));

export const Card = styled(Box)(({ theme }) => ({
    width: 250,
    height: 350,
    position: "absolute",
    transformStyle: "preserve-3d",
    transition: "transform 0.9s ease-in-out",
    borderRadius: "2px",
    boxShadow: theme.shadows[4],
    backgroundColor: "gray",
    "&.card0": {
        transform: "translateX(-100px) translateY(130px) rotate(-6deg)",
        zIndex: 8,
        backgroundColor: "rgb(215, 233, 152)",
    },
    "&.card1": {
        transform: "translateX(0) translateY(50px) rotate(0)",
        zIndex: 5,
        backgroundColor: "rgb(241, 252, 255)",

    },
    "&.card2": {
        transform: "translateX(100px) translateY(-30px) rotate(6deg)",
        zIndex: 3,
        backgroundColor: "rgba(255, 223, 223, 0.5)",

    },
}));

export const CardFront = styled(Box)(({ theme }) => ({
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    borderRadius: "2px",
    boxShadow: theme.shadows[4],
    backgroundColor: theme.palette.grey[200],
}));

