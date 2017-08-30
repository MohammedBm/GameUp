import React from 'react';

function RoomForm(props) {
  const {
    onSubmit = () => {}
  } = props

  const handleSubmit = event =>{
    event.preventDefault();
    const {currentTarget} = event;

    const formData = new FormData(currentTarget);
    onSubmit({
      title: formData.get('title'),
      creater: formData.get('creater'),
      activity: formData.get('activity'),
      game: formData.get('game'),
      time: formData.get('time'),
      limit: formData.get('limit')
    })
  }

  return(
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor = 'title'>Title</label><br />
        <input className="form-control" id='title' name='title'/>
      </div>

      <div className='form-group'>
        <label htmlFor = 'creater'>Username</label><br />
        <input className="form-control" id='creater' name='creater'/>
      </div>

      <div className='form-group'>
        <label htmlFor = 'game'>Game</label><br />
        <input className="form-control" maxLength='20' id='game' name='game'/>
      </div>

      <div className='form-group'>
        <label htmlFor = 'time'>Time</label><br />
        <input className="form-control" id='time' name='time'
        placeholder='Write Down the activity you want to do' />
      </div>

      <div className='form-group'>
        <label htmlFor = 'limit'>Player Count</label><br />
        <input className="form-control" type = 'number'id='limit' name='limit'/>
        <small className="form-text text-muted">You will be counted as one of the member of the group.</small>
      </div>

      <div className='form-group'>
        <label htmlFor = 'activity'>Activity</label><br />
        <textarea className="form-control" id='activity' name='activity' placeholder='Write Down the activity you want to do'/>
      </div>

      <div>
        <input className = 'btn-outline-primary btn'type='submit' value='Submit'/>
      </div>

    </form>
  )

}

export default RoomForm;
