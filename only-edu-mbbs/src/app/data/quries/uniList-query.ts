export const ownershipQuery = "/api/ownerships?populate=true";
export const indianStatesQuery =  "/api/indian-states?populate[universities][populate]=true"; 
export const examsQuery = "/api/exams?populate=true";



  export const streasmQuery="/api/streams?populate=true"
  export const modeQuery="/api/modes?populate=true"
  export const durationQuery="/api/durations?populate=true"
  export const courseQuery="/api/top-courses?populate=true&fields[0]=slug&fields[1]=title"
  export const rankingQuery="/api/rankings?fields[0]=publisherName&fields[1]=slug"


export function getRankingQuery(ranking:string ){
// const uniRankingQuery=`&filters[rankingStreams][rankingPublisher][slug][$eq]=${ranking}&populate[rankingStreams][filters][rankingPublisher][slug][$eq]=${ranking}&populate[rankingStreams][sort][0]=rankingNumber:asc&populate[rankingStreams][populate][stream]=true&populate[rankingStreams][populate][rankingPublisher]=true`
// const uniRankingQuery = `&filters[rankingStreams][stream][slug][$eq]=${stream}&filters[rankingStreams][rankingNumber][$notNull]=true&populate[rankingStreams][populate][stream]=true&populate[rankingStreams][populate][rankingPublisher]=true&sort[0]=rankingStreams.stream.title:asc&sort[1]=rankingStreams.rankingPublisher.publisherName:asc&sort[2]=rankingStreams.rankingNumber:asc`
const uniRankingQuery=`&filters[rankingStreams][rankingPublisher][slug][$eq]=${ranking}&populate[rankingStreams][filters][rankingPublisher][slug][$eq]=${ranking}&populate[rankingStreams][sort][0]=rankingNumber:asc&populate[rankingStreams][populate][stream]=true&populate[rankingStreams][populate][rankingPublisher]=true`



return uniRankingQuery
}
