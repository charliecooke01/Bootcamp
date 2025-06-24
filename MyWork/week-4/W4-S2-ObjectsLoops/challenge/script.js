     const fullName = "  john doe  ";
     const formattedName = fullName
       .trim()
       .split(" ")
       .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
       .join(" ");
     console.log(formattedName); // Outputs: "John Doe"