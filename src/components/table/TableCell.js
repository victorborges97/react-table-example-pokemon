import React from 'react';

import Check from './Check';
import Hour from './Hour';

const TableCell = ({ className, cellData, column }) => {
  console.log(column);
  const { dataKey } = column;
  if (dataKey === "inspirese" || dataKey === "videoaulas" || dataKey === "pea"
    || dataKey === "livros" || dataKey === "ma1" || dataKey === "gabma1"
    || dataKey === "aps1" || dataKey === "gabaps1" || dataKey === "ma2"
    || dataKey === "gabma2" || dataKey === "aps2" || dataKey === "gabaps2"
    || dataKey === "situacao") return <Check className={className} data={column} value={cellData} />

  if (dataKey === "horarioatendimento") return <Hour className={className} hour={cellData} />;

  return <div className={className}>{cellData}</div>;
}

export default TableCell;
