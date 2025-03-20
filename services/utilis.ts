

export const navigateTo = (navigate:any, path:any) => {
    navigate(path);
    console.log("qqqqq", path);
    
    localStorage.setItem("currentRoute", path);
  };