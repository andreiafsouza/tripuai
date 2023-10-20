const color = {
  black: "#000000",
  white: "#ffffff",
  green: {
    olive: "#B3BE6E",
    tea: "#77C091",
    wasabi: "#778822",
    spring: "#267342",
    palm: "#0C2716",
  },
  nude: {
    rose: "#DECABA",
    dust: "#CAAD90",
    lion: "#C29670",
    coffee: "#674A32",
  },
  orange: {
    saffron: "#FF9233",
  },
  red: {
    carmine: "#EB4747",
  },
};

export const theme = {
  background: {
    main: color.nude.dust,
    gradient: color.nude.dust,
  },
  text: {
    primary: color.black,
    secondary: color.nude.coffee,
  },
  card: {
    front: color.nude.rose,
    back: color.nude.dust,
  },
  button: {
    primary: color.green.tea,
    secondary: color.green.olive,
  },
  warning: color.orange.saffron,
  error: color.red.carmine,
};
