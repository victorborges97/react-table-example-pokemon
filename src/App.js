import React, { useState, useEffect, memo } from 'react';
import { Table, Column } from './components/table';
import BaseTable, { AutoResizer, SortOrder } from 'react-base-table';
import 'react-base-table/styles.css';
import dataFire from './data';
import columnDefinition from './column-definition';
import Empty from './components/table/empty';
import Loader from './components/table/loader';

import './index.css';

const App = () => {
  const [data, setData] = useState([]);
  const [sortBy, setSortBy] = useState({ key: 'name', order: SortOrder.ASC });
  const [loading, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const defaultData = dataFire.sort((a, b) => (a.disciplina > b.disciplina ? 1 : -1))
      console.log(defaultData)
      setLoad(false);
      setData(dataFire)
    }, 1000)
    return () => {
      clearTimeout(timer);
    }
  }, [])

  const onColumnSort = sortBy => {
    const order = sortBy.order === SortOrder.ASC ? 1 : -1
    // eslint-disable-next-line no-use-before-define
    const dataOrd = [...data]
    dataOrd.sort((a, b) => (a[sortBy.key] > b[sortBy.key] ? order : -order))
    setSortBy(sortBy);
    setData(dataOrd);
  }


  return (
    <div className="ContainerTable">
      <AutoResizer>
        {({ width, height }) => (
          <BaseTable
            fixed
            emptyRenderer={<Empty loading={loading} />}
            overlayRenderer={<Loader loading={loading} />}
            columns={columnDefinition}
            headerHeight={35}
            rowHeight={35}
            height={height}
            width={width}
            data={data}
            sortBy={sortBy}
            onColumnSort={onColumnSort}
          />
        )}
      </AutoResizer>
    </div>
  );
}

export default memo(App);
