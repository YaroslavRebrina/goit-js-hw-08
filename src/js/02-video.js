import player from "@vimeo/player";
import throttle from "lodash.throttle";



const iframe = document.querySelector('iframe');
const KEY_STORAGE = "videoplayer-current-time";
const playerWindow = new player(iframe);


const onPlayTimeCheker = (e) => {
        localStorage.setItem(KEY_STORAGE, e.seconds)
}

playerWindow.on('timeupdate', throttle(onPlayTimeCheker, 1000));

try {
    const parsedTimeFromLS = localStorage.getItem(KEY_STORAGE) || 0;
    playerWindow.setCurrentTime(parsedTimeFromLS);
} catch (error) {
    console.log(error.message)
};
    
