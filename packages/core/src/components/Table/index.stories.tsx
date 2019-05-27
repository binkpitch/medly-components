import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { useEffect, useState } from 'react';
import Table from './Table';
import { ColumnConfig, SortOrder } from './types';

const data = [
    {
        name: 'Oli Bob',
        age: '12',
        color: 'red',
        rating: 5,
        marks: {
            history: 2,
            maths: 4
        }
    },
    {
        name: 'Mary May',
        age: '1',
        color: 'green',
        rating: 4,
        marks: {
            history: 9,
            maths: 7
        }
    },
    {
        name: 'Christine Lobowski',
        age: '42',
        color: 'green',
        rating: 4,
        marks: {
            history: 12,
            maths: 78
        }
    },
    {
        name: 'Brendon Philips',
        age: '125',
        color: 'red',
        rating: 4.5,
        marks: {
            history: 87,
            maths: 2
        }
    },
    {
        name: 'Margret Marmajuke',
        age: '16',
        color: 'yellow',
        rating: 4,
        marks: {
            history: 66,
            maths: 5
        }
    },
    {
        name: 'Van Ng',
        age: '37',
        color: 'green',
        rating: 4,
        marks: {
            history: 34,
            maths: 22
        }
    },
    {
        name: 'Duc Ng',
        age: '37',
        color: 'yellow',
        rating: 4,
        marks: {
            history: 98,
            maths: 32
        }
    }
];

const columns: ColumnConfig[] = [
    { title: 'Name', field: 'name', formatter: 'text-short', frozen: true },
    {
        title: 'Marks',
        field: 'marks',
        formatter: 'group',
        children: [{ title: 'History', field: 'history', formatter: 'numeric' }, { title: 'Math', field: 'maths', formatter: 'numeric' }]
    },
    { title: 'Age', field: 'age', formatter: 'text-short' },
    { title: 'Favourite Color', field: 'color', formatter: 'text-short' },
    { title: 'Rating', field: 'rating', formatter: 'numeric' }
];
// @ts-ignore
const getNestedValue = (arr: {}, field: string) => field.split('.').reduce((acc, curr) => acc[curr], arr);

interface DemoComponentProps {
    hideColumnField: string;
}

const DemoComponent: React.SFC<DemoComponentProps> = props => {
    const [tableData, setTableData] = useState(data);
    const [columnConfig, setColumnConfig] = useState(columns);

    useEffect(() => {
        const newConfig = hideColumn(props.hideColumnField, columnConfig);
        setColumnConfig(newConfig);
    }, [props.hideColumnField]);

    const hideColumn = (field: string, config: ColumnConfig[]): ColumnConfig[] => {
        const splitedField = field.split('.');
        return config.map(con => {
            const nextField = splitedField[1] || '';
            if (con.children) return { ...con, children: hideColumn(nextField, con.children) };
            return { ...con, hide: con.field === splitedField[0] ? true : false };
        });
    };

    const filterData = (field: string, order: SortOrder) => {
        const newArray = [...tableData];
        newArray.sort((first, second) => {
            const firstField = getNestedValue(first, field);
            const secondField = getNestedValue(second, field);
            const comparison = firstField > secondField ? 1 : firstField < secondField ? -1 : 0;
            return order === 'asc' ? comparison : comparison * -1;
        });
        setTableData(newArray);
    };

    return <Table data={tableData} onSortIconClick={filterData} columns={columnConfig} />;
};

const columnNames = {
    Name: 'name',
    History: 'marks.history',
    Maths: 'marks.maths',
    Age: 'age',
    Color: 'color',
    Rating: 'rating'
};

storiesOf('Core', module).add('Table', () => <DemoComponent hideColumnField={select('Hide Column', columnNames, 'age')} />, {
    props: {
        propTablesExclude: [DemoComponent],
        propTables: [Table]
    }
});
