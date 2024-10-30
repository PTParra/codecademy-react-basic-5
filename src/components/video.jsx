
export const Video = (props) => {

    return (
        <div>
          <video src={props.src} controls autostart="true" autoPlay muted/>
        </div>
      );
}
