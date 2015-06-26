import React from 'react';
var Formsy = require('formsy-react');
var Tabs = require('react-simpletabs');

export default class IndexComponent extends React.Component {
  render() {

    return (
      <Formsy.Form {...this.props}>
        <Tabs>
          <Tabs.Panel title='Tab #1'>
            <h2>Content #1 here</h2>
          </Tabs.Panel>
          <Tabs.Panel title='Tab #2'>
            <h2>Content #2 here</h2>
          </Tabs.Panel>
          <Tabs.Panel title='Tab #3'>
            <h2>Content #3 here</h2>
          </Tabs.Panel>
        </Tabs>
      </Formsy.Form>
    )

  }
}