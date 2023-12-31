/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyLink } from '../GatsbyLink';
import '@spectrum-css/breadcrumb';
import { ChevronRightSmall } from '../Icons';

const Breadcrumbs = ({ pages }) => (
  <nav aria-label="Breadcrumb" role="navigation">
    <ul className="spectrum-Breadcrumbs spectrum-Breadcrumbs--sizeM">
      {pages.map((page, index) =>
        page && !page.header ? (
          <li className="spectrum-Breadcrumbs-item spectrum-Breadcrumbs--sizeM" key={index}>
            <GatsbyLink className="spectrum-Breadcrumbs-itemLink" to={page.href}>
              {page.title}
            </GatsbyLink>
            <ChevronRightSmall className="spectrum-Breadcrumbs-itemSeparator" />
          </li>
        ) : null
      )}
    </ul>
  </nav>
);

Breadcrumbs.propTypes = {
  pages: PropTypes.array
};

export { Breadcrumbs };
