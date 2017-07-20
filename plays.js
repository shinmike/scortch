

module.exports = {
  HIT_BY_PITCH: data => {
    const batter = data[0].batterUp.battingPlayer
    return (batter.FirstName + ' ' + batter.LastName + ' was hit by pitch');
  },
  GROUNDOUT: data => {
    const batter = data[0].batterUp.battingPlayer
    return(batter.FirstName + batter.LastName + ' grounded out');
  },
  WALK: data => {
    const batter = data[0].batterUp.battingPlayer
    return(batter.FirstName + batter.LastName + ' walked');
  },
  FLYOUT: data => {
    const batter = data[0].batterUp.battingPlayer
    return(batter.FirstName + batter.LastName + ' flied out');
  },
  LINEOUT: data => {
    const batter = data[0].batterUp.battingPlayer
    return(batter.FirstName + ' ' + batter.LastName + ' lined out');
  },
  STRIKEOUT: data => {
    const batter = data[0].batterUp.battingPlayer
    return(batter.FirstName + ' ' + batter.LastName + ' struck out');
  },
  POPOUT: data => {
    const batter = data[0].batterUp.battingPlayer
    return(batter.FirstName + ' ' + batter.LastName + ' popped out');
  },
  SINGLE: data => {
    const batter = data[0].batterUp.battingPlayer
    return(batter.FirstName + ' ' + batter.LastName + ' singles');
  },
  DOUBLE: data => {
    const batter = data[0].batterUp.battingPlayer
    return(batter.FirstName + ' ' + batter.LastName + ' doubles');
  },
  TRIPLE: data => {
    const batter = data[0].batterUp.battingPlayer
    return(batter.FirstName + ' ' + batter.LastName + ' triples');
  },
  HOMERUN: data => {
    const batter = data[0].batterUp.battingPlayer
    return(batter.FirstName + ' ' + batter.LastName + ' homered');
  }
}
