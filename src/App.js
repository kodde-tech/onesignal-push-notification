import { useEffect } from 'react'
import OneSignal from 'react-onesignal'
import './App.css';

function App() {

  useEffect(() => {
    OneSignal.init({
      appId: process.env.REACT_APP_ID_ONE_SIGNAL
    })
  }, [])

  const onHandleTag = (tag) => {
    OneSignal.sendTag('workspace', tag).then(response => {
      console.log(response);
    })
  }


  return (
    <div className="app">
      <div className="push-notification">
        <span>Push Notification Workspace</span>

        <div className="container-buttons-tags">
          <button 
            onClick={() => onHandleTag('tag_1')}
            style={{ backgroundColor: "red" }} 
            type="button"
          >
            Tag 1
          </button>

          <button
            onClick={() => onHandleTag('tag_2')}
            style={{ backgroundColor: "blueviolet" }}
            type="button"
          >
            Tag 2
          </button>

          <button
            onClick={() => onHandleTag('tag_3')}
            style={{ backgroundColor: "greenyellow" }}
            type="button"
          >
            Tag 3
          </button>

          <button
            onClick={() => onHandleTag('tag_4')}
            style={{ backgroundColor: "gray" }}
            type="button"
          >
            Tag 4
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
