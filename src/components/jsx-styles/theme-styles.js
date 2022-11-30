const styles = theme => {
  const themeColor = () => {
    let color = ''

    switch (theme) {
      case 'blue':
        color = 'dodgerblue'
        break
      case 'orange':
        color = 'darkorange'
        break
      case 'pink':
        color = 'deeppink'
        break
      default:
        color = 'black'
        break
    }

    return color
  }
  
  return {
    container: {
      fontFamily: 'system-ui',
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: '600px'
    },

    header: {
      fontSize: '3rem',
      fontWeight: '700',
      color: themeColor()
    },
    nameTile: {
      fontSize: '1rem',
      fontWeight: '700',
      color: themeColor(),
      backgroundColor: 'yellow'
    }
  }
}

export default styles
