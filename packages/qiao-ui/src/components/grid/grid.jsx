// react
import React, { useState, useEffect, useRef } from 'react';

// ui
import { Table, Toolbar } from '../../index.js';

// log
import { colorLog } from '../../util/log.js';

/**
 * grid
 */
export const Grid = (props) => {
  colorLog('qiao-ui/components/grid: render');

  // state
  const [cks, setCks] = useState([]);
  const [cols, setCols] = useState(null);
  const [rows, setRows] = useState(null);
  const [total, setTotal] = useState(null);
  const [sumpage, setSumpage] = useState(null);
  const [pagenumber, setPagenumber] = useState(null);

  // ref
  const editModalRef = useRef(null);
  const searchModalRef = useRef(null);

  // effect
  useEffect(() => {
    colorLog('qiao-ui/components/grid: useEffect');
    reload();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // reload
  const reload = async (data, pagenumber) => {
    colorLog('qiao-ui/components/grid: reload');

    const res = await props.init(data, pagenumber);
    setCols(res.cols);
    setRows(res.rows);
    setTotal(res.total);
    setSumpage(res.sumpage);
    setPagenumber(res.pagenumber);
  };

  // edit row
  const editRow = (row) => {
    colorLog('qiao-ui/components/grid: editRow');

    editModalRef.current.modalShow(row);
  };

  // del row
  const delRow = async (id) => {
    colorLog('qiao-ui/components/grid: delRow');

    const isSuc = await props.del(id);
    if (!isSuc) return;

    reload();
    setCks([]);
  };

  // toolbar
  const checkboxChange = (e) => {
    colorLog('qiao-ui/components/grid: checkboxChange');

    if (e.target.checked) {
      cks.push(e.target.value);
    } else {
      const index = cks.indexOf(e.target.value);
      cks.splice(index, 1);
    }

    setCks(cks);
  };

  const EditModal = props.editModal;
  const SearchModal = props.searchModal;
  return (
    <div className="data-container">
      <Toolbar
        cks={cks}
        editModal={editModalRef}
        searchModal={searchModalRef}
        delRows={delRow}
        reload={reload}
        total={total}
        sumpage={sumpage}
        pagenumber={pagenumber}
      />

      <Table cols={cols} rows={rows} editRow={editRow} delRow={delRow} checkboxChange={checkboxChange} />

      <EditModal ref={editModalRef} reload={reload} />

      <SearchModal ref={searchModalRef} reload={reload} />
    </div>
  );
};
