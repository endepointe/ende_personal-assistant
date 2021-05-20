import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
{/* 
          <Tabs>
              <button label="Gator">
                See ya later, <em>Alligator</em>!
              </button>
              <button label="Croc">
                After 'while, <em>Crocodile</em>!
              </button>
              <button label="Sarcosuchus">
                Nothing to see here, this tab is <em>extinct</em>!
              </button>
            </Tabs>
 */}
class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  }

  render() {
    const {
      onClickTabItem,
      props: {
        children,
      },
      state: {
        activeTab,
      }
    } = this;

    return (
      <div className="tabs">
        <ol className="tab-list">
          {children.map((child) => {
            const { label } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>
        <div className="tab-content">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;