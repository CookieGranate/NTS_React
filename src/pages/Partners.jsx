import FullSet from '../img/partners/logofinito.png'
import BoogieStyle from '../img/partners/InShot_20221029_005454821.png'
import Spoke from '../img/partners/hmmm.png'
import Janisonlyfans from '../img/partners/janisonlyfans.png'
import Truckershub from '../img/partners/logo.jpg'

const Partners = () => {
    return (
        <div id="partnersdiv">
            <div id="partnertitle">
                <h1>Partners</h1>
            </div>
            <div id="partnerslist">
                <div className="partner partnerabove">
                    <img src={FullSet} alt="FullSet LocalMods" />
                    <a href="https://discord.gg/qVcb82AUbm">FullSet LocalMods</a>
                </div>
                <div className="partner partnerabove">
                    <img src={BoogieStyle} alt="BoogieStyle" />
                    <a href="https://discord.gg/HVsnWs6RBp">Boogie Style</a>
                </div>
                <div className="partner partnerabove">
                    <img src={Spoke} alt="3 Spoke" />
                    <a href="https://discord.gg/GJEBHDF8RN">3 Spoke</a>
                </div>
                <div className="partner belowpartner">
                    <img src={Truckershub} alt="Truckershub" />
                    <a href="https://discord.gg/4YgeT2sx8u">TruckersHub</a>
                </div>
                <div className="partner belowpartner">
                    <img src={Janisonlyfans} alt="Janis' Onlynubs" />
                    <a href="https://discord.gg/ksZNnuva6w">Janis' Onlynubs</a>
                </div>
            </div>
        </div>
    )
}

export default Partners;