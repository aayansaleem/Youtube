(self.webpackChunkproject_youtube_video_player=self.webpackChunkproject_youtube_video_player||[]).push([[42],{3267:(e,t,r)=>{var a,l=r(2897).default,s=Object.create,n=Object.defineProperty,o=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,p=Object.getPrototypeOf,h=Object.prototype.hasOwnProperty,y=(e,t,r,a)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let l of i(t))h.call(e,l)||l===r||n(e,l,{get:()=>t[l],enumerable:!(a=o(t,l))||a.enumerable});return e},d=(e,t,r)=>(((e,t,r)=>{t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!==typeof t?t+"":t,r),r),u={};((e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})})(u,{default:()=>E}),e.exports=(a=u,y(n({},"__esModule",{value:!0}),a));var c=((e,t,r)=>(r=null!=e?s(p(e)):{},y(!t&&e&&e.__esModule?r:n(r,"default",{value:e,enumerable:!0}),e)))(r(5043)),m=r(2206),P=r(1520);class E extends c.Component{constructor(){super(...arguments),d(this,"callPlayer",m.callPlayer),d(this,"playerID",this.props.config.playerId||"".concat("twitch-player-").concat((0,m.randomString)())),d(this,"mute",(()=>{this.callPlayer("setMuted",!0)})),d(this,"unmute",(()=>{this.callPlayer("setMuted",!1)}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e,t){const{playsinline:r,onError:a,config:s,controls:n}=this.props,o=P.MATCH_URL_TWITCH_CHANNEL.test(e),i=o?e.match(P.MATCH_URL_TWITCH_CHANNEL)[1]:e.match(P.MATCH_URL_TWITCH_VIDEO)[1];t?o?this.player.setChannel(i):this.player.setVideo("v"+i):(0,m.getSDK)("https://player.twitch.tv/js/embed/v1.js","Twitch").then((t=>{this.player=new t.Player(this.playerID,l({video:o?"":i,channel:o?i:"",height:"100%",width:"100%",playsinline:r,autoplay:this.props.playing,muted:this.props.muted,controls:!!o||n,time:(0,m.parseStartTime)(e)},s.options));const{READY:a,PLAYING:p,PAUSE:h,ENDED:y,ONLINE:d,OFFLINE:u,SEEK:c}=t.Player;this.player.addEventListener(a,this.props.onReady),this.player.addEventListener(p,this.props.onPlay),this.player.addEventListener(h,this.props.onPause),this.player.addEventListener(y,this.props.onEnded),this.player.addEventListener(c,this.props.onSeek),this.player.addEventListener(d,this.props.onLoaded),this.player.addEventListener(u,this.props.onLoaded)}),a)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){this.callPlayer("pause")}seekTo(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.callPlayer("seek",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentTime")}getSecondsLoaded(){return null}render(){return c.default.createElement("div",{style:{width:"100%",height:"100%"},id:this.playerID})}}d(E,"displayName","Twitch"),d(E,"canPlay",P.canPlay.twitch),d(E,"loopOnEnded",!0)}}]);
//# sourceMappingURL=reactPlayerTwitch.6d9086eb.chunk.js.map