import React, { Component } from 'react';
import { View, ListView } from 'react-native';

import TaskListItem from './TaskListItem';

export default class TaskList extends Component {
    constructor() {
        super();

                this.dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        });
    }

    render() {
        let dataSource = this.dataSource.cloneWithRows(this.props.items);
        return (
            <ListView
                dataSource={dataSource}
                renderRow={ this.renderRow } />
        );
    }

    renderRow = (row, id, rowId) => {
        <TaskListItem item={row}>
        </TaskListItem>
    }
}