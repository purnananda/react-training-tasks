import React, { useState } from 'react'
import axios from 'axios'
import styles from './styles'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MyCreativeBot = () => {
  const [message, setMessage] = useState('')
  const [requestMessage, setRequestMessage] = useState({})
  const [responseMessage, setResponseMessage] = useState('')
  const [history, setHistory] = useState({
    requestMessages: [],
    responseMessages: []
  })
  const [isLoading, setIsLoading] = useState(false)

  const sendMessage = async () => {
    const apiMyCreativeBotUrl = 'http://localhost:5050/api/v1/my-creative-bot-chat'

    const data = {
      prompt: `Conversation:\nUser: ${message}\nAI:`
    }

    const response = await axios.post(apiMyCreativeBotUrl, data)
    const messageFromAI = response?.data

    console.log(messageFromAI)
    setResponseMessage(messageFromAI)
    setMessage('')
    setIsLoading(false)
  }

  const getCurrentDateTime = () => {
    var currentdate = new Date()
    
    var datetime = `${currentdate.getDate()}/${currentdate.getMonth()}/${currentdate.getFullYear()} @ ${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`;
      
    return datetime
  }

  const handleSubmit = () => {
    if (requestMessage && Object.keys(requestMessage).length > 0) {
      const { requestMessages, responseMessages } = history
      setHistory({
        requestMessages: [requestMessage, ...requestMessages],
        responseMessages: [responseMessage, ...responseMessages]
      })
    }

    setIsLoading(true)
    setResponseMessage('')
    const tempRequestMessage = { message: message, date: getCurrentDateTime() }
    setRequestMessage(tempRequestMessage)
    sendMessage(message)
  }

  const renderSpinner = () => {
    return (
      <div>
        <span
          class='spinner-border spinner-border-sm'
          role='status'
          aria-hidden='true'
        ></span>
        <span style={styles.loaderText}>
          <strong>Loading...</strong>
        </span>
      </div>
    )
  }

  const renderSenderMessage = param => {
    return (
      <div>
        <span className='badge badge-primary'>You: </span>
        <span style={styles.dateLabel}>Posted on: {param.date}</span>
        <div>
          <p className='font-weight-normal'>{param.message}</p>
        </div>
      </div>
    )
  }

  const renderRecieverMessage = text => {
    return (
      <div>
        <span className='badge badge-success'>ChatGPT: </span>
        <div>
          <p>
            <pre className='font-weight-normal'>{text.trim()}</pre>
          </p>
        </div>
      </div>
    )
  }

  const renderSearchBox = () => {
    return (
      <div class='input-group'>
        <input
          type='text'
          className='form-control'
          value={message}
          onChange={e => setMessage(e.target.value)}
          onKeyDown={e =>
            e.code === 'Enter' && message.length > 2 ? handleSubmit() : ''
          }
          placeholder='Enter your message'
          aria-label='Enter your message'
          aria-describedby='send-button'
        />
        <div class='input-group-append'>
          <button
            class='btn btn-outline-secondary'
            type='button'
            id='send-button'
            disabled={!message.length > 2}
            onClick={handleSubmit}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className='container'>
      <div className='card' style={styles.sectionContainer}>
        <div className='card-body'>
          <h5 className='card-title'>My Creative Bot</h5>
          {renderSearchBox()}
        </div>
      </div>

      {(isLoading ||
        (requestMessage && Object.keys(requestMessage).length > 0) ||
        responseMessage.length > 0) && (
        <div className='card' style={styles.sectionContainer}>
          <div className='card-body'>
            {requestMessage &&
              Object.keys(requestMessage).length > 0 &&
              renderSenderMessage(requestMessage)}
            {isLoading && renderSpinner()}
            {responseMessage.length > 0 &&
              renderRecieverMessage(responseMessage)}
          </div>
        </div>
      )}

      {history.requestMessages.length > 0 &&
        history.requestMessages.length === history.responseMessages.length && (
          <div className='card' style={styles.sectionContainer}>
            <div className='card-body'>
              {history.requestMessages.map((request, index) => {
                return (
                  <>
                    <div>
                      {renderSenderMessage(request)}
                      {renderRecieverMessage(history.responseMessages[index])}
                    </div>
                    {history.requestMessages.length > index + 1 && <hr />}
                  </>
                )
              })}
            </div>
          </div>
        )}
    </div>
  )
}

export default MyCreativeBot
