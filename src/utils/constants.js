
const GOOGLE_API_KEY = "AIzaSyDkMfXRNYsDlKvIKiKajjawoUIjaMUXN7k";

export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_COMMENT_API = "https://youtube.googleapis.com/youtube/v3/comments?part=snippet&parentId=UgzDE2tasfmrYLyNkGt4AaABAg&key="+GOOGLE_API_KEY;

export const LIVE_CHAT_COUNT = 15;