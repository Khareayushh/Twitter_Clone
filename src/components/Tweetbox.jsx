import React from 'react'
import "./TweetBox.css"
import { Avatar, Button } from '@material-ui/core';

function Tweetbox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
            <Avatar src="https://cdn.pixabay.com/photo/2016/04/27/18/29/minion-1357212_960_720.jpg" />
            <input type="text" placeholder="What's happening?"/>
        </div>
        <input type="text" className='tweetBox__inputImage' placeholder='Optional: Enter image url' />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  )
}

export default Tweetbox;
