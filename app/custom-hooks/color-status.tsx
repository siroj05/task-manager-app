export const colorStatus = (status: string) => {
    switch (status) {
      case "In Progress":
        return "bg-blue-700";
      case "To Do":
        return "bg-red-900";
      case "Done":
        return "bg-green-500";
    }
  };