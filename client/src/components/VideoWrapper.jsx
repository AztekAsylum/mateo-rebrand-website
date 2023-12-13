const Wrapper = (props) => {
  return (
    <div id="outerVideoWrapper">
      <video
        id="embedVideo"
        autoPlay
        loop
        muted
        poster="/Assets/Images/Provoker.jpg"
      >
        <source
          src="https://mateorodriguezarte.s3.us-east-2.amazonaws.com/ProvokerEdit444.mp4"
          type="video/mp4"
        />
      </video>
      <div id="videoWrapper">{props.children}</div>
    </div>
  );
};

export default Wrapper;
