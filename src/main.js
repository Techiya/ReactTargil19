import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';


function SortableTable({ data }) {
    const [sortedData, setSortedData] = useState(data);
    const [clickedColumn, setClickedColumn] = useState(0);
    const [sortDown, setSortrDown] = useState(true);


    const getIsFirstRow = (row, index) => index === 0;
    const getIsData = (row, index) => index != 0;

    function sortByColumn(columnIndex) {
        const currentSortDown = (clickedColumn === columnIndex) ? !sortDown : true;
        const compareFunction = currentSortDown ? (a, b) => (('' + a[columnIndex]).localeCompare(b[columnIndex])) : (a, b) => (('' + b[columnIndex]).localeCompare(a[columnIndex]));
        const newData = [...data].filter(getIsData).sort(compareFunction);
        const finalData = [...data].filter(getIsFirstRow).concat(newData);

        setClickedColumn(columnIndex);
        setSortrDown(currentSortDown);
        setSortedData(finalData);
    }

    const createCell = (cell, columnIndex, rowIndex) => {
        return getIsFirstRow(cell, rowIndex) ? <th key={cell} onClick={e => sortByColumn(columnIndex)}>{cell}</th> : <td key={cell}>{cell}</td>;
    }

    return (
        <div>
            <table>
                {sortedData.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, columnIndex) => createCell(cell, columnIndex, rowIndex))}</tr>)}
            </table>
        </div>
    )
}

const App = () => {

    const data = [
        ['id', 'Name', 'Country', 'Email'],
        [0, 'dan', 'Israel', 'dan@gmail.com'],
        [1, 'dana', 'Israel', 'dana@gmail.com'],
        [2, 'anna', 'Israel', 'anna@gmail.com'],
        [3, 'zina', 'UK', 'zina@gmail.com'],
    ];

    return <div>
        <SortableTable data={data} />
    </div>
}

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
