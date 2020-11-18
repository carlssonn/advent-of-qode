import React from 'react';
import { Branch } from './Styled/christmas.js';
import { treeData } from './treeData.js';

const getBranchContent = (branch) => {
  return (
    <tr>
      <td>{branch.ornament}</td>
      <td>{branch.day > 0 ? branch.day : ''}</td>
    </tr>
  );
};

export default function Tree() {
  return (
    <div style={{ width: '950px', margin: '20px 0 0 40px' }}>
      {treeData.map((branch, i) => (
        <Branch active={branch.active} key={i}>
          <table>
            <tbody>{getBranchContent(branch)}</tbody>
          </table>
        </Branch>
      ))}
    </div>
  );
}
