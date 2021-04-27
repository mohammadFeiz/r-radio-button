import React,{Component,Fragment} from "react";
import "./index.css";

export default class RRadioButton extends Component {
  getStyle(){
    var {justify,style = {}} = this.props;
    var Style = {};
    if(justify){
      Style.justifyContent = justify;
    }
    return {...Style,...style};
  }
  getItemStyle(style = {}){
    var {inline = true,itemStyle = {}} = this.props;
    return {width:inline?'fit-content':'100%',...itemStyle,...style}
  }
  getOuterIconStyle(color){
    var {size = 16,round} = this.props;
    var style = {color,width:size,height:size}
    if(round === false){style.borderRadius = 0;}
    return style;
  }
  getInnerIconStyle(active,color){
    var {gap,round} = this.props;
    var style = {background:color}
    if(gap !== undefined && active){
      style.width = `calc(100% - ${gap * 2}px)`;
      style.height = `calc(100% - ${gap * 2}px)`;
    }
    if(round === false){style.borderRadius = 0;}
    return style;
  }
  render(){
    var {id,className,margin = 6,items,value = true,onChange,rtl} = this.props;
    return (
      <div 
        className={'r-radio-button' + (rtl?' rtl':'') + (className?' ' + className:'')} 
        style={this.getStyle()}
        id={id}
      >
        {
          items.map((item,i)=>{
            let active = item.value === value ?' active':'';
            let color = item.color || this.props.color;
            return (
              <Fragment key={i}>
                <div className={'r-radio-button-item' + active} title={item.title} onClick={()=>onChange(item.value,i)} style={this.getItemStyle(item.style)}>
                  <div className={'r-radio-button-icon' + active} style={this.getOuterIconStyle(color)}>
                    {
                      item.badge && 
                      <div className='r-radio-button-badge'>
                        <div>{item.badge}</div>
                      </div>
                    }
                    <div className='r-radio-button-icon-inner' style={this.getInnerIconStyle(active,color)}></div>
                  </div>
                  <div className='r-radio-button-margin' style={{width:margin}}></div>  
                  <div className='r-radio-button-text' style={{color:item.color}}>{item.text}</div>
                </div>
              </Fragment>
            )
          })
        }
      </div>
    );
  }
}
