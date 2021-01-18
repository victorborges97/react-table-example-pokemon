import React from 'react'
import Check from './components/table/Check'
import Text from 'react-texty'
import 'react-texty/styles.css'

export default [
  {
    key: 'disciplina',
    dataKey: 'disciplina',
    title: 'Disciplina',
    cellRenderer: ({ cellData, className }) => (
      <Text tooltip={`${cellData}`} hideDelay={400} className={className}>{cellData}</Text>
    ),
    width: 180,
    sortable: true,
    align: 'left'
  },
  {
    key: 'nameprofessor',
    dataKey: 'nameprofessor',
    title: 'Professor',
    width: 140,
    sortable: true,
    align: 'center'
  },
  {
    key: 'horarioatendimento',
    dataKey: 'horarioatendimento',
    title: 'Atendimento',
    width: 120,
    align: 'center'
  },
  {
    key: 'inspirese',
    dataKey: 'inspirese',
    title: 'Inspire-se',
    cellRenderer: ({ cellData, rowData }) => (
      <Check data={rowData} value={cellData} />
    ),
    width: 90,
    align: 'center'
  },
  {
    key: 'videoaulas',
    dataKey: 'videoaulas',
    title: 'Videoaulas',
    cellRenderer: ({ cellData, rowData }) => (
      <Check data={rowData} value={cellData} />
    ),
    width: 90,
    align: 'center'
    // sortable: true
  },
  {
    key: 'pea',
    dataKey: 'pea',
    title: 'PEA',
    cellRenderer: ({ cellData, rowData }) => (
      <Check data={rowData} value={cellData} />
    ),
    width: 80,
    align: 'center'
    // sortable: true
  },
  {
    key: 'livros',
    dataKey: 'livros',
    title: 'Livro',
    cellRenderer: ({ cellData, rowData }) => (
      <Check data={rowData} value={cellData} />
    ),
    width: 80,
    align: 'center'
    // sortable: true
  },
  {
    key: 'ma1',
    dataKey: 'ma1',
    title: 'MA1',
    cellRenderer: ({ cellData, rowData }) => (
      <Check data={rowData} value={cellData} />
    ),
    width: 80,
    align: 'center'
    // sortable: true
  },
  {
    key: 'gabma1',
    dataKey: 'gabma1',
    title: 'GAB1',
    cellRenderer: ({ cellData, rowData }) => (
      <Check data={rowData} value={cellData} />
    ),
    width: 80,
    align: 'center'
    // sortable: true
  },
  {
    key: 'aps1',
    dataKey: 'aps1',
    title: 'APS1',
    cellRenderer: ({ cellData, rowData }) => (
      <Check data={rowData} value={cellData} />
    ),
    width: 80,
    align: 'center'
    // sortable: true
  },
  {
    key: 'gabaps1',
    dataKey: 'gabaps1',
    title: 'GAB1',
    cellRenderer: ({ cellData, rowData }) => (
      <Check data={rowData} value={cellData} />
    ),
    width: 80,
    align: 'center'
    // sortable: true
  },
  {
    key: 'ma2',
    dataKey: 'ma2',
    title: 'MA2',
    cellRenderer: ({ cellData, rowData }) => (
      <Check data={rowData} value={cellData} />
    ),
    width: 80,
    align: 'center'
    // sortable: true
  },
  {
    key: 'gabma2',
    dataKey: 'gabma2',
    title: 'GAB2',
    cellRenderer: ({ cellData, rowData }) => (
      <Check data={rowData} value={cellData} />
    ),
    width: 80,
    align: 'center'
    // sortable: true
  },
  {
    key: 'aps2',
    dataKey: 'aps2',
    title: 'APS2',
    cellRenderer: ({ cellData, rowData }) => (
      <Check data={rowData} value={cellData} />
    ),
    width: 80,
    align: 'center'
    // sortable: true
  },
  {
    key: 'gabaps2',
    dataKey: 'gabaps2',
    title: 'GAB2',
    cellRenderer: ({ cellData, rowData }) => (
      <Check data={rowData} value={cellData} />
    ),
    width: 80,
    align: 'center'
    // sortable: true
  },
  {
    key: 'situacao',
    dataKey: 'situacao',
    title: 'Ativo',
    cellRenderer: ({ cellData, rowData }) => (
      <Check data={rowData} value={cellData} />
    ),
    width: 80,
    align: 'center'
    // sortable: true
  },
  {
    key: 'cursos',
    dataKey: 'cursos',
    title: 'Cursos',
    width: 100,
    align: 'center'
    // sortable: true
  },
  {
    key: 'codigodisciplina',
    dataKey: 'codigodisciplina',
    title: 'Código',
    width: 100,
    align: 'center'
    // sortable: true
  },
  {
    key: '#',
    dataKey: '#',
    title: '#',
    width: 100,
    align: 'center'
    // sortable: true
  }
]