import Link from 'next/link'

import { getInitialData, loadData } from '../lib/dataHandler'

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

class Page extends React.Component {
  static async getInitialProps () {
    //  return await getInitialData()
  if (!process.browser) {
    console.log('gen data on server', JSON.parse(JSON.stringify(x)))
    return x
  } else {
    const data = JSON.parse(sessionStorage.getItem(STORAGE_KEY));
    console.log('getInitialData:', JSON.stringify(data))
    return { data }
  }
  }

  componentDidMount () {
    console.log('data: ', this.props.data)
    loadData(this.props.data)
  }

  render () {
    return (
      <div>
        <h1>Scrum-Diddly-Dee</h1>
        <hr/>
        <Link href="/teams"><a>Teams</a></Link>
      </div>
    )
  }
}

export default Page
