export const blogListQuery =
  "/api/news?fields[0]=title&fields[1]=slug&fields[2]=description&populate[3]=image&populate[4]=category&fields[5]=live";

  export const halfBlogQuery="&populate[image]=true&populate[news][populate][2]=image&populate[news][populate]=true"