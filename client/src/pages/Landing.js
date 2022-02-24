import { Logo } from '../components'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
            aspernatur explicabo iure molestiae alias dignissimos excepturi
            natus in itaque nobis expedita qui, non maxime asperiores impedit
            reiciendis, atque sit consequatur.
          </p>
          <Link to='/register'>
            <button className='btn btn-hero'>Login/Register</button>
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Landing
