const QueryReducer = (columnsName) => {
    let values = columnsName.map(() => '?').join(',');
    return values;
}

module.exports = QueryReducer;
