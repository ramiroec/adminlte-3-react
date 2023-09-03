/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { ContentHeader } from '@components';
import { Collapse } from 'react-bootstrap';

const Blank = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);
  return (
    <div>
      <ContentHeader title="SubMenu Page" />
      <section className="content">
        <div className="container-fluid">
          {!isRemoved && (
            <div className="card card-primary card-outline">
              <div className="card-header">
                <h3 className="card-title">Title</h3>
                <div className="card-tools">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="btn btn-tool"
                    data-widget="collapse"
                    data-toggle="tooltip"
                    title="Collapse"
                  >
                    <i className="fa fa-minus" />
                  </button>
                  <button
                    onClick={() => setIsRemoved(true)}
                    type="button"
                    className="btn btn-tool"
                    data-widget="remove"
                    data-toggle="tooltip"
                    title="Remove"
                  >
                    <i className="fa fa-times" />
                  </button>
                </div>
              </div>
              <Collapse in={isOpen}>
                <div className="card-body">
                  Start creating your amazing application!
                </div>
              </Collapse>
              <div className="card-footer">Footer</div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blank;
