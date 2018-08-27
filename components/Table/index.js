import Wrapper from './Wrapper'

const Table = ({ hits }) => {
  return (
    <Wrapper>
      <thead>
        <tr>
          <th>Facility</th>
          <th>Type</th>
          <th>Model</th>
          <th>Serial</th>
          <th>Manufacturer</th>
        </tr>
      </thead>

      <tbody>{hits.map((hit, v) => {
        return (
          <tr key={v}>
            <td>{hit._source.facility}</td>
            <td>{hit._source.type}</td>
            <td>{hit._source.model}</td>
            <td>{hit._source.serial}</td>
            <td>{hit._source.manufacturer}</td>
          </tr>
        )
      })}</tbody>
    </Wrapper>
  )
}

export default Table
