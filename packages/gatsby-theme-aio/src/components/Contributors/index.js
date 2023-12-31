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
import { css } from '@emotion/react';
import { Image } from '../Image';
import PropTypes from 'prop-types';
import { getExternalLinkProps } from '../../utils';

const externalLinkProps = getExternalLinkProps();

const Contributors = ({ repository, branch, root, pagePath, contributors = [], externalContributors = [], date }) => {
  externalContributors = externalContributors.map((contributor) => ({
    login: contributor.replace('https://github.com/', '')
  }));

  externalContributors.forEach((externalContributor) => {
    // Verify no duplicates
    if (!contributors.find(({ login }) => externalContributor.login === login)) {
      // Adding external contributors first
      contributors.unshift(externalContributor);
    }
  });

  return (
    <a
      href={`https://github.com/${repository}/commits/${branch}${root ? `/${root}` : ''}/src/pages/${pagePath}`}
      {...externalLinkProps}
      css={css`
        text-decoration: none;
        color: inherit;
      `}>
      <div
        css={css`
          display: flex;
          align-items: center;
        `}>
        <div
          css={css`
            display: inline-flex;
            flex-direction: row-reverse;
            padding-left: var(--spectrum-global-dimension-size-200);
          `}>
          {contributors
            .slice(0, 5)
            .reverse()
            .map((contributor, index) => (
              <span
                key={index}
                css={css`
                  margin-left: calc(-1 * var(--spectrum-global-dimension-size-200));
                  position: relative;
                  border: var(--spectrum-global-dimension-size-40) solid var(--spectrum-global-color-gray-50);
                  width: var(--spectrum-global-dimension-size-400);
                  height: var(--spectrum-global-dimension-size-400);
                  border-radius: var(--spectrum-global-dimension-static-percent-50);
                  background: var(--spectrum-global-color-gray-50);
                  overflow: hidden;
                `}>
                <Image
                  alt={contributor.name || contributor.login}
                  src={`https://github.com/${contributor.login}.png`}
                />
              </span>
            ))}
        </div>
        <span
          css={css`
            padding-left: var(--spectrum-global-dimension-size-200);
          `}>
          {date && `Last updated ${date}`}
        </span>
      </div>
    </a>
  );
};

Contributors.propTypes = {
  href: PropTypes.string,
  contributors: PropTypes.array,
  externalContributors: PropTypes.array,
  date: PropTypes.string
};

export { Contributors };
