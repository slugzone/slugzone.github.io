'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

ReactDOM.render(
  <div className={'aligner'}>

    <div>
      <div className={'text coming-soon'}>
        Coming Soon
      </div>
      <div>
        <img src="dist/images/slug.png" alt="Slug"/>
      </div>
    </div>

    <div className={'text signature'}>
      slug.zone
    </div>

    </div>,
    document.getElementById('root')
);
