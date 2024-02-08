
const Google_Api_Key="AIzaSyCYWlnZmZw4Smk5Qw8quLIhdaOjRultq-s"

export const Youtube_Video_Api=
"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+
  Google_Api_Key

  const Youtube_Suggestions= "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
  export const Youtube_Suggestions_CORS=`https://api.allorigins.win/raw?url=${encodeURIComponent(Youtube_Suggestions)}`


  export const Search_By_Keyword='https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key='+Google_Api_Key+"&q="

  export const  Search_By_Id="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key="+
  Google_Api_Key+"&id="

export const COMMENTS_API="https://youtube.googleapis.com/youtube/v3/comments?"+Google_Api_Key
  export const Live_Chat_Count=20


  export const SHORTS_API="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&type=video&videoDuration=short&key=" +
  Google_Api_Key +
  "&q=trendingshorts";