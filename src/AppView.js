import React, { Component } from 'react';
import { Icon, Input, Button } from 'antd';
import dragula from 'react-dragula';
import 'react-dragula/dist/dragula.css';
import './AppView.css';

export class AppView extends React.Component {
  allowDrop(ev) {
    ev.target.style.border = '1px solid black';
    console.log(ev.target);
    ev.preventDefault();
  }

  dragLeave(ev) {
    ev.target.style.border = '0px';
    console.log("Leaving");
    ev.preventDefault();
  }

  drop(ev) {
    console.log(ev.dataTransfer.getData("Text"));
    ev.preventDefault();
  }

  componentDidMount() {
    var left = this.refs.left;
    var menu = this.props.menu();
    console.log(menu);
    var drake = dragula([left, menu, this.refs.rower], {
      accepts: function (el, target, source, sibling) {
        return !(target == menu && source != target);
      },
      copy: (el, source) => source == menu,
      removeOnSpill: true
    });
  }

  render() {
    return(
      <div className="phone" onDragEnter={this.allowDrop} onDragLeave={this.dragLeave} onDrop={this.drop}>
        <div className="header">
          <div className="icon"><Icon type="bars" /></div>
          <div className="title">Header Bar</div>
        </div>
        <div className="screen">
          <div className="row">
            <div className="expanded">Text View 1</div>
            <div>Text View 2</div>
          </div>

          <div className="row" ref="rower">
            <div>Text View 1</div>
            <div>Text View 2</div>
          </div>
          
          <div className='container' ref="left">
            <div>Swap me around</div>
            <div>Swap her around</div>
            <div>Swap him around</div>
            <div>Swap them around</div>
            <div>Swap us around</div>
            <div>Swap things around</div>
            <div>Swap everything around</div>
          </div>

          <div>
            <Input placeholder="Basic usage" />
          </div>

          <div>
            <Button type="primary" shape="circle" icon="download" size="default" className="fab selectable"/>
          </div>
        </div>
        <div className="bottom-nav selectable">
          <div className="expanded">
            <Icon type="home" />
            <div>Home</div>
          </div>
          <div className="expanded">
            <Icon type="android-o" />
            <div>Android</div>
          </div>
          <div className="expanded">
            <Icon type="link" />
            <div>Icon1</div>
          </div>
          <div className="expanded">
            <Icon type="link" />
            <div>Icon1</div>
          </div>
          <div className="expanded">
            <Icon type="link" />
            <div>Icon1</div>
          </div>
        </div>
      </div>
    )
  }
}