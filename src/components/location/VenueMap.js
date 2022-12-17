import React , {useState} from 'react';
import { Map, Marker, ZoomControl, Draggable,Overlay } from "pigeon-maps"
import { stamenTerrain } from 'pigeon-maps/providers'

const schupfen = [47.675507448735104, 8.785584771202872];

const hotel = [47.699346055341394, 8.63179958510265];

const center = [47.684794, 8.706427];
const ragdoll = [47.663398, 8.651756];

  
function VenueMap() {
  const [anchor, setAnchor] = useState(ragdoll);
  return (
     <Map height={300} defaultCenter={center} defaultZoom={11} provider={stamenTerrain}>
      <Marker width={20} color={"black"}  anchor={schupfen} onClick={() => window.location.href = 'https://g.page/GasthausSchupfen?share'} />
      <Marker width={20} color={"black"}  anchor={hotel} onClick={() => window.location.href = 'https://goo.gl/maps/Ku4BhLbeaeHMVsqJ9'} />
      <Overlay anchor={schupfen} offset={[22, 80]}>
        <img src={require("../../images/wedding-icon.png")} width={45} height={58} alt='' />
      </Overlay>
      <Overlay anchor={hotel} offset={[20, -10]}>
        <img src={require("../../images/hotel-icon.png")} width={40} height={35} alt='' />
      </Overlay>
      <Draggable  anchor={anchor} onDragEnd={setAnchor}>
        <a href='/quest2'>
        <img src={require("../../images/ragdoll.png")} width={50} height={90} alt="Pigeon!" />
        </a>
      </Draggable>
      <ZoomControl style={{ right: 10, top: 10, zIndex: 100 }} buttonStyle={{ background: 'black', color: 'white' }} />
    </Map>
    // </>
  )
}

export default VenueMap;