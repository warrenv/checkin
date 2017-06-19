import Link from 'next/link'

import { getInitialData, loadData } from '../../lib/dataHandler'

class Page extends React.Component {
  static async getInitialProps () {
    return getInitialData()
  }

  componentDidMount () {
    console.log('data: ', this.props.data)
    loadData(this.props.data)
  }

  render() {
    const { teams } = this.props

    return (
      <div>
        <h1>Teams</h1>
        <Link href="/teams/new"><a>Add Team</a></Link>
        <ol>
          {Object.keys(teams).map(id => teamButton(teams[id]))}
        </ol>
      </div>
    )
  }
}

const teamButton = team => {
  return <li key={team.id}><button>{team.name}</button></li>
}

export default Page
