import React,{Component,Fragment} from "react";
import "./index.css";

export default class RRadioButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      items:[{text:'mohammad',value:'m'},{text:'abbas',value:'a'}],
      value:'a',
    }
  }
  render(){
    var {id,className,style,margin = 6,items,value,type = 'vertical',color = 'orange',size = 20,space = 12,onChange,rtl} = this.props;
    return (
      <div 
        className={'r-radio-button' + (type === 'vertical'?' vertical':' horizontal') + (rtl?' rtl':'') + (className?' ' + className:'')} 
        style={style}
        id={id}
      >
        {
          items.map((item,i)=>{
            let active = item.value === value;
            return (
              <Fragment>
                <div className='r-radio-button-item' onClick={()=>onChange(item.value)}>
                  <div className='r-radio-button-icon' style={{color,width:size,height:size}}>
                    {active && <div style={{background:color,width:size - 4,height:size - 4}}></div>}
                  </div>
                  <div className='r-radio-button-margin' style={{width:margin}}></div>  
                  <div className='r-radio-button-text'>{item.text}</div>
                </div>
                {i < items.length - 1 && <div className='r-radio-button-space' style={{[type === 'horizontal'?'width':'height']:space}}></div>}
              </Fragment>
            )
          })
        }
      </div>
    );
  }
}
