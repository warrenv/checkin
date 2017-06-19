const STORAGE_KEY='checkIn2'

const x = {
  teams: {
    1: {
      name: 'Team A',
      owner: 1,
      members: [2],
    },
  },
  users: {
    1: { name: 'Bob Smith' },
    2: { name: 'Sally Hall' },
    3: { name: 'Zane White' },
  },
  checkins: {
  },
  currentUser: 1,
}

export const getInitialData = () => {
  if (!process.browser) {
    console.log('gen data on server', JSON.parse(JSON.stringify(x)))
    return x
  } else {
    const data = JSON.parse(sessionStorage.getItem(STORAGE_KEY));
    console.log('getInitialData:', JSON.stringify(data))
    return { data }
  }
}

export const loadData = data => {
  if (!sessionStorage.getItem(STORAGE_KEY)) {
    console.log(`setting data: ${JSON.stringify(data)}`)
    //sessionStorage.setItem(STORAGE_KEY, JSON.stringify(x))
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  }
  else {
    console.log('DATA ALREADY EXISTS')
  }
}
