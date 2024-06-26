export const Text = ({ children, type, href }) => {
  switch (type) {
    case "h1":
      return <h1>{children}</h1>;
    case "h2":
      return <h2>{children}</h2>;
    case "h3":
      return <h3>{children}</h3>;
    case "h4":
      return <h4>{children}</h4>;
    case "h5":
      return <h5>{children}</h5>;
    case "h6":
      return <h6>{children}</h6>;
    case "a":
      return <a href={href}>{children}</a>;
    case "sm":
      return <p className="text-sm">{children}</p>;
    case "xs":
      return <p className="text-xs">{children}</p>;

    default:
      return <p>{children}</p>;
  }

  
};

