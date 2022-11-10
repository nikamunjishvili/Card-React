import Images from './images/equilibrium.jpg';
import Icon from './images/icon.svg';
import EyeIcon from './images/view.svg';
import ClockIcon from './images/clock.svg';
import AvatarIcon from './images/image-avatar.png';


function Card () {
    return(
        <div class="container">
    <div class="wrapper">
      <div class="img-top">
        <img src={Images} alt=""/>
        <div class="img-overlay">
          <img src={EyeIcon} alt=""/>
        </div>
      </div>
      <div class="box-text">
        <a href="#">Equilibrium #3429</a>
        <p>Our Equilibrium collection promotes balance and calm.</p>
        <div class="flex">
          <div class="eth">
            <img src={Icon} alt=""/>
            <p>0.041 ETH</p>
          </div>
          <div class="days">
            <img src={ClockIcon} alt=""/>
            <p>3 days left</p>
          </div>
        </div>
        <hr/>
        <div class="author">
          <img src={AvatarIcon} alt=""/>
          <p>Creation of <a href="#" class="name">Jules Wyvern</a></p>
        </div>
      </div>
    </div>
  </div>
    )

}
export default Card;