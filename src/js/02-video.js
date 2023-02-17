import player from "@vimeo/player";
import throttle from "lodash.throttle";



const iframe = document.querySelector('iframe');
const KEY_STORAGE = "videoplayer-current-time";
const playerWindow = new player(iframe);


const onPlayTimeCheker = (e) => {
        localStorage.setItem(KEY_STORAGE, JSON.stringify(e.seconds))
}


playerWindow.on('timeupdate', throttle(onPlayTimeCheker, 1000));

const parsedTimeFromLS = JSON.parse(localStorage.getItem(KEY_STORAGE));
    
playerWindow.setCurrentTime(parsedTimeFromLS);

try {
    playerWindow.setCurrentTime(parsedTimeFromLS)
} catch (error) {
    
};
    
