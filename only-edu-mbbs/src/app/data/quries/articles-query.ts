export const blogListQuery =
  "/api/articles?fields[0]=title&fields[1]=slug&fields[2]=description&populate[3]=image&populate[4]=category";

  export const halfBlogQuery="&populate[image]=true?filters[recommendedArticle]=true&populate[articles][populate]=true&populate[articles][populate]=image"