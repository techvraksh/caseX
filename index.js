module.exports = {
  toUpperCase: (text) => {
    return text.toUpperCase();
  },
  toLowerCase: (text) => {
    return text.toLowerCase();
  },
  toPascalCase: (text) => {
    return text
      .replace(new RegExp(/[^\w\s]/, "g"), "")
      .replace(
        new RegExp(/\s+(.)(\w+)/, "g"),
        ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
      )
      .replace(new RegExp(/\s/, "g"), "")
      .replace(new RegExp(/\w/), (s) => s.toUpperCase());
  },
  toCamelCase: (text) => {
    return text
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, "");
  },
};
