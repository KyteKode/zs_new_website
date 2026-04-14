import { black_img, white_img, blue_img, red_img } from "./placeholder_img";

enum ZSColor {
    Black = "Black",
    White = "White",
    Blue = "Blue",
    Red = "Red",
}
export default ZSColor;

export function zs_color_img(color: ZSColor) {
    switch (color) {
        case ZSColor.Black:
            return black_img;
        case ZSColor.White:
            return white_img;
        case ZSColor.Blue:
            return blue_img;
        case ZSColor.Red:
            return red_img;
    }
}
