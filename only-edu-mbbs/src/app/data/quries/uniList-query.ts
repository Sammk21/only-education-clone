export const ownershipQuery = "/api/ownerships?populate=true";
export const indianStatesQuery =  (stream:string) => { const query = `/api/indian-states?populate[universities][filters][streams][slug][$eq]=${stream}`; return query }
export const examsQuery = (stream:string) =>{ const query = `/api/streams?filters[slug][$eq]=${stream}&populate[entrance_exams][populate]=true`; return query }
export const modeQuery="/api/modes?populate=true"
export const durationQuery="/api/durations?populate=true"
export const courseQuery="/api/top-courses?populate=true&fields[0]=slug&fields[1]=title"
export const rankingQuery="/api/rankings?fields[0]=publisherName&fields[1]=slug"
export const streasmQuery = "/api/streams?populate=true"




