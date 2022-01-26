
import React from 'react';
import Xarrow, {useXarrow, Xwrapper} from 'react-xarrows';
import Draggable from 'react-draggable';
import styles from './Arrows.module.scss';

const boxStyle = {border: 'grey solid 2px', borderRadius: '10px', padding: '5px'};
const boxStyleDashed = {border: 'grey solid 3px', borderRadius: '10px', padding: '5px'};

const DraggableBox = ({id}) => {
    const updateXarrow = useXarrow();

    const getStyle=()=>{
      let returnStyle=boxStyle;
      switch (id) {
        case 'elem1':
          returnStyle= boxStyleDashed;
          break;
          case 'elem2':
            returnStyle= boxStyleDashed;
            break;
            case 'elem3':
              returnStyle= boxStyleDashed;
              break;  
        default:
          break;

         
      }
      return returnStyle;
    }
    return (
        <Draggable  start={{  position: {
          x: 500,
          y: 250
        }}}
        onClick={console.log("here")}  onDrag={updateXarrow} onStop={updateXarrow}>

            <div id={id} style={getStyle()}>
              {console.log(id)}
                {id}
            </div>
        </Draggable>
    );
};

export default function Arrows() {
    return (
      <div className={styles.Arrows} data-testid="Arrows">
        <div style={{display: 'flex', justifyContent: 'space-evenly', width: '100%'}}>
            <Xwrapper>
                <DraggableBox id={'elem1'}/>
                <DraggableBox id={'elem2'}/>
                <DraggableBox id={'elem3'}/>
                <DraggableBox id={'elem4'}/>
                <DraggableBox id={'elem5'}/>
                <DraggableBox id={'elem6'}/>
                <DraggableBox id={'elem7'}/>
                <DraggableBox id={'elem8'}/>

                <Xarrow start={'elem1'} end="elem2"/>
                <Xarrow start={'elem2'} end="elem3" dashness={{animation:0}}  />

                <Xarrow start={'elem3'} end="elem8" dashness={{animation:0}} />

                <Xarrow start={'elem4'} end="elem5" />
                <Xarrow start={'elem5'} end="elem6"  />
                <Xarrow start={'elem6'} end="elem7" dashness={{animation:1}} />
                <Xarrow start={'elem7'} end="elem8" dashness={{animation:0}} />
                
            
            </Xwrapper>
        </div>
        </div>

    );
}