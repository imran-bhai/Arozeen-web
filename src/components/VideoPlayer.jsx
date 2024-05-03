"use client";import React from 'react';

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoUrl: '/Nike.mp4', // replace with your video URL
      playing: false,
    };
    this.videoRef = React.createRef();
  }

  togglePlay = () => {
    const video = this.videoRef.current;
    if (this.state.playing) {
      video.pause();
    } else {
      video.play();
    }
    this.setState({ playing: !this.state.playing });
  }

  render() {
    return (
      <div>
        <video ref={this.videoRef} src={this.state.videoUrl} controls />
        {/* <button onClick={this.togglePlay}>
          {this.state.playing ? 'Pause' : 'Play'}
        </button> */}
      </div>
    );
  }
}

export default VideoPlayer;
