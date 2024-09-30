import './Sponsors.scss';
import Maxon from  '../../../../images/maxon.webp';
import Qidi from '../../../../images/qidi.webp';
import Openmv from '../../../../images/openmv.webp';

const Sponsors = () =>  {
  return (
    <div>
        <div style={{marginTop:"2vh"}}>
        <h1 className="sponsor">PROUDLY SPONSORED BY:</h1>
        </div>
            <div className='divSponsors'>
                <div className='maxon-logo'>
                <img src={Maxon} style={{maxWidth:"100%"}} alt="maxon" />
                </div>
                <div className='qidi-logo'>
                    <div>       
                        <img src={Qidi} style={{maxWidth:"100%"}} alt="maxon" />
                    </div>    
                </div>
                <div className='openmv-logo'>
                <img src={Openmv} style={{ width:"10vw",objectFit:"cover", objectPosition: "center"}} alt="maxon" />
                </div>
        </div>  
    </div>
  );
}
export default Sponsors;